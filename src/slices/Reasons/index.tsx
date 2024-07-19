"use client";

import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";

/**
 * Props for `Reasons`.
 */
export type ReasonsProps = SliceComponentProps<Content.ReasonsSlice>;

/**
 * Component for "Reasons" Slices.
 */
const Reasons = ({ slice }: ReasonsProps): JSX.Element => {
  const client = createClient();

  const [reasons, setReasons] = useState<
    (Content.ReasonsDocument<string> | undefined)[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRoutes = async () => {
      setIsLoading(true);
      const reasons = await Promise.all(
        slice.items.map((item) => {
          if (isFilled.contentRelationship(item.reasons) && item.reasons.uid) {
            return client.getByUID("reasons", item.reasons.uid);
          }
        })
      );
      setReasons(reasons);
      setIsLoading(false);
    };

    if (!reasons.length && !isLoading) getRoutes();
    return () => {};
  }, [client, isLoading, slice.items, reasons.length]);

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <S.BigContainer>
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
        <S.Button>{slice.primary.cta}</S.Button>
        <S.Reasons>
          {reasons.map((reason, index) => (
            <S.ReasonContainer key={reason?.uid}>
              <S.Index>{index + 1}</S.Index>
              <S.ReasonTitle>
                <PrismicRichText field={reason?.data.title} />
              </S.ReasonTitle>
              <S.ReasonDescription>
                <PrismicRichText field={reason?.data.description} />
              </S.ReasonDescription>
            </S.ReasonContainer>
          ))}
        </S.Reasons>
      </S.Container>
    </S.BigContainer>
  );
};

export default Reasons;