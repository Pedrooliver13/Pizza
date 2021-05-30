import styled from "styled-components";
import * as C from "../../styles/constants";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;

  background-color: ${C.PizzaBlue};
  height: 180px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 40px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${C.PizzaWhite};

  .title {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    line-height: 1;

    span {
      font-size: 1.2rem;
      color: ${C.PizzaYellow};
    }

    @media (max-width: ${C.XL}) {
      font-size: 1.2rem;

      span {
        font-size: 1rem;
        color: ${C.PizzaYellow};
      }
    }
  }
`;

export const Image = styled.img`
  max-width: 100%;
  width: 50px;

  object-fit: contain;
  margin-right: 1rem;

  @media (max-width: ${C.SM}) {
    display: none;
  }
`;

export const Point = styled.div`
  display: flex;
  text-align: right;
  color: ${C.PizzaYellow};
  font-weight: bold;

  .title {
    font-size: 1.2rem;

    span {
      color: ${C.PizzaWhite};
    }

    @media (max-width: ${C.XL}) {
      font-size: 0.9rem;
    }
  }
`;

