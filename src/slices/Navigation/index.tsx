"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
/**
 * Props for `Navigation`.
 */
export type NavigationProps = SliceComponentProps<Content.NavigationSlice>;

/**
 * Component for "Navigation" Slices.
 */
const Navigation = ({ slice }: NavigationProps): JSX.Element => {
  return (
    <S.NavigationContainer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <S.Link field={slice.primary.page_1}>Inicio</S.Link>
      <S.Link field={slice.primary.page_2}>Rutas</S.Link>
      <PrismicNextImage field={slice.primary.logo} alt="" />
      <S.Link field={slice.primary.page_3}>Nosotros</S.Link>
      <S.Link field={slice.primary.page_4}>Contactanos</S.Link>
    </S.NavigationContainer>
  );
};

export default Navigation;
