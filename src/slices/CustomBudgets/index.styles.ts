import { PrismicNextLink } from "@prismicio/next";
import styled from "styled-components";

export const CustomBudgetsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  margin-top: 110px;
  color: #001159;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  margin: 72px 0 120px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  & > p:first-of-type {
    all: unset;
    font-size: 48px;
    line-height: 58.44px;
    text-align: center;
    max-width: 564px;
  }

  & > p:not(:first-of-type) {
    all: unset;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    max-width: 508px;
    strong {
      color: #27bd83;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 32px;
    & > p:first-of-type {
      all: unset;
      font-size: 38px;
    }
    & > p:not(:first-of-type) {
      font-size: 16px;
    }
  }
`;

export const Button = styled(PrismicNextLink)`
  all: unset;
  font-size: 25px;
  line-height: 30px;
  padding: 15px 30px;
  border: 2px solid white;
  border-radius: 1000px;
  cursor: pointer;
  width: min-content;

  color: #001159;
  border-color: #001159;
`;
