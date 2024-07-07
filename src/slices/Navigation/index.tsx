"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { useMediaQuery } from "usehooks-ts";
import MenuIcon from "../../lib/MenuIcon";
import { useState } from "react";
import TrainIcon from "../../lib/TrainIcon";
import CloseIcon from "../../lib/CloseIcon";

/**
 * Props for `Navigation`.
 */
export type NavigationProps = SliceComponentProps<Content.NavigationSlice>;

/**
 * Component for "Navigation" Slices.
 */
const Navigation = ({ slice }: NavigationProps): JSX.Element => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isMobile) {
    return (
      <>
        <S.MobileContainer>
          <div onClick={() => setIsModalOpen(true)}>
            <MenuIcon />
          </div>
          <PrismicNextImage field={slice.primary.logo} alt="" />
        </S.MobileContainer>
        {isModalOpen && (
          <S.ModalContainer>
            <S.TopSection>
              <TrainIcon />
              <div onClick={() => setIsModalOpen(false)}>
                <CloseIcon />
              </div>
            </S.TopSection>
            <S.MobileLink field={slice.primary.page_1}>Inicio</S.MobileLink>
            <S.MobileLink field={slice.primary.page_2}>Rutas</S.MobileLink>
            <S.MobileLink field={slice.primary.page_3}>Nosotros</S.MobileLink>
            <S.MobileLink field={slice.primary.page_4}>Contacto</S.MobileLink>
          </S.ModalContainer>
        )}
      </>
    );
  }

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
