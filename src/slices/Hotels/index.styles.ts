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

export const CloseIconContainer = styled.div`
  align-self: end;

  svg {
    width: 24px;
    height: auto;
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

export const DarkButton = styled(PrismicNextLink)`
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
