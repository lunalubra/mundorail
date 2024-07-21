"use client";

import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import * as S from "./index.styles";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Props for `RouteCard`.
 */
export type RouteCardProps = SliceComponentProps<Content.RouteCardSlice>;

/**
 * Component for "RouteCard" Slices.
 */

const RouteCard = ({ slice }: RouteCardProps): JSX.Element => {
  const client = createClient();
  const cardsContainerRef = useRef(null);
  const router = useRouter();

  const [routes, setRoutes] = useState<
    (Content.RouteCardDocument<string> | undefined)[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRoutes = async () => {
      setIsLoading(true);
      const routes = await Promise.all(
        slice.items.map((item) => {
          if (
            isFilled.contentRelationship(item.route_card) &&
            item.route_card.uid
          ) {
            return client.getByUID("route_card", item.route_card.uid);
          }
        })
      );
      setRoutes(routes);
      setIsLoading(false);
    };

    if (!routes.length && !isLoading) getRoutes();
  }, [client, isLoading, slice.items, routes.length]);

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <S.RoutesSectionContainer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <S.Title>
        <PrismicRichText field={slice.primary.title} />
      </S.Title>
      <S.CardsSection ref={cardsContainerRef}>
        {routes.map((card) => (
          <S.CardContainer
            key={card?.uid}
            onClick={() => router.push("/" + card?.uid)}
          >
            <S.CardTopSection>
              <S.CardDays>
                {card?.data.days} <span>días</span>
              </S.CardDays>
              <PrismicNextImage field={card?.data.route_image} alt="" />
              <S.CardPrice>
                <div>*</div>
                <span>Desde</span>
                <p>{card?.data.price}€</p>
              </S.CardPrice>
            </S.CardTopSection>
            <S.CardBottomSection>
              <PrismicRichText field={card?.data.title} />
            </S.CardBottomSection>
          </S.CardContainer>
        ))}
      </S.CardsSection>
      {slice.primary.cta && <S.Button>{slice.primary.cta}</S.Button>}
    </S.RoutesSectionContainer>
  );
};

export default RouteCard;
