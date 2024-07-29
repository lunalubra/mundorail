"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import { useForm } from "react-hook-form";
import { PrismicNextLink } from "@prismicio/next";

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
    formState: { isValid }
  } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);
    const response = await fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data)
    });

    console.log(response);
  };

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
          <S.Button field={slice.primary.cta_link}>
            {slice.primary.cta}
          </S.Button>
        </S.LeftContainer>
        <S.RightContainer>
          <S.InnerContainer onSubmit={handleSubmit(onSubmit)}>
            <S.InputSection>
              <S.InputContainer>
                <S.Label>*Nombre</S.Label>
                <S.Input {...register("name", { required: true })} />
              </S.InputContainer>
              <S.InputContainer>
                <S.Label>*Apellido</S.Label>
                <S.Input {...register("surname", { required: true })} />
              </S.InputContainer>
            </S.InputSection>
            <S.InputSection>
              <S.InputContainer>
                <S.Label>*Nombre de la empresa</S.Label>
                <S.Input {...register("company", { required: true })} />
              </S.InputContainer>
              <S.InputContainer>
                <S.Label>*País de origen</S.Label>
                <S.Input {...register("country", { required: true })} />
              </S.InputContainer>
            </S.InputSection>
            <S.InputSection>
              <S.InputContainer>
                <S.Label>*Correo electrónico</S.Label>
                <S.Input {...register("email", { required: true })} />
              </S.InputContainer>
              <S.InputContainer>
                <S.Label>*Número de teléfono</S.Label>
                <S.Input {...register("number", { required: true })} />
              </S.InputContainer>
            </S.InputSection>
            <S.InputContainer>
              <S.Label>*Rutas de interés / Mensaje</S.Label>
              <S.Input {...register("message")} />
            </S.InputContainer>
            <S.BottomSection>
              <S.CheckboxContainer>
                <input
                  type="checkbox"
                  {...register("checkbox", { required: true })}
                />
                <S.Disclaimer>
                  *Estoy de acuerdo con el{" "}
                  <PrismicNextLink field={slice.primary.privacy_pdf}>
                    Política de privacidad
                  </PrismicNextLink>{" "}
                  y cómo utiliza mis datos <strong>mundorail</strong>.
                </S.Disclaimer>
              </S.CheckboxContainer>
              <S.SubmitButton
                type="submit"
                value="Enviar"
                disabled={!isValid}
              />
            </S.BottomSection>
          </S.InnerContainer>
        </S.RightContainer>
      </S.Container>
    </S.BigContainer>
  );
};

export default ContactForm;
