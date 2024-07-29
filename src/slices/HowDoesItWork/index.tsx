"use client";

import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { PrismicRichText } from "@prismicio/react";
import { useMediaQuery } from "usehooks-ts";
import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Props for `HowDoesItWork`.
 */
export type HowDoesItWorkProps =
  SliceComponentProps<Content.HowDoesItWorkSlice>;

/**
 * Component for "HowDoesItWork" Slices.
 */

const HowDoesItWork = ({ slice }: HowDoesItWorkProps): JSX.Element => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const client = createClient();

  const [howDoesItWork, setHowDoesItWork] = useState<
    (Content.ReasonsDocument<string> | undefined)[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getHowDoesItWork = async () => {
      setIsLoading(true);
      const howDoesItWork = await Promise.all(
        slice.items.map((item) => {
          if (
            isFilled.contentRelationship(item.how_does_it_work) &&
            item.how_does_it_work.uid
          ) {
            return client.getByUID("reasons", item.how_does_it_work.uid);
          }
        })
      );
      setHowDoesItWork(howDoesItWork);
      setIsLoading(false);
    };

    if (!howDoesItWork.length && !isLoading) getHowDoesItWork();
  }, [client, isLoading, slice.items, howDoesItWork.length]);

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <S.Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.alternative_title ? (
        <Image
          src={slice.primary.alternative_title.url!}
          alt=""
          width={360}
          height={118}
        />
      ) : (
        <S.Title>{slice.primary.title}</S.Title>
      )}
      <S.CardsContainer>
        {howDoesItWork.map((card, index) => (
          <S.Card
            key={card?.uid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <S.CardNumber>{index + 1}</S.CardNumber>
            {card?.data.title.length && (
              <PrismicRichText data-class="title" field={card?.data.title} />
            )}
            {card?.data.description.length && (
              <PrismicRichText
                data-class="description"
                field={card?.data.description}
              />
            )}
          </S.Card>
        ))}
      </S.CardsContainer>
      {!isMobile && (
        <S.Button field={slice.primary.cta_link}>{slice.primary.cta}</S.Button>
      )}
    </S.Container>
  );
};

export default HowDoesItWork;
