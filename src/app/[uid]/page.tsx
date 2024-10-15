import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { getCountry } from "@/lib/getCountry";

type Params = { uid: string };

const customLanguage = process.env.CUSTOM_LANG || "es-es";

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
    .getByUID("page", params.uid, {
      lang: customLanguage
    })
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

  const page = await client
    .getByUID("page", params.uid, {
      lang: customLanguage
    })
    .catch(() => notFound());

  return (
    <SliceZone
      slices={page.data.slices}
      components={components}
      context={{ lang: customLanguage }}
    />
  );
}

export async function generateStaticParams() {
  const client = createClient();
  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("page", {
    lang: customLanguage,
    predicates: [prismic.filter.not("my.page.uid", "home")]
  });

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
