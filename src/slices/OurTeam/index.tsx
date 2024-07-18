"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import Image from "next/image";

/**
 * Props for `OurTeam`.
 */
export type OurTeamProps = SliceComponentProps<Content.OurTeamSlice>;

/**
 * Component for "OurTeam" Slices.
 */
const OurTeam = ({ slice }: OurTeamProps): JSX.Element => {
  return (
    <S.Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <S.Title>
        <PrismicRichText field={slice.primary.title} />
      </S.Title>
      <S.Description>
        <PrismicRichText field={slice.primary.description} />
      </S.Description>
      <Image src={slice.primary.image.url!} alt="" width={689} height={320} />
    </S.Container>
  );
};

export default OurTeam;
