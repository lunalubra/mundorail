import { PrismicNextLink } from "@prismicio/next";
import styled from "styled-components";

export const Content = styled.div`
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 36px;
  margin: auto;
  margin-top: 72px;
  padding-top: 92px;
  padding-right: 72px;
  max-width: 1280px;
  text-align: center;

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
    text-align: center;
    max-width: 564px;
    position: relative;
    z-index: 10;
    line-height: 110%;
    text-align: center;

    color: #ffffff;
  }

  & > p:not(:first-of-type) {
    all: unset;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    max-width: 508px;
    position: relative;
    z-index: 10;
    strong {
      color: #27bd83;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 32px;
    align-items: center;
    & > p:first-of-type {
      font-size: 38px;
    }
    & > p:not(:first-of-type) {
      font-size: 16px;
    }
  }
`;

export const CustomBudgetsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 550px;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    max-height: 550px;
    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 150%
    );
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
  position: relative;
  z-index: 10;
  margin-right: 135px;

  color: white;
  border-color: white;
  @media only screen and (max-width: 768px) {
    margin-right: unset;
    margin: auto;
  }
`;
