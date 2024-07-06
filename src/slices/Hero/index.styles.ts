import styled from "styled-components";
import { motion } from "framer-motion";

export const Spacer = styled.div`
  height: 100%;
  width: 100%;
`;

export const HeroContainer = styled.section`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    max-height: 720px;
    object-fit: cover;
    object-position: 50% 50%;
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
      360deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 150%
    );
  }
`;

export const Title = styled.h1`
  all: unset;

  font-size: 60px;
  line-height: 74px;
  font-style: italic;
  color: white;

  span {
    font-style: normal;
    color: #27bd83;
    font-weight: 700;
  }
`;

export const MainContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 720px;
`;

export const MainContent = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  overflow: hidden;
`;

export const Button = styled.button`
  all: unset;
  font-size: 25px;
  line-height: 30px;
  color: white;
  padding: 15px 48px;
  border: 2px solid white;
  border-radius: 1000px;
  cursor: pointer;

  /* &:hover {
    color: #001159;
    border-color: #001159;
    background-color: rgb(0, 17, 89, 0.08);
  } */
`;

export const SecondaryContentContainer = styled.div`
  position: relative;
  z-index: 2;
  background-color: #001159;
  width: 100%;
  padding-bottom: 32px;
`;

export const SecondaryContent = styled.section`
  max-width: 1280px;
  margin: auto;
  position: relative;
  color: white;
  width: 100%;
  display: flex;
  gap: 48px;
  margin-top: -5px;

  img {
    position: relative;
    top: -32px;
    left: 0;
    width: 324px;
    height: 324px;
  }
`;

export const SecondaryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 54px;
  width: 100%;
  height: 100%;
`;

export const SecondaryTitle = styled.h2`
  all: unset;
  font-size: 42px;
  font-weight: 500;
  line-height: 52px;
`;

export const SecondaryDescription = styled.p`
  all: unset;
  font-size: 20px;
  line-height: 28px;
`;

export const Carousel = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 64px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 60px;
  font-weight: 700;
  line-height: 73px;
  text-transform: uppercase;
`;
