"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `TripRecomendations`.
 */
export type TripRecomendationsProps =
  SliceComponentProps<Content.TripRecomendationsSlice>;

/**
 * Component for "TripRecomendations" Slices.
 */
const TripRecomendations = ({
  slice
}: TripRecomendationsProps): JSX.Element => {
  return (
    <S.Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <S.LeftSection>
        <S.Title>
          <PrismicRichText field={slice.primary.title} />
        </S.Title>
        <S.Description $isSurvivors={slice.primary.issurvivors}>
          <PrismicRichText field={slice.primary.recomendations} />
        </S.Description>
        <S.Button>{slice.primary.cta}</S.Button>
      </S.LeftSection>
      <S.RightSection>
        <PrismicNextImage field={slice.primary.image} alt="" />
      </S.RightSection>
    </S.Container>
  );
};

export default TripRecomendations;
