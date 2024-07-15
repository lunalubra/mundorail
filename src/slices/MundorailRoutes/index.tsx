"use client";

import { Content, isFilled, RichTextField } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { createClient } from "@/prismicio";
import { useEffect, useRef, useState } from "react";
import { useHover } from "usehooks-ts";
import { useRouter } from "next/navigation";

const RouteCard = ({
  backgroundImage,
  title,
  shortDescription,
  uid
}: {
  backgroundImage?: string | null;
  title?: RichTextField;
  shortDescription?: RichTextField;
  uid: string;
}) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const router = useRouter();

  return (
    <S.Route
      ref={hoverRef}
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      {isHover ? (
        <S.RouteButton onClick={() => router.push("/" + uid)}>
          Ver más
        </S.RouteButton>
      ) : (
        <>
          <S.RouteTitle>
            <PrismicRichText field={title} />
          </S.RouteTitle>
          <S.RouteDescription>
            <PrismicRichText field={shortDescription} />
          </S.RouteDescription>
        </>
      )}
    </S.Route>
  );
};

/**
 * Props for `MundorailRoutes`.
 */
export type MundorailRoutesProps =
  SliceComponentProps<Content.MundorailRoutesSlice>;

/**
 * Component for "MundorailRoutes" Slices.
 */
const MundorailRoutes = ({ slice }: MundorailRoutesProps): JSX.Element => {
  const client = createClient();

  const [routes, setRoutes] = useState<
    (Content.RoutesDocument<string> | undefined)[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRoutes = async () => {
      setIsLoading(true);
      const routes = await Promise.all(
        slice.items.map((item) => {
          if (isFilled.contentRelationship(item.routes) && item.routes.uid) {
            return client.getByUID("routes", item.routes.uid);
          }
        })
      );
      setRoutes(routes);
      setIsLoading(false);
    };

    if (!routes.length && !isLoading) getRoutes();
    return () => {};
  }, [client, isLoading, slice.items, routes.length]);

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <S.Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <S.Title>
        <PrismicRichText field={slice.primary.title} />
      </S.Title>
      <S.RoutesContainer>
        {routes.map((route) => (
          <RouteCard
            key={route?.uid}
            uid={route?.uid!}
            backgroundImage={route?.data.background_image.url}
            title={route?.data.title}
            shortDescription={route?.data.short_description}
          />
        ))}
      </S.RoutesContainer>
      <S.Button>{slice.primary.cta}</S.Button>
    </S.Container>
  );
};

export default MundorailRoutes;
