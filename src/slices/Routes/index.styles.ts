import styled from "styled-components";

export const Title = styled.div`
  color: #001159;
  text-align: center;

  p {
    all: unset;
    font-size: 48px;
    line-height: 58px;
  }
`;

export const Button = styled.button`
  all: unset;
  font-size: 25px;
  line-height: 30px;
  padding: 15px 30px;
  border: 2px solid white;
  border-radius: 1000px;
  cursor: pointer;

  color: #001159;
  border-color: #001159;
`;

export const RoutesSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  margin: auto;
  padding: 54px 0;
  max-width: 1280px;
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
  height: 455px;
  position: relative;
  transform-origin: top left;
  cursor: pointer;

  &:hover {
    box-shadow: -10px 25px 40px 0px #27bd83;
  }
`;

export const CardsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    padding-bottom: 64px;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-left: 54px;
    justify-content: unset;
  }
`;

export const Line = styled.div`
  width: 100px;
  height: 2px;
  border-radius: 100px;
  background-color: #001159;

  @media only screen and (min-width: 768px) {
    width: 0;
    height: 0;
    display: none;
    visibility: hidden;
  }
`;

export const Indicator = styled.div`
  transform: translateY(-33%);
  width: 20px;
  height: 6px;
  border-radius: 100px;
  background-color: #001159;

  @media only screen and (min-width: 768px) {
    width: 0;
    height: 0;
    display: none;
    visibility: hidden;
  }
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
    position: absolute;
    top: 27px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const CardBottomSection = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;

  span {
    font-size: 21;
  }

  p {
    all: unset;
    font-size: 34px;
    font-weight: 600;
  }
`;
