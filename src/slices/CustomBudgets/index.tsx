"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `CustomBudgets`.
 */
export type CustomBudgetsProps =
  SliceComponentProps<Content.CustomBudgetsSlice>;

/**
 * Component for "CustomBudgets" Slices.
 */
const CustomBudgets = ({ slice }: CustomBudgetsProps): JSX.Element => {
  return (
    <S.CustomBudgetsContainer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.image} alt="" />
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
      <S.Button>{slice.primary.cta}</S.Button>
    </S.CustomBudgetsContainer>
  );
};

export default CustomBudgets;
