import styled from "styled-components";
import * as C from "../../styles/constants";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 650px;
  background: ${C.PizzaWhite};
  border-radius: 15px;
  height: 100%;
  overflow: hidden;
  margin: 10px auto;

  @media (max-width: ${C.MD}) {
    max-width: 320px;
    width: 100%;
  }
`;

export const Image = styled.img`
  max-width: 180px;
  width: 100%;
  object-fit: cover;
  overflow: auto;

  @media (max-width: ${C.MD}) {
    max-width: 40%;
    width: 100%;
  }
`;

export const Description = styled.p`
  width: 45%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 8px;
  padding: 10px;

  @media (max-width: ${C.MD}) {
    width: 55%;
  }
`;

export const TextBlock = styled.div`
  font-size: 1rem;
  color: ${C.PizzaBlack};

  .title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

  @media (max-width: ${C.MD}) {
    font-size: 0.8rem;
    .title {
      font-size: 1.05rem;
      margin-bottom: 1rem;
    }
  }
`;

export const Price = styled.div`
  color: ${C.PizzaGreen};
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: ${C.MD}) {
    font-size: 1.2rem;
  }
`;

export const WrapperCheckbox = styled.div`
  width: 10%;
`
