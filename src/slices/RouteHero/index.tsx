"use client";

import { Content, isFilled, PrismicDocumentWithUID } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.style";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import { RouteCardDocumentData, Simplify } from "../../../prismicio-types";
import ShareIcons from "../../lib/ShareIcons";
import { PrismicNextImage } from "@prismicio/next";
import { useMediaQuery } from "usehooks-ts";
import SeparatorImage from "../../lib/RouteSeparator.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

/**
 * Props for `RouteHero`.
 */
export type RouteHeroProps = SliceComponentProps<Content.RouteHeroSlice>;

/**
 * Component for "RouteHero" Slices.
 */
const RouteHero = ({ slice }: RouteHeroProps): JSX.Element => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const client = createClient();
  const router = useRouter();

  const [route, setRoute] =
    useState<
      PrismicDocumentWithUID<
        Simplify<RouteCardDocumentData>,
        "route_card",
        string
      >
    >();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRoutes = async () => {
      setIsLoading(true);
      if (
        isFilled.contentRelationship(slice.primary.route) &&
        slice.primary.route.uid
      ) {
        const route = await client.getByUID(
          "route_card",
          slice.primary.route.uid
        );

        setRoute(route);
        setIsLoading(false);
      }
    };

    if (!route && !isLoading) getRoutes();
  }, [client, isLoading, slice.items, route, slice.primary.route]);

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <>
      <S.ShareButton
        isSurvivors={slice.primary.issurvivors}
        onClick={() => router.push((route?.data.pdf as any).url)}
      >
        <ShareIcons />
      </S.ShareButton>
      {!isMobile && route?.data.special_description && (
        <S.ExtraSection
          style={{
            backgroundImage: `url(${slice.primary.background_image.url!})`
          }}
        >
          <S.ExtraSectionTitle>
            <PrismicRichText field={route?.data.title} />
          </S.ExtraSectionTitle>
          <S.ExtraSectionDescription>
            <PrismicRichText field={route?.data.special_description} />
          </S.ExtraSectionDescription>
          <S.ExtraSectionButton>Contáctanos</S.ExtraSectionButton>
        </S.ExtraSection>
      )}
      <S.Container
        isSurvivors={slice.primary.issurvivors}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        {isMobile && (
          <>
            <S.Title>
              <PrismicRichText field={route?.data.title} />
            </S.Title>
            <S.CardContainer isSurvivors={slice.primary.issurvivors}>
              <S.CardTopSection>
                <S.CardDays isSurvivors={slice.primary.issurvivors}>
                  {route?.data.days} <span>días</span>
                </S.CardDays>
                <PrismicNextImage field={route?.data.route_image} alt="" />
                <S.CardPrice isSurvivors={slice.primary.issurvivors}>
                  <div>*</div>
                  <span>Desde</span>
                  <p>{route?.data.price}€</p>
                </S.CardPrice>
              </S.CardTopSection>
              <S.CardBottomSection>
                <PrismicRichText field={route?.data.notes} />
              </S.CardBottomSection>
            </S.CardContainer>
          </>
        )}
        {!isMobile && (
          <S.DesktopImage>
            <PrismicNextImage field={route?.data.route_image} alt="" />
            <S.Price isSurvivors={slice.primary.issurvivors}>
              <div>*</div>
              <span>Desde</span>
              <p>{route?.data.price}€</p>
            </S.Price>
            <S.Note isSurvivors={slice.primary.issurvivors}>
              <PrismicRichText field={route?.data.notes} />
            </S.Note>
          </S.DesktopImage>
        )}
        <S.DesktopContainer>
          {!isMobile && (
            <>
              <S.Title>
                <PrismicRichText field={route?.data.title} />
              </S.Title>
              <Image alt="" src={SeparatorImage.src} width={500} height={20} />
            </>
          )}
          <S.Description isSurvivors={slice.primary.issurvivors}>
            <PrismicRichText field={route?.data.description} />
          </S.Description>
          <S.Button
            onClick={() => router.push((route?.data.pdf as any).url)}
            isSurvivors={slice.primary.issurvivors}
          >
            Ver itinerario
          </S.Button>
          <S.Disclaimer>
            *En Mundorail trabajamos exclusivamente con mayoristas.{" "}
            <strong>
              Para solicitar tu presupuesto no dudes en contactar con tu agencia
              más cercana.
            </strong>
          </S.Disclaimer>
        </S.DesktopContainer>
      </S.Container>
    </>
  );
};

export default RouteHero;
