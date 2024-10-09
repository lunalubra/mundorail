import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { headers } from "next/headers";

type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({
  params
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return {
    title: prismic.asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || ""
        }
      ]
    }
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const headersList = headers();
  const host = headersList.get("X-Forwarded-Host")!;
  const domainExtension = host.split(".")[host.split(".").length - 1];

  const page = await client
    .getByUID("page", params.uid, {
      lang: domainExtension === "com" ? "es-es" : "es-mx"
    })
    .catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateStaticParams() {
  const client = createClient();
  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("page", {
    predicates: [prismic.filter.not("my.page.uid", "home")]
  });

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
