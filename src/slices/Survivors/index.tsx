"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import TitleIcon from "../../lib/MundorailXSurvivors";
import TitleDesktopIcon from "../../lib/MundorailXSurvivorsDesktop";
import UltraCoolDiscovery from "../../lib/ultracooldiscovery.png";
import coolDiscovery from "../../lib/cooldiscovery.png";
import Image from "next/image";
import { useHover } from "usehooks-ts";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const SurvivorsCard = ({ src, uid }: { src: string; uid: string }) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const router = useRouter();

  return (
    <S.Card ref={hoverRef}>
      {isHover && (
        <>
          <S.Gradient />
          <S.HoverButton onClick={() => router.push("/" + uid)}>
            Ver más
          </S.HoverButton>
        </>
      )}
      <Image alt="" src={src} width={300} height={300} />
    </S.Card>
  );
};

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
      <S.Button field={slice.primary.cta_link}>{slice.primary.cta}</S.Button>
      <S.ImagesContainer>
        <SurvivorsCard
          src={UltraCoolDiscovery.src}
          uid={"ultra-cool-discovery"}
        />
        <SurvivorsCard src={coolDiscovery.src} uid={"cool-discovery"} />
      </S.ImagesContainer>
    </S.Container>
  );
};

export default Survivors;
