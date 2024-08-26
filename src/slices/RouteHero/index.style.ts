import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div<{ $isSurvivors: boolean }>`
  color: ${(props) => (props.$isSurvivors ? "#001159" : "#001159")};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1280px;
  margin: auto;
  position: relative;
  padding-top: 64px;
`;

export const ShareButton = styled.a<{ $isSurvivors: boolean }>`
  background-color: ${(props) => (props.$isSurvivors ? "#C4241F" : "#27bd83")};
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 100000px;
  padding: 8px 16px;
  align-self: flex-start;
  margin: 16px;
  cursor: pointer;
  z-index: 15;
`;

export const Title = styled.div<{ $isSurvivors: boolean }>`
  p {
    all: unset;
    color: ${(props) => (props.$isSurvivors ? "#110DB7" : "#001159")};
    font-size: 42px;
  }
`;

export const Description = styled.div<{ $isSurvivors: boolean }>`
  p {
    all: unset;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
  }

  strong {
    color: ${(props) => (props.$isSurvivors ? "#110DB7" : "#27bd83")};
  }
`;

export const Notes = styled.div`
  text-align: left;
`;

export const Button = styled.a<{ $isSurvivors: boolean }>`
  all: unset;
  font-size: 25px;
  line-height: 30px;
  padding: 15px 30px;
  border: 2px solid white;
  border-radius: 1000px;
  cursor: pointer;
  margin-top: 16px;
  max-width: min-content;
  white-space: nowrap;
  margin: auto;

  color: ${(props) => (props.$isSurvivors ? "#110DB7" : "#001159")};
  border-color: ${(props) => (props.$isSurvivors ? "#110DB7" : "#001159")};

  @media only screen and (min-width: 768px) {
    margin: unset;
  }
`;

export const CardContainer = styled.div<{ $isSurvivors: boolean }>`
  background-color: ${(props) => (props.$isSurvivors ? "#110DB7" : "#001159")};
  box-shadow: -10px 25px 40px 0px rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  min-width: 364px;
  width: 364px;
  min-height: 455px;
  position: relative;
  transform-origin: top left;
  margin: 32px 0 -64px;
  transform: scale(0.8) translateX(12.5%);
`;

export const CardDays = styled.div<{ $isSurvivors: boolean }>`
  position: absolute;
  top: 11px;
  left: 11px;
  z-index: 2;
  border-radius: 16px;
  background-color: ${(props) => (props.$isSurvivors ? "#C4241F" : "#27bd83")};
  padding: 8px 16px;
  font-size: 33px;
  font-weight: 600;

  span {
    font-size: 19px;
  }
`;

export const CardPrice = styled.div<{ $isSurvivors: boolean }>`
  position: absolute;
  top: 315px;
  right: 11px;
  z-index: 2;
  border-radius: 16px;
  background-color: ${(props) => (props.$isSurvivors ? "#C4241F" : "#27bd83")};
  font-size: 38px;
  font-weight: 700;
  line-height: 100%;
  height: 60px;
  width: 170px;

  div {
    color: ${(props) => (props.$isSurvivors ? "white" : "#001159")};
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-25%, -25%);
  }

  span {
    color: ${(props) => (props.$isSurvivors ? "white" : "#001159")};
    position: absolute;
    top: 3px;
    left: 16px;
    font-size: 15px;
    line-height: 15px;
  }

  p {
    all: unset;
    display: block;
    position: absolute;
    bottom: 5px;
    left: 16px;
    line-height: 38px;
  }
`;

export const CardTopSection = styled.div`
  img {
    width: 326px;
    height: 326px;
    margin-top: 27px;
    background-color: white;
  }
`;

export const CardBottomSection = styled.div`
  text-align: left;
  padding: 24px;
  p {
    all: unset;
    font-weight: 600;
    display: block;
  }

  ul {
    all: unset;
  }

  li {
    all: unset;
  }
`;

export const CheckboxDisclaimer = styled.div`
  color: #001159;
  font-size: 12px;
  max-width: 300px;

  a {
    all: unset;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-decoration-line: underline;
    cursor: pointer;

    color: #000000;
  }
`;

export const Disclaimer = styled.p`
  all: unset;
  margin-top: 16px;
  padding: 0 32px;
  font-size: 12px;
  margin-bottom: 64px;
  @media only screen and (min-width: 768px) {
    padding: unset;
    margin-bottom: unset;
  }
`;

export const DesktopImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  img {
    width: 577px;
    height: 577px;
  }
`;

export const Note = styled.div<{ $isSurvivors: boolean }>`
  text-align: left;
  background-color: ${(props) => (props.$isSurvivors ? "#C4241F" : "#25be83")};
  padding: 16px;
  max-width: 200px;
  position: absolute;
  bottom: -32px;
  right: 32px;
  font-size: 12px;

  p {
    all: unset;
    color: ${(props) => (props.$isSurvivors ? "white" : "#001159")};
    font-weight: 700;
  }
  ul {
    padding-left: 24px;
  }

  li {
    color: white;
  }
`;

export const Price = styled.div<{ $isSurvivors: boolean }>`
  position: absolute;
  top: 64px;
  right: 32px;
  z-index: 2;
  border-radius: 16px;
  background-color: ${(props) => (props.$isSurvivors ? "#C4241F" : "#25be83")};
  font-size: 38px;
  font-weight: 700;
  line-height: 100%;
  height: 60px;
  width: 170px;

  div {
    color: ${(props) => (props.$isSurvivors ? "white" : "#001159")};
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-25%, -25%);
  }

  span {
    color: ${(props) => (props.$isSurvivors ? "white" : "#001159")};
    position: absolute;
    top: 3px;
    left: 16px;
    font-size: 15px;
    line-height: 15px;
  }

  p {
    all: unset;
    color: white;
    display: block;
    position: absolute;
    bottom: 5px;
    left: 16px;
    line-height: 38px;
  }
`;

export const DesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px;

  @media only screen and (min-width: 768px) {
    padding: 32px 0 0 32px;
    align-self: flex-start;
    max-width: 550px;
    text-align: left;
  }
`;

export const ExtraSection = styled.div`
  width: 100%;
  height: 510px;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ExtraSectionTitle = styled.div`
  padding-top: 80px;
  p {
    all: unset;
    display: block;
    color: white;
    text-align: center;
    font-size: 60px;
  }

  strong {
    display: block;
  }
`;

export const ExtraSectionDescription = styled.div`
  p {
    all: unset;
    display: block;
    color: white;
    text-align: center;
    font-size: 20px;
    max-width: 510px;
    margin: auto;
    padding-top: 16px;
    line-height: 140%;
  }
`;

export const ExtraSectionButton = styled.button`
  all: unset;
  font-size: 25px;
  line-height: 30px;
  padding: 15px 30px;
  border: 2px solid white;
  border-radius: 1000px;
  cursor: pointer;
  white-space: nowrap;
  margin: auto;

  color: white;
  border-color: white;
`;

// a

export const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: #001159;
  color: white;
  overflow-y: auto;
  padding: 32px;
`;

export const InnerContainer = styled.form`
  background-color: #f0f1f5;
  padding: 32px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 800px;
  margin: auto;
`;

export const Subtitle = styled.div`
  p {
    all: unset;
    font-size: 32px;
  }

  @media only screen and (max-width: 768px) {
    p  {
      font-size: 24px;
    }
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

export const Input = styled.input<{ $shouldPoint?: boolean }>`
  all: unset;
  background-color: #f7f8fa;
  color: #001159;
  padding: 12px 18px;
  border: 1px solid #27bd83;
  border-radius: 15px;
  cursor: ${(props) => (props.$shouldPoint ? "pointer" : "inherit")};
  min-height: 19px;
`;

export const InputContainer = styled.div`
  position: relative;
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

export const PeopleSelectorModal = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 10000000;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSide = styled.div``;

export const Type = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  color: #001159;
`;

export const AgeGuideline = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;

  color: #001159;
`;

export const RightSide = styled.div`
  display: flex;
  gap: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;

  color: #001159;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  border: 1px solid #001159;
  border-radius: 10000px;
  font-size: 24px;
  line-height: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const KidsRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-left: auto;
  max-width: 136px;
`;

export const Kid = styled.input`
  min-width: 64px;
  color: #001159;
  border: 1px solid #001159;
  padding: 4px 8px;
`;

export const CloseIconContainer = styled.div<{
  $isNegative?: boolean;
  $fixEndAlignment?: boolean;
}>`
  position: relative;
  display: ${(props) => (props.$fixEndAlignment ? "flex" : "unset")};
  z-index: 1000;
  align-self: end;

  svg {
    margin-left: ${(props) => (props.$fixEndAlignment ? "auto" : "unset")};
    width: 24px;
    height: auto;

    path {
      stroke: ${(props) => (props.$isNegative ? "#001159" : "white")};
    }
  }
`;
