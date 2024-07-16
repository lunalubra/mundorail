"use client";

import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";

/**
 * Props for `RoutesDescription`.
 */
export type RoutesDescriptionProps =
  SliceComponentProps<Content.RoutesDescriptionSlice>;

/**
 * Component for "RoutesDescription" Slices.
 */
const RoutesDescription = ({ slice }: RoutesDescriptionProps): JSX.Element => {
  const client = createClient();

  const [routes, setRoutes] = useState<
    Content.RoutesDocument<string> | undefined
  >();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRoutes = async () => {
      setIsLoading(true);
      if (
        isFilled.contentRelationship(slice.primary.routes) &&
        slice.primary.routes.uid
      ) {
        const routes = await client.getByUID(
          "routes",
          slice.primary.routes.uid
        );
        setRoutes(routes);
        setIsLoading(false);
      }
    };

    if (!routes && !isLoading) getRoutes();
  }, [client, isLoading, slice.items, routes, slice.primary.routes]);

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <S.Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <S.Title>
        {slice.primary.alternative_title.length ? (
          <PrismicRichText field={slice.primary.alternative_title} />
        ) : (
          <PrismicRichText field={routes?.data.long_title} />
        )}
      </S.Title>
      <S.Description>
        <PrismicRichText field={routes?.data.description} />
      </S.Description>
      {slice.primary.cta && <S.Button>{slice.primary.cta}</S.Button>}
    </S.Container>
  );
};

export default RoutesDescription;
