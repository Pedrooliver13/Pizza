import styled from "styled-components";
import * as C from "../../styles/constants";

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 3px 10px 10px;
  height: 45px;

  font-size: 1rem;
  outline: none;
  border: none;
  padding: 10px;
  color: ${C.PizzaWhite};
  background: ${C.PizzaGreen};
  border-radius: 10px;
  width: 185px;
  cursor: pointer;

  @media (max-width: ${C.MD}) {
    justify-content: center;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
  @media (max-width: ${C.SM}) {
    font-size: 0.8rem;

    svg {
      width: 1.2rem;
    }
  }
`;
