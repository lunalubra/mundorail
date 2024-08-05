"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import InsuranceIcons from "../../lib/InsuranceIcons";
import { useState } from "react";
import CloseIcon from "../../lib/CloseIcon";
import InsuranceCompanyIcon from "../../lib/InsuranceCompanyIcon";
/**
 * Props for `Insurance`.
 */
export type InsuranceProps = SliceComponentProps<Content.InsuranceSlice>;

/**
 * Component for "Insurance" Slices.
 */
const Insurance = ({ slice }: InsuranceProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <S.ModalContainer>
          <S.Modal>
            <S.CloseIconContainer onClick={() => setIsModalOpen(false)}>
              <CloseIcon />
            </S.CloseIconContainer>
            <PrismicRichText field={slice.primary.full_insurance} />
          </S.Modal>
        </S.ModalContainer>
      )}
      <S.Container
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <S.Title>
          <PrismicRichText field={slice.primary.title} />
        </S.Title>
        <S.InsuranceContainer>
          <S.FirstSection>
            <S.Subtitle>
              <PrismicRichText field={slice.primary.subtitle} />
            </S.Subtitle>
            <S.Description>
              <PrismicRichText field={slice.primary.description} />
            </S.Description>
            <S.InsuranceIconsContainer>
              <InsuranceIcons />
            </S.InsuranceIconsContainer>
            <S.Button field={slice.primary.cta_link}>
              {slice.primary.cta}
            </S.Button>
            <S.InsuranceCompanyContainer>
              <InsuranceCompanyIcon />
            </S.InsuranceCompanyContainer>
          </S.FirstSection>
          <S.SecondSection>
            <S.Header>¿Qué incluye?</S.Header>
            <S.Preview>
              <PrismicRichText field={slice.primary.preview} />
            </S.Preview>
            <S.Link onClick={() => setIsModalOpen(true)}>Ver más</S.Link>
            <S.Header style={{ marginTop: "32px" }}>
              Cobertura de anulación
            </S.Header>
            <S.Preview>
              <PrismicRichText field={slice.primary.coverage} />
            </S.Preview>
          </S.SecondSection>
        </S.InsuranceContainer>
      </S.Container>
    </>
  );
};

export default Insurance;
