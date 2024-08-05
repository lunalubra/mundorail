import { PrismicNextLink } from "@prismicio/next";
import styled from "styled-components";

export const InsuranceCompanyContainer = styled.div`
  margin-right: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 1280px;
  margin: auto;
`;

export const Title = styled.div`
  p {
    all: unset;
    color: #001159;
    font-size: 42px;
  }
  text-align: center;
`;

export const InsuranceContainer = styled.div`
  background-color: #fafafc;
  border: 1px solid #27bd83;
  padding: 54px;
  margin: 32px;
  border-radius: 40px;
  display: flex;
  gap: 16px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Subtitle = styled.div`
  p {
    all: unset;
    color: #001159;
    font-size: 32px;
  }
  text-align: center;
  width: 100%;
  max-width: 400px;
  strong {
    color: #001159;
  }
`;

export const Description = styled.div`
  margin-top: 32px;
  p {
    all: unset;
    font-size: 20px;
    font-weight: 500;
    line-height: 140%;
    text-align: justify;

    color: #001159;
  }

  strong {
    color: #27bd83;
  }

  @media only screen and (max-width: 768px) {
    p {
      all: unset;
      font-size: 16px;
    }
  }
`;

export const Button = styled(PrismicNextLink)`
  font-size: 25px;
  line-height: 30px;
  padding: 15px 30px;
  border: 2px solid white;
  border-radius: 1000px;
  cursor: pointer;
  width: max-content;
  margin: 0 auto auto;

  color: #001159;
  border-color: #001159;
`;

export const Header = styled.div`
  width: 100%;
  background-color: #27bd83;
  padding: 4px 24px;
  border-radius: 1000px;
  color: white;
  border: 1px solid #001159;
  font-size: 24px;

  @media only screen and (max-width: 768px) {
    margin-top: 32px;
  }
`;

export const Preview = styled.div`
  p,
  li {
    font-size: 20px;
    margin-bottom: 16px;
  }

  strong {
    color: #27bd83;
  }

  @media only screen and (max-width: 768px) {
    p {
      all: unset;
      font-size: 16px;
    }
  }
`;

export const InsuranceIconsContainer = styled.div`
  margin: auto;
  svg {
    width: 250px;
    height: auto;
  }
`;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  flex-grow: 1;
  flex-basis: 0;

  @media only screen and (max-width: 768px) {
    gap: 16px;
  }
`;

export const SecondSection = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
`;

export const Link = styled.div`
  margin-left: auto;
  font-size: 24px;
  font-weight: 600;
  color: #001159;
  text-decoration: underline;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: white;
  overflow-y: scroll;
`;

export const Modal = styled.div`
  background-color: #fafafc;
  border: 1px solid #27bd83;
  padding: 24px;
  margin: 32px;
  border-radius: 40px;
  position: relative;
  color: #001159;

  h6 {
    all: unset;
    font-weight: 700;
    font-size: 18px;
  }

  li {
    font-size: 16px;
    margin-bottom: 16px;
  }

  strong {
    color: #27bd83;
  }
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 10000;
  svg {
    width: 24px;
    height: auto;
  }

  path {
    stroke: #000 !important;
  }
`;
