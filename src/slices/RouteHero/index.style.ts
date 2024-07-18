import styled from "styled-components";

export const Container = styled.div`
  color: #001159;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1280px;
  margin: auto;
  position: relative;
`;

export const ShareButton = styled.div`
  background-color: #27bd83;
  border-radius: 100000px;
  padding: 8px 16px;
  align-self: flex-start;
  margin: 16px;
  cursor: pointer;
`;

export const Title = styled.div`
  p {
    all: unset;
    font-size: 42px;
  }
`;

export const Description = styled.div`
  p {
    all: unset;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
  }

  strong {
    color: #27bd83;
  }
`;

export const Notes = styled.div`
  text-align: left;
`;

export const Button = styled.button`
  all: unset;
  font-size: 25px;
  line-height: 30px;
  padding: 15px 30px;
  border: 2px solid white;
  border-radius: 1000px;
  cursor: pointer;
  margin-top: 16px;
  max-width: min-content;
  white-space: nowrap;
  margin: auto;

  color: #001159;
  border-color: #001159;

  @media only screen and (min-width: 768px) {
    margin: unset;
  }
`;

export const CardContainer = styled.div`
  background-color: #001159;
  box-shadow: -10px 25px 40px 0px rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  min-width: 364px;
  width: 364px;
  min-height: 455px;
  position: relative;
  transform-origin: top left;
  margin: 32px 0 -64px;
  transform: scale(0.8) translateX(12.5%);
`;

export const CardDays = styled.div`
  position: absolute;
  top: 11px;
  left: 11px;
  z-index: 2;
  border-radius: 16px;
  background-color: #25be83;
  padding: 8px 16px;
  font-size: 33px;
  font-weight: 600;

  span {
    font-size: 19px;
  }
`;

export const CardPrice = styled.div`
  position: absolute;
  top: 315px;
  right: 11px;
  z-index: 2;
  border-radius: 16px;
  background-color: #25be83;
  font-size: 38px;
  font-weight: 700;
  line-height: 100%;
  height: 60px;
  width: 170px;

  div {
    color: #001159;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-25%, -25%);
  }

  span {
    color: #001159;
    position: absolute;
    top: 3px;
    left: 16px;
    font-size: 15px;
    line-height: 15px;
  }

  p {
    all: unset;
    display: block;
    position: absolute;
    bottom: 5px;
    left: 16px;
    line-height: 38px;
  }
`;

export const CardTopSection = styled.div`
  img {
    width: 326px;
    height: 326px;
    margin-top: 27px;
  }
`;

export const CardBottomSection = styled.div`
  text-align: left;
  padding: 24px;
  p {
    all: unset;
    font-weight: 600;
    display: block;
  }

  ul {
    all: unset;
  }

  li {
    all: unset;
  }
`;

export const Disclaimer = styled.p`
  all: unset;
  margin-top: 16px;
  padding: 0 32px;
  font-size: 12px;
  @media only screen and (min-width: 768px) {
    padding: unset;
  }
`;

export const DesktopImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  img {
    width: 577px;
    height: 577px;
  }
`;

export const Note = styled.div`
  text-align: left;
  background-color: #25be83;
  padding: 16px;
  max-width: 260px;
  position: absolute;
  bottom: -32px;
  right: 32px;

  p {
    all: unset;
    color: #001159;
    font-weight: 700;
  }

  li {
    color: white;
  }
`;

export const Price = styled.div`
  position: absolute;
  top: 64px;
  right: 32px;
  z-index: 2;
  border-radius: 16px;
  background-color: #25be83;
  font-size: 38px;
  font-weight: 700;
  line-height: 100%;
  height: 60px;
  width: 170px;

  div {
    color: #001159;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-25%, -25%);
  }

  span {
    color: #001159;
    position: absolute;
    top: 3px;
    left: 16px;
    font-size: 15px;
    line-height: 15px;
  }

  p {
    all: unset;
    display: block;
    position: absolute;
    bottom: 5px;
    left: 16px;
    line-height: 38px;
  }
`;

export const DesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px;

  @media only screen and (min-width: 768px) {
    padding: 32px 0 0 32px;
    align-self: flex-start;
    max-width: 550px;
    text-align: left;
  }
`;
