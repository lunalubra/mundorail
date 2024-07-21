"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ForMoreInfoContact`.
 */
export type ForMoreInfoContactProps =
  SliceComponentProps<Content.ForMoreInfoContactSlice>;

/**
 * Component for "ForMoreInfoContact" Slices.
 */
const ForMoreInfoContact = ({
  slice
}: ForMoreInfoContactProps): JSX.Element => {
  return (
    <S.CustomBudgetsContainer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.background_image} alt="" />
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.subtitle} />
      <S.Button field={slice.primary.cta_link}>{slice.primary.cta}</S.Button>
    </S.CustomBudgetsContainer>
  );
};

export default ForMoreInfoContact;
