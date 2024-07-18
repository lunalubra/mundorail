import styled from "styled-components";
import { PrismicNextLink } from "@prismicio/next";

export const NavigationContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 55px 32px;
`;

export const Link = styled(PrismicNextLink)<{ isPositive?: boolean }>`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: ${(props) => (props.isPositive ? "#001159" : "white")};
  text-transform: uppercase;
`;

export const MobileContainer = styled.div`
  position: absolute;
  left: 24px;
  top: 32px;
  z-index: 10;
  width: calc(100% - 48px);

  svg {
    width: 32px;
    height: auto;
  }

  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  left: 12px;
  top: 12px;
  z-index: 20;
  width: calc(100% - 24px);
  height: min-content;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 40px;
  padding: 38px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;

  & > svg {
    width: 48px !important;
  }

  svg {
    width: 32px;
    height: auto;
  }
`;

export const MobileLink = styled(PrismicNextLink)`
  all: unset;
  font-size: 48px;

  &:active {
    font-style: italic;
  }
`;

export const FixedContainer = styled.div<{ isPositive?: boolean }>`
  background-color: ${(props) => (props.isPositive ? "white" : "#001159")};

  position: relative;
  padding: 32px;

  svg {
    width: 32px;
    height: auto;
    path {
      fill: #001159;
    }
  }

  img {
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const FixedNavigationContainer = styled.div<{ isPositive?: boolean }>`
  background-color: ${(props) => (props.isPositive ? "white" : "#001159")};
  width: 100%;
`;

export const InternalContainer = styled.div`
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 55px 32px;
`;
