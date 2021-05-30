import styled from "styled-components";
import * as C from "../../styles/constants";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  width: 100%;
  background: ${C.PizzaGray};
  border-radius: 15px;
  min-height: 250px;
  max-height: 250px;
  height: 100%;
  overflow: hidden;
  margin: 32px auto;

  @media (max-width: ${C.MD}) {
    max-height: 180px;
    min-height: 180px;
    margin: 10px auto;
  }
`;

export const Image = styled.img`
  max-width: 200px;
  width: 100%;
  object-fit: cover;
  overflow: auto;

  @media (max-width: ${C.MD}) {
    max-width: 40%;
  }

  @media (max-width: ${C.SM}) {
    max-width: 35%;
  }
`;

export const Description = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2rem;

  .text-block {
    font-size: 1rem;
    color: ${C.PizzaBlack};

    .title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    @media (max-width: ${C.MD}) {
      font-size: 0.8rem;
      .title {
        font-size: 1rem;
        margin-bottom: 1rem;
      }
    }
  }

  .price {
    color: ${C.PizzaGreenLight};
    font-size: 2rem;
    font-weight: bold;

    span {
      color: ${C.PizzaGreen};
    }

    @media (max-width: ${C.MD}) {
      font-size: 1.2rem;
    }
  }

  @media (max-width: ${C.MD}) {
    width: 55%;
    padding: 1rem .5rem;
  }
`;

export const WrapperCheckbox = styled.div`
  width: 10%;
`;
