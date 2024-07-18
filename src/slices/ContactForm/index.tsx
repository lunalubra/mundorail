"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { useForm } from "react-hook-form";

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm = ({ slice }: ContactFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <S.BigContainer>
      <S.Container
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <S.LeftContainer>
          <S.Title>
            <PrismicRichText field={slice.primary.title} />
          </S.Title>
          <S.Subtitle>
            <PrismicRichText field={slice.primary.subtitile} />
          </S.Subtitle>
          <S.Description>
            <PrismicRichText field={slice.primary.description} />
          </S.Description>
          <S.Button>{slice.primary.cta}</S.Button>
        </S.LeftContainer>
        <S.RightContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example")} />
            <input {...register("exampleRequired", { required: true })} />
            <input type="submit" />
          </form>
        </S.RightContainer>
      </S.Container>
    </S.BigContainer>
  );
};

export default ContactForm;
