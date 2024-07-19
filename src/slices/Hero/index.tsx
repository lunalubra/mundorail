"use client";

import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { useMediaQuery } from "usehooks-ts";

const Carousel = ({ carouselOptions }: { carouselOptions: string[] }) => {
  const carouselOptionsCopy = [...carouselOptions];

  const FAST_DURATION = 15;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        }
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width, mustFinish]);

  return (
    <S.CarouselContainer>
      <S.Carousel
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
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
        <Carousel carouselOptions={secondCarouselOptions} />
      </S.SecondaryContentContainer>
    </S.HeroContainer>
  );
};

export default Hero;
