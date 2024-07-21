"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import Icons from "../../lib/AdvantagesIcons";

/**
 * Props for `Advantages`.
 */
export type AdvantagesProps = SliceComponentProps<Content.AdvantagesSlice>;

/**
 * Component for "Advantages" Slices.
 */
const Advantages = ({ slice }: AdvantagesProps): JSX.Element => {
  return (
    <S.Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        backgroundImage: `url(${slice.primary.image.url!})`
      }}
    >
      <S.MediaContainer>
        <S.InternalContainer>
          <S.Title>
            <PrismicRichText field={slice.primary.title} />
          </S.Title>
          <S.Description>
            <PrismicRichText field={slice.primary.description} />
          </S.Description>
          <Icons />
          <S.Button field={slice.primary.cta_link}>
            {slice.primary.cta}
          </S.Button>
        </S.InternalContainer>
      </S.MediaContainer>
    </S.Container>
  );
};

export default Advantages;
