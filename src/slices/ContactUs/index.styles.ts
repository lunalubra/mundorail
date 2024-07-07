import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  font-size: 25px;
  line-height: 30px;
  padding: 15px 30px;
  border: 2px solid white;
  border-radius: 1000px;
  cursor: pointer;
  width: min-content;

  color: white;
  /* background-color: rgb(0, 17, 89, 0.08); */
`;

export const ContactUsContainer = styled.section`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    max-height: 720px;
    object-fit: cover;
    object-position: 50% 50%;
    @media only screen and (max-width: 768px) {
      max-height: 850px;
      height: 850px;
    }
  }

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
      225deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 150%
    );

    @media only screen and (max-width: 768px) {
      max-height: 850px;
      height: 850px;
    }
  }
`;

export const MainContentWrapper = styled.div`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  color: white;

  p {
    all: unset;
    display: block;
    font-size: 20px;
    line-height: 140%;
    font-weight: 500;
  }

  strong {
    color: #27bd83;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 64px);

    p  {
      font-size: 18px;
    }
  }
`;

export const MainContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: calc(100% - 64px);
  max-width: 1280px;
  margin-left: 85px;

  @media only screen and (max-width: 768px) {
    margin-left: 32px;
  }
`;
