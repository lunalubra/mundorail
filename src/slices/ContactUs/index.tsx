"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `ContactUs`.
 */
export type ContactUsProps = SliceComponentProps<Content.ContactUsSlice>;

/**
 * Component for "ContactUs" Slices.
 */
const ContactUs = ({ slice }: ContactUsProps): JSX.Element => {
  return (
    <S.ContactUsContainer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.image} alt="" />
      <S.MainContent>
        <S.MainContentWrapper>
          <PrismicRichText field={slice.primary.text} />
          <S.Button field={slice.primary.cta_link}>
            {slice.primary.cta}
          </S.Button>
        </S.MainContentWrapper>
      </S.MainContent>
    </S.ContactUsContainer>
  );
};

export default ContactUs;
