import styled from "styled-components";

export const FooterContainer = styled.section`
  background-color: #001159;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: white;
  margin: auto;
  gap: 50px;
  padding-bottom: 82px;

  & > img {
    position: absolute;
    bottom: 62px;
    left: 0;
  }

  p {
    all: unset;
    display: block;
  }

  & > p {
    width: 746px;
    text-align: center;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 130px;
  background-color: white;
`;

export const TopSection = styled.div`
  display: flex;
  gap: 125px;
  align-items: center;
  margin-top: 50px;
`;

export const Contact = styled.p`
  all: unset;
  color: #27bd83 !important;
  text-transform: uppercase !important;
  font-size: 18px !important;
  font-weight: 700 !important;
  line-height: 25.2px !important;
  margin-bottom: 24px !important;
`;
