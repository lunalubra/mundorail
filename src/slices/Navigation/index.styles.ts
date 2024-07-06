import styled from "styled-components";
import { PrismicNextLink } from "@prismicio/next";

export const NavigationContainer = styled.section`
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

export const Link = styled(PrismicNextLink)`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: white;
  text-transform: uppercase;
`;
