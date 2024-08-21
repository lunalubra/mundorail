import { PrismicNextLink } from "@prismicio/next";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  max-height: 100%;
  color: #001159;
`;

export const TopSectionContainer = styled.div<{ $isSurvivors: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  padding: 32px;

  p:first-of-type {
    all: unset;
    font-size: 42px;
    display: block;
  }

  p:not(:first-of-type) {
    all: unset;
    margin-top: 16px;

    strong {
      color: ${(props) => (props.$isSurvivors ? "#110DB7" : "#27bd83")};
    }
  }

  @media only screen and (min-width: 768px) {
    background-color: ${(props) =>
      props.$isSurvivors ? "#110DB7" : "#001159"};
    color: white;
    gap: 32px;
    padding: 75px;
    line-height: 140%;

    p:not(:first-of-type) {
      margin-top: unset;

      strong {
        color: ${(props) => (props.$isSurvivors ? "white" : "#27bd83")};
      }
    }
  }
`;

export const BottomSectionContainer = styled.div<{ $isSurvivors: boolean }>`
  display: flex;
  justify-content: center;
  padding: 32px;

  img {
    width: 100%;
    height: auto;
  }

  strong {
    color: ${(props) => (props.$isSurvivors ? "#110DB7" : "#001159")};
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RightContainer = styled.div`
  p {
    all: unset;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    color: #001159;
  }
  text-align: justify;
  padding: 32px;
  margin: auto;
`;

export const Link = styled.div`
  margin: auto;
  color: #001159;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 600;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: #001159;
  color: white;
  overflow-y: auto;
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px;
  text-align: center;
  strong {
    color: #27bd83;
  }
`;

export const CloseIconContainer = styled.div<{
  $isNegative?: boolean;
  $fixEndAlignment?: boolean;
}>`
  position: relative;
  display: ${(props) => (props.$fixEndAlignment ? "flex" : "unset")};
  z-index: 1000;
  align-self: end;

  svg {
    margin-left: ${(props) => (props.$fixEndAlignment ? "auto" : "unset")};
    width: 24px;
    height: auto;

    path {
      stroke: ${(props) => (props.$isNegative ? "#001159" : "white")};
    }
  }
`;

export const Button = styled(PrismicNextLink)`
  all: unset;
  display: block;
  font-size: 20px;
  line-height: 30px;
  padding: 15px 30px;
  border: 2px solid white;
  border-radius: 1000px;
  cursor: pointer;
  width: min-content;
  white-space: nowrap;
  color: white;
  margin: auto;
  margin-top: 32px;
`;

export const DarkButton = styled.button`
  all: unset;
  display: block;
  font-size: 20px;
  line-height: 30px;
  padding: 15px 30px;
  border: 2px solid #001159;
  border-radius: 1000px;
  cursor: pointer;
  width: min-content;
  white-space: nowrap;
  color: #001159;
  margin: auto;
  margin-top: 32px;
`;

export const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: #001159;
  color: white;
  overflow-y: auto;
  padding: 32px;
`;

export const InnerContainer = styled.form`
  background-color: #f0f1f5;
  padding: 32px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 800px;
  margin: auto;
`;

export const Title = styled.div`
  p {
    all: unset;
    font-size: 64px;
    line-height: 100%;
  }
  strong {
    color: #27bd83;
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: 42px;
    }
  }
`;

export const Subtitle = styled.div`
  p {
    all: unset;
    font-size: 32px;
  }

  @media only screen and (max-width: 768px) {
    p  {
      font-size: 24px;
    }
  }
`;

export const Description = styled.div`
  p {
    all: unset;
  }
`;

export const InputSection = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  & > * {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input<{ $shouldPoint?: boolean }>`
  all: unset;
  background-color: #f7f8fa;
  color: #001159;
  padding: 12px 18px;
  border: 1px solid #27bd83;
  border-radius: 15px;
  cursor: ${(props) => (props.$shouldPoint ? "pointer" : "inherit")};
  min-height: 19px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #001159;
`;

export const Label = styled.div`
  font-size: 18px;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const Disclaimer = styled.div`
  color: #001159;
  font-size: 12px;
  max-width: 300px;

  a {
    all: unset;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-decoration-line: underline;
    cursor: pointer;

    color: #000000;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const SubmitButton = styled.input`
  all: unset;
  font-size: 18px;
  padding: 8px 18px;
  border: 2px solid #001159;
  border-radius: 1000px;
  cursor: pointer;
  width: min-content;
  white-space: nowrap;
  color: #001159;

  &:disabled {
    opacity: 70%;
    cursor: not-allowed;
  }
`;

export const PeopleSelectorModal = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 10000000;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSide = styled.div``;

export const Type = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  color: #001159;
`;

export const AgeGuideline = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;

  color: #001159;
`;

export const RightSide = styled.div`
  display: flex;
  gap: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;

  color: #001159;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  border: 1px solid #001159;
  border-radius: 10000px;
  font-size: 24px;
  line-height: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const KidsRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-left: auto;
  max-width: 136px;
`;

export const Kid = styled.input`
  min-width: 64px;
  color: #001159;
  border: 1px solid #001159;
  padding: 4px 8px;
`;
