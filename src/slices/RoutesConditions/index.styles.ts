import styled from "styled-components";

export const Container = styled.div`
  h6 {
    all: unset;
    font-size: 42px;
    font-weight: 400;
    padding-left: 32px;
    display: inline-block;
    color: #001159;
    position: relative;
    z-index: 10;
    strong {
      font-weight: 600;
    }
  }

  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 64px 0;
  background-color: #f5f5f5;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    backdrop-filter: blur(10px);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const ListItem = styled.div`
  ul {
    all: unset;
  }
  li {
    all: unset;
  }
  position: relative;
  z-index: 10;
  min-width: 300px;
  width: 300px;
  padding: 32px;
  background-color: #25be83;
  color: white;
  border-radius: 30px;

  strong {
    color: #001159;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-left: 32px;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const BiggerContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: auto;
`;

export const DesktopContainer = styled.div`
  margin: 32px;
  border-radius: 30px;
  padding: 32px 64px;
  background-color: #e7e7e7;
  margin-top: 172px;
  background-repeat: no-repeat;
  background-position: 100% 25%;
  color: #001159;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  h6 {
    max-width: 620px;
    all: unset;
    font-size: 42px;
    font-weight: 700;
    line-height: 52px;
    text-align: center;
  }

  li {
    max-width: 620px;
    font-size: 20px;
    line-height: 28px;
    text-align: justified;

    strong {
      color: #27bd83;
    }
  }
`;
