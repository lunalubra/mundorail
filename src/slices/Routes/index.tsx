"use client";

import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import * as S from "./index.styles";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import FilterIcon from "../../lib/FilterIcon";
import { useOnClickOutside } from "usehooks-ts";

const customLanguage = process.env.CUSTOM_LANG || "es-es";
const isMexico = customLanguage.includes("mx");

/**
 * Props for `RouteCard`.
 */
export type RouteCardProps = SliceComponentProps<Content.RouteCardSlice>;

/**
 * Component for "RouteCard" Slices.
 */

const getFormattedPrice = (price: string) => {
  return +price.replaceAll(".", "").replaceAll(",", "");
};

const getFormattedRoutes = (
  routes: (Content.RouteCardDocument<string> | undefined)[],
  order: "" | "price_up" | "price_down" | "duration_up" | "duration_down"
) => {
  return routes.sort((a, b) => {
    try {
      if (order === "price_up") {
        return getFormattedPrice(a?.data.price!) ===
          getFormattedPrice(b?.data.price!)
          ? 0
          : getFormattedPrice(a?.data.price!) <
              getFormattedPrice(b?.data.price!)
            ? -1
            : 1;
      }
      if (order === "price_down") {
        return getFormattedPrice(a?.data.price!) ===
          getFormattedPrice(b?.data.price!)
          ? 0
          : getFormattedPrice(a?.data.price!) >
              getFormattedPrice(b?.data.price!)
            ? -1
            : 1;
      }
      if (order === "duration_up") {
        return a?.data.days! === b?.data.days!
          ? 0
          : a?.data.days! < b?.data.days!
            ? -1
            : 1;
      }
      if (order === "duration_down") {
        return a?.data.days! === b?.data.days!
          ? 0
          : a?.data.days! > b?.data.days!
            ? -1
            : 1;
      }
    } catch (error) {
      return 0;
    }
    return 0;
  });
};

const RouteCard = ({ slice }: RouteCardProps): JSX.Element => {
  const client = createClient();
  const cardsContainerRef = useRef(null);
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [order, setOrder] = useState<
    "" | "price_up" | "price_down" | "duration_up" | "duration_down"
  >("");
  const [routes, setRoutes] = useState<
    (Content.RouteCardDocument<string> | undefined)[]
  >([]);
  const formattedRoutes = getFormattedRoutes(routes, order);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, () => setIsModalOpen(false));

  useEffect(() => {
    const getRoutes = async () => {
      setIsLoading(true);
      const routes = await Promise.all(
        slice.items.map((item) => {
          if (
            isFilled.contentRelationship(item.route_card) &&
            item.route_card.uid
          ) {
            return client.getByUID("route_card", item.route_card.uid);
          }
        })
      );
      setRoutes(routes);
      setIsLoading(false);
    };

    if (!routes.length && !isLoading) getRoutes();
  }, [client, isLoading, slice.items, routes.length]);

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <S.RoutesSectionContainer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <S.Title>
        <PrismicRichText field={slice.primary.title} />
        {slice.primary.shouldshowfilter && (
          <S.FilterContainer>
            <S.FilterTrigger onClick={() => setIsModalOpen(!isModalOpen)}>
              <FilterIcon />
              Filtrar
            </S.FilterTrigger>
            {isModalOpen && (
              <S.FilterModal ref={modalRef}>
                <div>
                  <S.SectionTitle>Duración</S.SectionTitle>
                  <S.SectionRow>
                    <S.SectionLabel>De menos a más días</S.SectionLabel>
                    <S.Checkbox
                      type="checkbox"
                      checked={order === "duration_up"}
                      onChange={() => setOrder("duration_up")}
                    />
                  </S.SectionRow>
                  <S.SectionRow>
                    <S.SectionLabel>De más a menos días</S.SectionLabel>
                    <S.Checkbox
                      type="checkbox"
                      checked={order === "duration_down"}
                      onChange={() => setOrder("duration_down")}
                    />
                  </S.SectionRow>
                </div>
                <div>
                  <S.SectionTitle>Precio</S.SectionTitle>
                  <S.SectionRow>
                    <S.SectionLabel>De menor a mayor precio</S.SectionLabel>
                    <S.Checkbox
                      type="checkbox"
                      checked={order === "price_up"}
                      onChange={() => setOrder("price_up")}
                    />
                  </S.SectionRow>
                  <S.SectionRow>
                    <S.SectionLabel>De mayor a menor precio</S.SectionLabel>
                    <S.Checkbox
                      type="checkbox"
                      checked={order === "price_down"}
                      onChange={() => setOrder("price_down")}
                    />
                  </S.SectionRow>
                </div>
              </S.FilterModal>
            )}
          </S.FilterContainer>
        )}
      </S.Title>

      <S.CardsSection
        ref={cardsContainerRef}
        $shouldSpaceOut={slice.primary.shouldspaceout}
      >
        {formattedRoutes.map((card) => (
          <S.CardContainer
            key={card?.uid}
            onClick={() => router.push("/" + card?.uid)}
          >
            <S.CardTopSection>
              <S.CardDays>
                {card?.data.days} <span>días</span>
              </S.CardDays>
              <PrismicNextImage field={card?.data.route_image} alt="" />
              <S.CardPrice>
                <div>*</div>
                <span>Desde</span>
                <p>
                  {isMexico && "$"}
                  {card?.data.price}
                  {!isMexico && "€"}
                </p>
              </S.CardPrice>
            </S.CardTopSection>
            <S.CardBottomSection>
              <PrismicRichText field={card?.data.title} />
            </S.CardBottomSection>
          </S.CardContainer>
        ))}
      </S.CardsSection>
      {slice.primary.cta && (
        <S.Button field={slice.primary.cta_link}>{slice.primary.cta}</S.Button>
      )}
    </S.RoutesSectionContainer>
  );
};

export default RouteCard;
