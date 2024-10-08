import styled from "styled-components";

export const Container = styled.div`
  max-width: 764px;
  margin: 64px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  text-align: center;
  color: #001159;
  padding: 32px;

  img {
    margin-top: -60px;
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 768px) {
    img {
      margin-top: -30px;
    }
  }
`;

export const Title = styled.div`
  p {
    all: unset;
    font-size: 48px;
  }
  strong {
    color: #27bd83;
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: 39px;
    }
  }
`;

export const Description = styled.div`
  p {
    all: unset;
    font-size: 20px;
    line-height: 140%;
  }
  strong {
    color: #27bd83;
  }

  @media only screen and (max-width: 768px) {
    text-align: justify;
  }
`;
