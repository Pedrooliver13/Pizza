import styled from "styled-components";
import * as C from "../../styles/constants";

export const Wrapper = styled.div`
  opacity: 0;
  transform: translateY(50px);
  animation: animeUp 0.5s forwards;

  @keyframes animeUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }
`;

export const TextBlock = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;

  @media (max-width: ${C.MD}) {
    flex-direction: column;
    font-size: 1rem;
  }

  p {
    color: ${C.PizzaBlue};
    font-weight: bold;
    margin: 20px;
  }

  button {
    min-width: 280px;
    width: 100%;
    justify-content: center;
    margin: 10px;
  }
`;
