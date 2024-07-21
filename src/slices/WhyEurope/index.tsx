"use client";

import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { createClient } from "@/prismicio";
import { useEffect, useRef, useState } from "react";
import { useInterval, useMediaQuery } from "usehooks-ts";

/**
 * Props for `WhyEurope`.
 */
export type WhyEuropeProps = SliceComponentProps<Content.WhyEuropeSlice>;

/**
 * Component for "WhyEurope" Slices.
 */
const WhyEurope = ({ slice }: WhyEuropeProps): JSX.Element => {
  const client = createClient();
  const [activeTab, setActiveTab] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [whyEurope, setWhyEurope] = useState<
    (Content.WhyeuropeDocument<string> | undefined)[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left:
          activeTab === 1
            ? 0
            : (activeTab - 1) * carouselRef.current.clientWidth,
        behavior: "smooth"
      });
    }
  }, [activeTab]);

  useInterval(
    () => {
      setActiveTab(whyEurope.length === activeTab ? 1 : activeTab + 1);
    },
    isAutoPlaying ? 10000 : null
  );

  useEffect(() => {
    const getWhyEurope = async () => {
      setIsLoading(true);
      const whyEurope = await Promise.all(
        slice.items.map((item) => {
          if (
            isFilled.contentRelationship(item.whyeurope) &&
            item.whyeurope.uid
          ) {
            return client.getByUID("whyeurope", item.whyeurope.uid);
          }
        })
      );
      setWhyEurope(whyEurope);
      setIsLoading(false);
    };

    if (!whyEurope.length && !isLoading) getWhyEurope();
  }, [client, isLoading, slice.items, whyEurope.length]);

  if (isLoading) {
    return <>loading...</>;
  }
  return (
    <S.BiggerContainer>
      <S.Container
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        ref={carouselRef}
      >
        {whyEurope.map((whyEurope) => (
          <S.WhyEurope
            key={whyEurope?.uid}
            style={{
              backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url(${whyEurope?.data.image.url!})`
            }}
          >
            <S.WhyEuropeContent>
              <S.WhyEuropeTitle>
                <PrismicRichText field={whyEurope?.data.title} />
              </S.WhyEuropeTitle>
              <S.WhyEuropeDescription>
                <PrismicRichText field={whyEurope?.data.description} />
              </S.WhyEuropeDescription>
            </S.WhyEuropeContent>
          </S.WhyEurope>
        ))}
        <S.WhyEuropesControllers>
          {Array.from(Array(whyEurope.length).keys()).map((_, index) => (
            <S.WhyEuropeController
              $isActive={activeTab === index + 1}
              onClick={() => {
                setActiveTab(index + 1);
                setIsAutoPlaying(false);
              }}
              key={index}
            />
          ))}
        </S.WhyEuropesControllers>
      </S.Container>
    </S.BiggerContainer>
  );
};

export default WhyEurope;
