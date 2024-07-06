"use client";

import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";
import ActiveStart from "../../lib/ActiveStart";
import InactiveStart from "../../lib/InactiveStart";
import { useEffect, useRef, useState } from "react";
import { useInterval } from "usehooks-ts";

/**
 * Props for `Testimonial`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonailsSlice>;

/**
 * Component for "Testimonial" Slices.
 */

// eslint-disable-next-line @next/next/no-async-client-component
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(1);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const client = createClient();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: activeTab === 1 ? 0 : (activeTab - 1) * 1108,
        behavior: "smooth"
      });
    }
  }, [activeTab]);

  useEffect(() => {
    const getTestimonials = async () => {
      setIsLoading(true);
      const testimonials = await Promise.all(
        slice.items.map((item) => {
          if (
            isFilled.contentRelationship(item.testimonial) &&
            item.testimonial.uid
          ) {
            return client.getByUID("testimonail", item.testimonial.uid);
          }
        })
      );
      setTestimonials(testimonials);
      setIsLoading(false);
    };

    if (!testimonials.length && !isLoading) getTestimonials();
    return () => {};
  }, [client, isLoading, slice.items, testimonials.length]);

  const tabsNumber = Math.ceil(testimonials.length / 2);

  useInterval(
    () => {
      setActiveTab(tabsNumber === activeTab ? 1 : activeTab + 1);
    },
    isAutoPlaying ? 10000 : null
  );

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <S.TestimonialsContainer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.background_image} alt="" />
      <S.Content>
        <PrismicRichText field={slice.primary.title} />
        <S.Testimonials ref={carouselRef}>
          {testimonials.map((testimonial) => (
            <S.Testimonial key={testimonial?.uid}>
              <p className="name">{testimonial?.data.name}</p>
              <PrismicRichText field={testimonial?.data.review} />
              <div>
                {Array.from(Array(5).keys()).map((_, index) =>
                  testimonial?.data.number_of_starts_from_1_to_5! >=
                  index + 1 ? (
                    <ActiveStart key={index + 1} />
                  ) : (
                    <InactiveStart key={index + 1} />
                  )
                )}
              </div>
            </S.Testimonial>
          ))}
        </S.Testimonials>
        <S.TestimonialsControllers>
          {Array.from(Array(tabsNumber).keys()).map((_, index) => (
            <S.TestimonialController
              $isActive={activeTab === index + 1}
              onClick={() => {
                setActiveTab(index + 1);
                setIsAutoPlaying(false);
              }}
              key={index}
            />
          ))}
        </S.TestimonialsControllers>
      </S.Content>
    </S.TestimonialsContainer>
  );
};

export default Testimonials;
