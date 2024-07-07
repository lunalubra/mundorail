"use client";

import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { PrismicRichText } from "@prismicio/react";
import { useMediaQuery } from "usehooks-ts";

/**
 * Props for `HowDoesItWork`.
 */
export type HowDoesItWorkProps =
  SliceComponentProps<Content.HowDoesItWorkSlice>;

/**
 * Component for "HowDoesItWork" Slices.
 */
// eslint-disable-next-line @next/next/no-async-client-component
const HowDoesItWork = async ({
  slice
}: HowDoesItWorkProps): Promise<JSX.Element> => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const client = createClient();

  const cards = await Promise.all(
    slice.items.map((item) => {
      if (
        isFilled.contentRelationship(item.how_does_it_work) &&
        item.how_does_it_work.uid
      ) {
        return client.getByUID("how_does_it_work", item.how_does_it_work.uid);
      }
    })
  );

  return (
    <S.Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <S.Title>{slice.primary.title}</S.Title>
      <S.CardsContainer>
        {cards.map((card, index) => (
          <S.Card key={card?.uid}>
            <S.CardNumber>{index + 1}</S.CardNumber>
            <PrismicRichText data-class="title" field={card?.data.title} />
            <PrismicRichText
              data-class="description"
              field={card?.data.description}
            />
          </S.Card>
        ))}
      </S.CardsContainer>
      {!isMobile && <S.Button>{slice.primary.cta}</S.Button>}
    </S.Container>
  );
};

export default HowDoesItWork;
