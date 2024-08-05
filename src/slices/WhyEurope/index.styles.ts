import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow: hidden;
`;

export const WhyEurope = styled.div`
  min-width: 100%;
  height: 550px;
  color: white;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;

  @media only screen and (max-width: 768px) {
    height: 800px;
    align-items: flex-start;
    padding-top: 92px;
    background-position: 55%;
  }
`;

export const WhyEuropeTitle = styled.div`
  p {
    all: unset;
    font-size: 48px;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 32px;
    }
  }
`;

export const WhyEuropeDescription = styled.div`
  p {
    all: unset;
    font-size: 20px;
    line-height: 140%;
  }

  strong {
    color: #27bd83;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 16px;
    }
  }
`;

export const BiggerContainer = styled.div`
  position: relative;
`;

export const WhyEuropeContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  padding: 16px 32px;
  margin-left: 80px;
  text-align: center;
  gap: 32px;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
    text-align: left;
    gap: 48px;
  }
`;

export const WhyEuropesControllers = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  @media only screen and (max-width: 768px) {
    bottom: 48px;
  }
`;

export const WhyEuropeController = styled.div<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 24px;
  background-color: ${(props) => (props.$isActive ? "#27bd83" : "#ffffff")};
`;
