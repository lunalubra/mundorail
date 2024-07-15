import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  margin: 40px 0 0 20px;
  text-align: center;
  p {
    all: unset;
    font-size: 42px;
  }

  @media only screen and (min-width: 768px) {
    margin: 70px 0;
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
  width: max-content;
  margin: auto;

  color: #001159;
  border-color: #001159;
  /* background-color: rgb(0, 17, 89, 0.08); */

  @media only screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;

export const RoutesContainer = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding: 0 20px 10px;
  margin: auto;
  max-width: 100%;
  @media only screen and (min-width: 768px) {
    gap: 50px;
  }
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
