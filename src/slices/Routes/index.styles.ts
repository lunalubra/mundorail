import { PrismicNextLink } from "@prismicio/next";
import styled from "styled-components";

export const Title = styled.div`
  color: #001159;
  text-align: center;

  p:first-of-type {
    all: unset;
    font-size: 48px;
    line-height: 58px;
    display: block;
  }

  @media only screen and (max-width: 768px) {
    text-align: left;
    padding: 0 32px;
    p:first-of-type {
      font-size: 38px;
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

  color: #001159;
  border-color: #001159;
`;

export const RoutesSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  margin: auto;
  padding: 32px 0;
  max-width: 1280px;
  @media only screen and (max-width: 768px) {
    gap: 32px;
  }
`;

export const CardContainer = styled.div<{ $shouldForceSurvivors: boolean }>`
  background-color: ${(props) =>
    props.$shouldForceSurvivors ? "#110DB7" : "#001159"};
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

  @media only screen and (max-width: 768px) {
    transform: scale(0.8);
    margin-right: -64px;
    margin-bottom: -91px;
  }
`;

export const CardsSection = styled.div<{ $shouldSpaceOut: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.$shouldSpaceOut ? "64px" : "24px")};
  width: 100%;
  max-width: ${(props) => (props.$shouldSpaceOut ? "800px" : "unset")};
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    padding-bottom: 48px;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-left: 32px;
    justify-content: unset;
    gap: 0;
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

export const CardDays = styled.div<{ $shouldForceSurvivors: boolean }>`
  position: absolute;
  top: 11px;
  left: 11px;
  z-index: 2;
  border-radius: 16px;
  background-color: ${(props) =>
    props.$shouldForceSurvivors ? "#C4241F" : "#27bd83"};
  padding: 8px 16px;
  font-size: 33px;
  font-weight: 600;

  span {
    font-size: 19px;
  }
`;

export const CardPrice = styled.div<{ $shouldForceSurvivors: boolean }>`
  position: absolute;
  top: 315px;
  right: 11px;
  z-index: 2;
  border-radius: 16px;
  background-color: ${(props) =>
    props.$shouldForceSurvivors ? "#C4241F" : "#27bd83"};
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
    color: ${(props) => (props.$shouldForceSurvivors ? "white" : "#001159")};
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
    background-color: white;
  }
`;

export const CardBottomSection = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 40px);
  text-overflow: ellipsis;
  overflow: hidden;

  p {
    all: unset;
    font-size: 21px;
    display: block;
    white-space: nowrap;
  }

  strong {
    font-size: 34px;
    display: block;
    white-space: nowrap;
  }
`;

export const FilterContainer = styled.div`
  position: relative;
  margin-top: 16px;
`;

export const FilterTrigger = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  svg {
    width: 32px;
    height: 32px;
  }
`;

export const FilterModal = styled.div`
  position: absolute;
  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 32px;
  z-index: 1000;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 320px;
`;

export const SectionTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 8px;

  color: #001159;
`;

export const SectionRow = styled.div`
  display: flex;
  gap: 18px;
  justify-content: space-between;
`;

export const SectionLabel = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;

  color: #001159;
`;

export const Checkbox = styled.input``;
