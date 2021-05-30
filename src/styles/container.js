import styled from "styled-components";
import * as C from "./constants";

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  /* BREAKPOINT 576px */
  @media (min-width: 36em) {
    max-width: 540px;
  }
  /* BREAKPOINT 768px */
  @media (min-width: 48em) {
    max-width: 720px;
  }
  /* BREAKPOINT 992px */
  @media (min-width: 62em) {
    max-width: 960px;
  }
  /* BREAKPOINT 1200px */
  @media (min-width: 75em) {
    max-width: 1200px;
  }
`;

export const Content = styled.div`
  max-width: 600px;
  width: 100%;
  margin-top: -40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;

  opacity: 0;
  transform: translateY(50px);
  animation: animeUp 0.5s forwards;

  @keyframes animeUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  @media (max-width: ${C.MD}) {
    max-width: 500px;
    margin-top: -20px;
    padding-right: 12px;
    padding-left: 12px;
  }
`;
