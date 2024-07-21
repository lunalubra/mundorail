"use client";

import { Content, isFilled, PrismicDocumentWithUID } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { useMediaQuery } from "usehooks-ts";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import { RouteCardDocumentData, Simplify } from "../../../prismicio-types";

/**
 * Props for `RoutesConditions`.
 */
export type RoutesConditionsProps =
  SliceComponentProps<Content.RoutesConditionsSlice>;

/**
 * Component for "RoutesConditions" Slices.
 */
const RoutesConditions = ({ slice }: RoutesConditionsProps): JSX.Element => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const client = createClient();

  const [route, setRoute] =
    useState<
      PrismicDocumentWithUID<
        Simplify<RouteCardDocumentData>,
        "route_card",
        string
      >
    >();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRoutes = async () => {
      setIsLoading(true);
      if (
        isFilled.contentRelationship(slice.primary.route) &&
        slice.primary.route.uid
      ) {
        const route = await client.getByUID(
          "route_card",
          slice.primary.route.uid
        );

        setRoute(route);
        setIsLoading(false);
      }
    };

    if (!route && !isLoading) getRoutes();
  }, [client, isLoading, slice.items, route, slice.primary.route]);

  if (isLoading) {
    return <>loading...</>;
  }

  if (isMobile) {
    const copyOfRoutesConditions = [...(route?.data.conditions ?? [])];
    const firstTitle = copyOfRoutesConditions.shift();
    const secondTitleIndex = copyOfRoutesConditions.findIndex(
      (item) => item.type === "heading6"
    );
    const secondTitle = copyOfRoutesConditions[secondTitleIndex];
    const firstConditions = copyOfRoutesConditions.slice(0, secondTitleIndex);
    const secondConditions = copyOfRoutesConditions.slice(secondTitleIndex + 1);

    return (
      <S.Container
        $isSurvivors={slice.primary.issurvivors}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        style={{
          backgroundImage: `url(${route?.data.signature_image.url!})`
        }}
      >
        {firstTitle && <PrismicRichText field={[firstTitle!]} />}
        {firstConditions.length && (
          <S.ListContainer>
            {firstConditions.map((item, index) => (
              <S.ListItem $isSurvivors={slice.primary.issurvivors} key={index}>
                <PrismicRichText field={[item!]} />
              </S.ListItem>
            ))}
          </S.ListContainer>
        )}
        {secondTitle && <PrismicRichText field={[secondTitle!]} />}
        {secondConditions.length && (
          <S.ListContainer>
            {secondConditions.map((item, index) => (
              <S.ListItem $isSurvivors={slice.primary.issurvivors} key={index}>
                <PrismicRichText field={[item!]} />
              </S.ListItem>
            ))}
          </S.ListContainer>
        )}
      </S.Container>
    );
  }

  return (
    <S.BiggerContainer>
      <S.DesktopContainer
        $isSurvivors={slice.primary.issurvivors}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        style={{
          backgroundImage: `url(${route?.data.signature_image.url!})`
        }}
      >
        <PrismicRichText field={route?.data.conditions} />
      </S.DesktopContainer>
    </S.BiggerContainer>
  );
};

export default RoutesConditions;
