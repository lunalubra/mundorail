import { PrismicNextLink } from "@prismicio/next";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
  margin: 64px 16px;
  padding: 32px 32px 64px 32px;
  background-color: #f5f5f8;
  border-radius: 40px;
  text-align: center;

  p {
    all: unset;
    font-size: 20px;
    max-width: 500px;

    &:first-of-type {
      margin-bottom: -42px;
    }
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
  width: max-content;
  margin: 42px auto 16px;

  color: #001159;
  border-color: #001159;
`;

export const Route = styled.div`
  position: relative;
  min-width: 250px;
  width: 250px;
  height: 250px;
  background-size: cover;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
  color: white;
  padding: 38px;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 20px;

    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 50%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  @media only screen and (min-width: 768px) {
    min-width: 361px;
    width: 361px;
    height: 328px;
  }
`;

export const RouteTitle = styled.div`
  p {
    all: unset;
    font-size: 32px;
    line-height: 32px;
    display: block;
    position: relative;
    z-index: 15;
  }

  strong {
    color: #25be83;
  }

  @media only screen and (min-width: 768px) {
    p {
      font-size: 42px;
      line-height: 42px;
    }
  }
`;

export const RouteDescription = styled.div`
  position: relative;
  z-index: 15;
  p {
    all: unset;
    font-size: 16px;
  }
  @media only screen and (min-width: 768px) {
    p {
      font-size: 20px;
      line-height: 25px;
    }
  }
`;

export const RouteButton = styled.button`
  all: unset;
  font-size: 25px;
  line-height: 30px;
  padding: 15px 30px;
  border: 2px solid white;
  border-radius: 1000px;
  cursor: pointer;
  width: max-content;
  margin: auto;
  color: white;
  position: relative;
  z-index: 15;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const DesktopTitle = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
    visibility: hidden;
    width: 0;
    height: 0;
  }
`;

export const MobileTitle = styled.div`
  & > svg {
    width: 250px;
    height: auto;
  }

  @media only screen and (min-width: 768px) {
    display: none;
    visibility: hidden;
    width: 0;
    height: 0;
  }
`;

export const Card = styled.div<{ isHover: boolean }>`
  position: relative;

  img {
    position: relative;
    z-index: 10;
    width: 300px;
    height: 300px;
  }

  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  border-radius: 20px;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const HoverButton = styled.button`
  all: unset;
  font-size: 25px;
  line-height: 30px;
  padding: 15px 30px;
  border: 2px solid white;
  border-radius: 1000px;
  cursor: pointer;
  width: max-content;

  color: #ffffff;
  border-color: #ffffff;
`;
