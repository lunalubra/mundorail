"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { PrismicNextImage } from "@prismicio/next";
import { useMediaQuery } from "usehooks-ts";
/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <S.FooterContainer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <S.TopSection>
        {!isMobile && (
          <>
            <div>
              <PrismicNextImage field={slice.primary.logo} alt="" />
            </div>
            <S.Divider />
          </>
        )}
        <div>
          <S.Contact>Contacto</S.Contact>
          <>{slice.primary.number}</>
          <PrismicRichText field={slice.primary.street} />
        </div>
      </S.TopSection>
      <PrismicRichText field={slice.primary.disclaimer} />
      {!isMobile && (
        <PrismicNextImage field={slice.primary.left_image} alt="" />
      )}
    </S.FooterContainer>
  );
};

export default Footer;
