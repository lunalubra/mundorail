"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";
import CloseIcon from "../../lib/CloseIcon";

/**
 * Props for `Hotels`.
 */
export type HotelsProps = SliceComponentProps<Content.HotelsSlice>;

/**
 * Component for "Hotels" Slices.
 */
const Hotels = ({ slice }: HotelsProps): JSX.Element => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && isMobile && (
        <S.ModalContainer>
          <S.Modal>
            <S.CloseIconContainer onClick={() => setIsModalOpen(false)}>
              <CloseIcon />
            </S.CloseIconContainer>
            <PrismicRichText field={slice.primary.description} />
            <PrismicRichText field={slice.primary.second_description} />
            <S.Button field={slice.primary.cta_link}>
              {slice.primary.cta}
            </S.Button>
          </S.Modal>
        </S.ModalContainer>
      )}
      <S.Container
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <S.TopSectionContainer $isSurvivors={slice.primary.issurvivors}>
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.description} />
          {isMobile && (
            <S.Link onClick={() => setIsModalOpen(true)}>Ver más</S.Link>
          )}
        </S.TopSectionContainer>
        <S.BottomSectionContainer $isSurvivors={slice.primary.issurvivors}>
          <Image
            src={slice.primary.images.url!}
            alt=""
            width={598}
            height={413}
          />
          {!isMobile ? (
            <S.RightContainer>
              <PrismicRichText field={slice.primary.second_description} />
              <S.DarkButton field={slice.primary.cta_link}>
                {slice.primary.cta}
              </S.DarkButton>
            </S.RightContainer>
          ) : (
            <S.DarkButton field={slice.primary.cta_link}>
              {slice.primary.cta}
            </S.DarkButton>
          )}
        </S.BottomSectionContainer>
      </S.Container>
    </>
  );
};

export default Hotels;
