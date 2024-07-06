import styled from "styled-components";

export const Container = styled.section`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
  margin-top: 76px;
`;

export const Title = styled.h4`
  all: unset;
  font-size: 48px;
  color: #001159;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 64px;
  max-width: 900px;
`;

export const Card = styled.div`
  width: 354px;
  height: 317px;
  padding: 32px;
  background-color: #001159;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  text-align: center;
  position: relative;
  border-radius: 20px;

  & > p:first-of-type {
    all: unset;
    font-size: 42px;
    line-height: 110%;

    strong {
      display: block;
    }
  }

  & > p:last-child {
    all: unset;
    font-size: 20px;

    strong {
      color: #27bd83;
    }
  }
`;

export const CardNumber = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-25%, -25%);
  font-size: 80px;
  color: white;

  &::before {
    content: "";
    background-color: #27bd83;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 103px;
    height: 103px;
    border-radius: 1000px;
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
