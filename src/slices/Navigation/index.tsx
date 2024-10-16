"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { useMediaQuery } from "usehooks-ts";
import MenuIcon from "../../lib/MenuIcon";
import { useEffect, useState } from "react";
import TrainIcon from "../../lib/TrainIcon";
import CloseIcon from "../../lib/CloseIcon";
import { useRouter } from "next/navigation";
import { redirect } from "../../lib/redirect";

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
  const isFixedSpace = slice.variation !== "default";
  const router = useRouter();

  useEffect(() => {
    redirect();
  }, []);

  if (isMobile) {
    return (
      <>
        {isFixedSpace ? (
          <S.FixedContainer $isPositive={slice.variation === "positive"}>
            <div onClick={() => setIsModalOpen(true)}>
              <MenuIcon />
            </div>
            <PrismicNextImage
              onClick={() => router.push("/")}
              field={slice.primary.logo}
              alt=""
            />
          </S.FixedContainer>
        ) : (
          <S.MobileContainer>
            <div onClick={() => setIsModalOpen(true)}>
              <MenuIcon />
            </div>
            <PrismicNextImage
              onClick={() => router.push("/")}
              field={slice.primary.logo}
              alt=""
            />
          </S.MobileContainer>
        )}
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

  if (isFixedSpace) {
    return (
      <S.FixedNavigationContainer
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        $isPositive={slice.variation === "positive"}
      >
        <S.InternalContainer>
          <S.Link
            $isPositive={slice.variation === "positive"}
            field={slice.primary.page_1}
          >
            Inicio
          </S.Link>
          <S.Link
            $isPositive={slice.variation === "positive"}
            field={slice.primary.page_2}
          >
            Rutas
          </S.Link>
          <PrismicNextImage
            onClick={() => router.push("/")}
            field={slice.primary.logo}
            alt=""
          />
          <S.Link
            $isPositive={slice.variation === "positive"}
            field={slice.primary.page_3}
          >
            Nosotros
          </S.Link>
          <S.Link
            $isPositive={slice.variation === "positive"}
            field={slice.primary.page_4}
          >
            Contacto
          </S.Link>
        </S.InternalContainer>
      </S.FixedNavigationContainer>
    );
  }

  return (
    <S.NavigationContainer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <S.Link field={slice.primary.page_1}>Inicio</S.Link>
      <S.Link field={slice.primary.page_2}>Rutas</S.Link>
      <PrismicNextImage
        onClick={() => router.push("/")}
        field={slice.primary.logo}
        alt=""
      />
      <S.Link field={slice.primary.page_3}>Nosotros</S.Link>
      <S.Link field={slice.primary.page_4}>Contacto</S.Link>
    </S.NavigationContainer>
  );
};

export default Navigation;
