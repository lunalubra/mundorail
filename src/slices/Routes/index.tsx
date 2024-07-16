"use client";

import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import * as S from "./index.styles";
import { PrismicNextImage } from "@prismicio/next";
import { useRef } from "react";
import { useRouter } from "next/navigation";

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
  const cardsContainerRef = useRef(null);
  const router = useRouter();

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
      <S.Title>
        <PrismicRichText field={slice.primary.title} />
      </S.Title>
      <S.CardsSection ref={cardsContainerRef}>
        {cards.map((card) => (
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
              <span>{card?.data.subtitle}</span>
              <PrismicRichText field={card?.data.title} />
            </S.CardBottomSection>
          </S.CardContainer>
        ))}
      </S.CardsSection>
      {/* <S.Line>
        <S.Indicator />
      </S.Line> */}
      {slice.primary.cta && <S.Button>{slice.primary.cta}</S.Button>}
    </S.RoutesSectionContainer>
  );
};

export default RouteCard;
