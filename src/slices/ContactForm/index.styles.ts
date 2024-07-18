import styled from "styled-components";

export const BigContainer = styled.div`
  background-color: #001159;
`;

export const Container = styled.div`
  color: white;
  display: flex;
  max-width: 1280px;
  margin: auto;
  padding: 64px;
`;

export const LeftContainer = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const RightContainer = styled.div`
  flex-grow: 1;
  flex-basis: 0;
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

export const Title = styled.div`
  p {
    all: unset;
    font-size: 64px;
  }
  strong {
    color: #27bd83;
  }
`;

export const Subtitle = styled.div`
  p {
    all: unset;
    font-size: 32px;
  }
`;

export const Description = styled.div`
  p {
    all: unset;
  }
`;
