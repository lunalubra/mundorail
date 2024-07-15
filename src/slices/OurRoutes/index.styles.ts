import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  max-height: 720px;
  background-size: cover;
  background-position: 25%;
  background-repeat: no-repeat;
  padding: 20px;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    max-height: 720px;
    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 150%
    );
  }
`;

export const Title = styled.div`
  position: relative;
  z-index: 1;
  font-size: 42px;

  p {
    all: unset;
    color: white;
  }

  strong {
    color: #27bd83;
  }
  @media only screen and (min-width: 768px) {
    font-size: 60px;
  }
`;

export const Description = styled.div`
  position: relative;
  z-index: 1;
  font-size: 20px;
  line-height: 28px;

  p {
    all: unset;
    color: white;
  }

  strong {
    color: #27bd83;
  }
`;

export const Button = styled.button`
  all: unset;
  position: relative;
  z-index: 1;
  font-size: 25px;
  line-height: 30px;
  color: white;
  padding: 15px 48px;
  border: 2px solid white;
  border-radius: 1000px;
  cursor: pointer;
  width: min-content;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 540px;

  @media only screen and (min-width: 768px) {
    align-items: center;
    margin-right: 48px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    align-items: flex-end;
    text-align: center;
  }
`;
