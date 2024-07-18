import styled from "styled-components";

export const BigContainer = styled.div`
  background-color: #001159;
`;

export const Container = styled.div`
  color: white;
  max-width: 1280px;
  margin: auto;
  text-align: center;
  padding: 32px 0;
`;

export const Button = styled.button`
  all: unset;
  font-size: 25px;
  line-height: 30px;
  padding: 15px 30px;
  border: 2px solid white;
  border-radius: 1000px;
  cursor: pointer;
  width: min-content;
  white-space: nowrap;
  color: white;
`;

export const ReasonContainer = styled.div`
  background-color: white;
  color: #001159;
  border-radius: 20px;
  text-align: center;
  padding: 32px;
  position: relative;
  min-width: 300px;
  width: 300px;
`;

export const Reasons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  padding: 32px;

  @media only screen and (max-width: 768px) {
    flex-wrap: unset;
    justify-content: unset;
    flex-direction: row;
    overflow-x: auto;
  }
`;

export const Index = styled.div`
  position: absolute;
  top: -18px;
  left: -18px;
  background-color: #27bd83;
  border-radius: 1000px;
  width: 64px;
  height: 64px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  color: white;
`;

export const Title = styled.div`
  padding: 0 32px;
  max-width: 550px;
  margin: auto;
  p {
    all: unset;
    font-size: 42px;
  }
`;

export const Description = styled.div`
  padding: 0 32px;
  max-width: 550px;
  margin: auto;
  p {
    all: unste;
    line-height: 140%;
  }

  strong {
    color: #27bd83;
  }
`;

export const ReasonTitle = styled.div`
  margin-bottom: 24px;

  p {
    all: unset;
    font-size: 32px;
    display: block;
  }
`;

export const ReasonDescription = styled.div`
  p {
    all: unset;
    line-height: 140%;
  }

  strong {
    color: #27bd83;
  }
`;
