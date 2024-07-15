"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import TitleIcon from "../../lib/MundorailXSurvivors";
import TitleDesktopIcon from "../../lib/MundorailXSurvivorsDesktop";
import UltraCoolDiscovery from "../../lib/ultracooldiscovery.png";
import coolDiscovery from "../../lib/cooldiscovery.png";
import Image from "next/image";

/**
 * Props for `Survivors`.
 */
export type SurvivorsProps = SliceComponentProps<Content.SurvivorsSlice>;

/**
 * Component for "Survivors" Slices.
 */
const Survivors = ({ slice }: SurvivorsProps): JSX.Element => {
  return (
    <S.Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <S.DesktopTitle>
        <TitleDesktopIcon />
      </S.DesktopTitle>
      <S.MobileTitle>
        <TitleIcon />
      </S.MobileTitle>
      <PrismicRichText field={slice.primary.description} />
      <S.Button>{slice.primary.cta}</S.Button>
      <S.ImagesContainer>
        <Image alt="" src={UltraCoolDiscovery.src} width={300} height={300} />
        <Image alt="" src={coolDiscovery.src} width={300} height={300} />
      </S.ImagesContainer>
    </S.Container>
  );
};

export default Survivors;
