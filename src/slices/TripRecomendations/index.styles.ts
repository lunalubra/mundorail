import { PrismicNextLink } from "@prismicio/next";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 32px;
  max-width: 1280px;
  margin: auto;
  background-color: #e7e7e7;
  color: #001159;
`;

export const Title = styled.div`
  p {
    all: unset;
    font-size: 48px;
  }
`;

export const Description = styled.div<{ $isSurvivors: boolean }>`
  li {
    font-size: 20px;
    line-height: 140%;
  }

  strong {
    color: ${(props) => (props.$isSurvivors ? "#110DB7" : "#27bd83")};
  }
`;

export const Button = styled(PrismicNextLink)`
  all: unset;
  font-size: 25px;
  line-height: 30px;
  padding: 15px 30px;
  border-radius: 1000px;
  cursor: pointer;
  width: min-content;
  white-space: nowrap;

  border: 2px solid #001159;
  color: #001159;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 64px;
  @media only screen and (max-width: 768px) {
    padding: 32px;
  }
`;

export const RightSection = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
    visibility: hidden;
    width: 0;
    height: 0;
  }
`;
