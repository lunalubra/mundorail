import { PrismicNextLink } from "@prismicio/next";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
  padding: 0 32px;
  text-align: center;
  color: #001159;
`;

export const Title = styled.div`
  max-width: 550px;
  margin: auto;
  font-size: 42px;
`;

export const Description = styled.div`
  max-width: 550px;
  margin: auto;
  strong {
    color: #27bd83;
  }
`;

export const Button = styled(PrismicNextLink)`
  all: unset;
  font-size: 22px;
  line-height: 30px;
  padding: 15px 30px;
  border: 2px solid white;
  border-radius: 1000px;
  cursor: pointer;
  width: min-content;
  margin-top: 32px;
  white-space: nowrap;

  color: #001159;
  border-color: #001159;
`;
