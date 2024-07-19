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
  gap: 32px;
  @media only screen and (max-width: 768px) {
    padding: 32px;
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const RightContainer = styled.div`
  background-color: #c2c6c7;
  padding: 24px;
  border-radius: 20px;
  width: 100%;
`;

export const InnerContainer = styled.form`
  background-color: #f0f1f5;
  padding: 32px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
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

  @media only screen and (max-width: 768px) {
    p {
      font-size: 42px;
    }
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

export const InputSection = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  & > * {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  all: unset;
  background-color: #f7f8fa;
  color: #001159;
  padding: 12px 18px;
  border: 1px solid #27bd83;
  border-radius: 15px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #001159;
`;

export const Label = styled.div`
  font-size: 18px;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const Disclaimer = styled.div`
  color: #001159;
  font-size: 12px;
  max-width: 300px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const SubmitButton = styled.input`
  all: unset;
  font-size: 18px;
  padding: 8px 18px;
  border: 2px solid #001159;
  border-radius: 1000px;
  cursor: pointer;
  width: min-content;
  white-space: nowrap;
  color: #001159;

  &:disabled {
    opacity: 70%;
    cursor: not-allowed;
  }
`;
