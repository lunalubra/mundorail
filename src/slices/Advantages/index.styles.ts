import { PrismicNextLink } from "@prismicio/next";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  color: white;
  height: 600px;
  text-align: end;
  background-size: cover;
  background-position: 85%;
  background-repeat: no-repeat;
  margin-bottom: 64px;

  &::before {
    content: "";
    z-index: 1;
    width: 100%;
    height: 100%;
    max-height: 720px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );

    @media only screen and (min-width: 768px) {
      background: linear-gradient(
        270deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.8) 100%
      );
    }
  }

  @media only screen and (min-width: 768px) {
    background-position: 0%;
  }
`;

export const InternalContainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  align-items: flex-end;
  max-width: 80%;
  margin-left: auto;

  @media only screen and (min-width: 768px) {
    width: 550px;
    margin-left: unset;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export const Title = styled.div`
  p {
    all: unset;
    font-size: 32px;
  }

  strong {
    font-size: 42px;
    color: #27bd83;
  }

  @media only screen and (min-width: 768px) {
    p {
      font-size: 42px;
    }
  }
`;

export const Description = styled.div`
  p {
    all: unset;
    font-size: 16px;
    line-height: 24px;
  }

  strong {
    color: #27bd83;
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
  white-space: nowrap;
  color: white;
`;

export const MediaContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: auto;
`;
