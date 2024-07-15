"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
/**
 * Props for `OurRoutes`.
 */
export type OurRoutesProps = SliceComponentProps<Content.OurRoutesSlice>;

/**
 * Component for "OurRoutes" Slices.
 */
const OurRoutes = ({ slice }: OurRoutesProps): JSX.Element => {
  return (
    <S.Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        backgroundImage: `url(${slice.primary.image.url!})`
      }}
    >
      <S.ContentWrapper>
        <S.Content>
          <S.Title>
            <PrismicRichText field={slice.primary.title} />
          </S.Title>
          <S.Description>
            <PrismicRichText field={slice.primary.description} />
          </S.Description>
          <S.Button>{slice.primary.cta}</S.Button>
        </S.Content>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default OurRoutes;
