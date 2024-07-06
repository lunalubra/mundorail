"use client";

import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import * as S from "./index.styles";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `RouteCard`.
 */
export type RouteCardProps = SliceComponentProps<Content.RouteCardSlice>;

/**
 * Component for "RouteCard" Slices.
 */

// eslint-disable-next-line @next/next/no-async-client-component
const RouteCard = async ({ slice }: RouteCardProps): Promise<JSX.Element> => {
  const client = createClient();

  const cards = await Promise.all(
    slice.items.map((item) => {
      if (
        isFilled.contentRelationship(item.route_card) &&
        item.route_card.uid
      ) {
        return client.getByUID("route_card", item.route_card.uid);
      }
    })
  );

  return (
    <S.RoutesSectionContainer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <S.Title>{slice.primary.title}</S.Title>
      <S.CardsSection>
        {cards.map((card) => (
          <S.CardContainer key={card?.uid}>
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
              <span>{card?.data.subtitle}</span>
              <p>{card?.data.title}</p>
            </S.CardBottomSection>
          </S.CardContainer>
        ))}
      </S.CardsSection>
      <S.Button>{slice.primary.cta}</S.Button>
    </S.RoutesSectionContainer>
  );
};

export default RouteCard;
