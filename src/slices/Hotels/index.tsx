"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as S from "./index.styles";
import Image from "next/image";
import { useMediaQuery, useOnClickOutside } from "usehooks-ts";
import { useRef, useState } from "react";
import CloseIcon from "../../lib/CloseIcon";
import { PrismicNextLink } from "@prismicio/next";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";

/**
 * Props for `Hotels`.
 */
export type HotelsProps = SliceComponentProps<Content.HotelsSlice>;

type FormType = {
  route: string;
  name: string;
  surname: string;
  company: string;
  country: string;
  start_date: Date | null;
  amount: { senior: number; adult: number; kid: number };
  email: string;
  number: string;
  message: string;
  checkbox: boolean;
};

const FormModal = ({
  isFormModalOpen,
  setFormIsModalOpen,
  slice
}: {
  isFormModalOpen: boolean;
  setFormIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  slice: HotelsProps["slice"];
}) => {
  const popoverRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();
  const formattedPathname = pathname.replaceAll("/", "").replaceAll("-", " ");

  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
    reset,
    watch,
    setValue
  } = useForm({
    defaultValues: {
      route: formattedPathname,
      name: "",
      surname: "",
      company: "",
      country: "",
      start_date: null,
      amount: { senior: 0, adult: 0, kid: 0 },
      email: "",
      number: "",
      message: "",
      checkbox: false
    } as FormType
  });
  const watchPeople = watch("amount");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPeopleSelectorOpen, setIsPeopleSelectorOpen] = useState(false);
  const [kids, setKids] = useState<Record<string, number>>({});
  useOnClickOutside(popoverRef, () => setIsPeopleSelectorOpen(false));

  const onSubmit = async (data: FormType) => {
    const formattedData = {
      ...data,
      start_date: `MM/DD/YYYY: ${data.start_date?.toLocaleDateString()}`,
      route: formattedPathname,
      kids
    };
    setIsLoading(true);
    const response = await fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(formattedData)
    });
    if (response.ok) {
      setIsSuccess(true);
      reset();
      setKids({});
      setFormIsModalOpen(false);
    }
    setIsLoading(false);
  };

  if (isDirty && isSuccess) {
    setIsSuccess(false);
  }

  return (
    isFormModalOpen && (
      <S.FormContainer>
        {!isMobile && (
          <S.CloseIconContainer
            $fixEndAlignment
            onClick={() => setFormIsModalOpen(false)}
          >
            <CloseIcon />
          </S.CloseIconContainer>
        )}
        <S.InnerContainer onSubmit={handleSubmit(onSubmit)}>
          {isMobile && (
            <S.CloseIconContainer
              $isNegative
              onClick={() => setFormIsModalOpen(false)}
            >
              <CloseIcon />
            </S.CloseIconContainer>
          )}
          <S.InputContainer>
            <S.Label>Ruta de interés</S.Label>
            <S.Input
              {...register("route", { required: true, disabled: true })}
            />
          </S.InputContainer>
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
              <S.Label>*Fecha de inicio del viaje</S.Label>
              <S.Input
                type="date"
                placeholder="DD/MM/AAAA"
                {...register("start_date", {
                  required: true,
                  valueAsDate: true
                })}
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.Label>*Número de personas</S.Label>
              <S.Input
                type="text"
                readOnly
                $shouldPoint
                value={`${watchPeople.senior !== 0 ? watchPeople.senior + " seniors " : ""}${watchPeople.adult !== 0 ? watchPeople.adult + " adultos " : ""}${watchPeople.kid ? watchPeople.kid + " niños" : ""}`}
                onClick={() => setIsPeopleSelectorOpen(!isPeopleSelectorOpen)}
              />
              {isPeopleSelectorOpen && (
                <S.PeopleSelectorModal ref={popoverRef}>
                  <S.Row>
                    <S.LeftSide>
                      <S.Type>Sénior</S.Type>
                      <S.AgeGuideline>A partir de 60 años</S.AgeGuideline>
                    </S.LeftSide>
                    <S.RightSide>
                      <S.IconContainer
                        onClick={() => {
                          if (watchPeople.senior - 1 < 0) return;

                          setValue("amount.senior", watchPeople.senior - 1);
                        }}
                      >
                        -
                      </S.IconContainer>
                      {watchPeople.senior}
                      <S.IconContainer
                        onClick={() => {
                          setValue("amount.senior", watchPeople.senior + 1);
                        }}
                      >
                        +
                      </S.IconContainer>
                    </S.RightSide>
                  </S.Row>
                  <S.Row>
                    <S.LeftSide>
                      <S.Type>Adulto</S.Type>
                      <S.AgeGuideline>De 26 a 59 años</S.AgeGuideline>
                    </S.LeftSide>
                    <S.RightSide>
                      <S.IconContainer
                        onClick={() => {
                          if (watchPeople.adult - 1 < 0) return;

                          setValue("amount.adult", watchPeople.adult - 1);
                        }}
                      >
                        -
                      </S.IconContainer>
                      {watchPeople.adult}
                      <S.IconContainer
                        onClick={() => {
                          setValue("amount.adult", watchPeople.adult + 1);
                        }}
                      >
                        +
                      </S.IconContainer>
                    </S.RightSide>
                  </S.Row>
                  <S.Row>
                    <S.LeftSide>
                      <S.Type>Joven</S.Type>
                      <S.AgeGuideline>De 0 a 26 años</S.AgeGuideline>
                    </S.LeftSide>
                    <S.RightSide>
                      <S.IconContainer
                        onClick={() => {
                          if (watchPeople.kid - 1 < 0) return;

                          setValue("amount.kid", watchPeople.kid - 1);
                          const copyOfKids = { ...kids };
                          let keys = Object.keys(copyOfKids);
                          delete copyOfKids[keys[keys.length - 1]];
                          setKids(copyOfKids);
                        }}
                      >
                        -
                      </S.IconContainer>
                      {watchPeople.kid}
                      <S.IconContainer
                        onClick={() => {
                          setValue("amount.kid", watchPeople.kid + 1);
                          setKids({
                            ...kids,
                            ["kid" + watchPeople.kid + 1]: 0
                          });
                        }}
                      >
                        +
                      </S.IconContainer>
                    </S.RightSide>
                  </S.Row>
                  <S.KidsRow>
                    {Object.entries(kids).map(([key, value]) => (
                      <S.Kid
                        type="number"
                        min={0}
                        max={26}
                        key={key}
                        placeholder="*Edad"
                        value={value}
                        onChange={(event) => {
                          if (
                            (event.target.value as unknown as number) > 26 ||
                            (event.target.value as unknown as number) < 0 ||
                            event.target.value === ""
                          )
                            return;

                          setKids({
                            ...kids,
                            [key]: event.target.value as unknown as number
                          });
                        }}
                      />
                    ))}
                  </S.KidsRow>
                </S.PeopleSelectorModal>
              )}
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
            <S.Label>Mensaje (opcional)</S.Label>
            <S.Input
              placeholder="Ejemplo: Indícanos si tu fecha de inicio del viaje es orientativa"
              {...register("message")}
            />
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
              value={isSuccess ? "✔" : "Enviar"}
              disabled={!isValid || isLoading}
            />
          </S.BottomSection>
        </S.InnerContainer>
      </S.FormContainer>
    )
  );
};

/**
 * Component for "Hotels" Slices.
 */
const Hotels = ({ slice }: HotelsProps): JSX.Element => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormModalOpen, setFormIsModalOpen] = useState(false);

  return (
    <>
      <FormModal
        isFormModalOpen={isFormModalOpen}
        setFormIsModalOpen={setFormIsModalOpen}
        slice={slice}
      />
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
              <S.DarkButton onClick={() => setFormIsModalOpen(true)}>
                {slice.primary.cta}
              </S.DarkButton>
            </S.RightContainer>
          ) : (
            <S.DarkButton onClick={() => setFormIsModalOpen(true)}>
              {slice.primary.cta}
            </S.DarkButton>
          )}
        </S.BottomSectionContainer>
      </S.Container>
    </>
  );
};

export default Hotels;
