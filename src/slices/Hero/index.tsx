"use client";

import { useScroll, useTransform } from "framer-motion";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { useMediaQuery } from "usehooks-ts";

const Carousel = ({
  carouselOptions,
  isOposite = false
}: {
  carouselOptions: string[];
  isOposite?: boolean;
}) => {
  const carouselOptionsCopy = [
    ...carouselOptions,
    ...carouselOptions,
    ...carouselOptions,
    ...carouselOptions,
    ...carouselOptions,
    ...carouselOptions,
    ...carouselOptions,
    ...carouselOptions,
    ...carouselOptions,
    ...carouselOptions,
    ...carouselOptions,
    ...carouselOptions,
    ...carouselOptions,
    ...carouselOptions,
    ...carouselOptions,
    ...carouselOptions,
    ...carouselOptions
  ];
  const { scrollY } = useScroll();
  const oposite = useTransform(() => scrollY.get() * -1);

  return (
    <S.CarouselContainer>
      <S.Carousel style={{ translateX: isOposite ? oposite : scrollY }}>
        {...carouselOptionsCopy.map((item, idx) => (
          <span key={item + idx.toString()}>{item}</span>
        ))}
      </S.Carousel>
    </S.CarouselContainer>
  );
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const firstSectionOfTitle = slice.primary.title!.split(" ")[0];
  const secondSectionOfTitle = slice.primary
    .title!.split(" ")!
    .filter((_, i) => i !== 0)!
    .join(" ");

  const firstCarouselOptions = [
    slice.primary.first_option,
    slice.primary.second_option,
    slice.primary.third_option,
    slice.primary.forth_option
  ] as string[];

  const secondCarouselOptions = [
    slice.primary.fifth_option,
    slice.primary.sixth_option,
    slice.primary.seventh_option,
    slice.primary.eight_option
  ] as string[];

  return (
    <S.HeroContainer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.hero} />
      <S.MainContentContainer>
        <S.MainContent>
          <S.Title>
            {firstSectionOfTitle} {isMobile && <br />}{" "}
            <span>{secondSectionOfTitle}</span>
          </S.Title>
          <S.Button>{slice.primary.cta}</S.Button>
        </S.MainContent>
      </S.MainContentContainer>
      <S.SecondaryContentContainer>
        <S.SecondaryContent>
          <PrismicNextImage field={slice.primary.secondary_image} alt="" />
          <S.SecondaryTextContainer>
            <S.SecondaryTitle>{slice.primary.secondary_title}</S.SecondaryTitle>
            <S.SecondaryDescription>
              {slice.primary.secondary_description}
            </S.SecondaryDescription>
          </S.SecondaryTextContainer>
        </S.SecondaryContent>
        <Carousel carouselOptions={firstCarouselOptions} />
        <Carousel carouselOptions={secondCarouselOptions} isOposite />
      </S.SecondaryContentContainer>
    </S.HeroContainer>
  );
};

export default Hero;
