import styled from "styled-components";
import * as C from "../../styles/constants";

export const Wrapper = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 30px;
  margin-top: 50px;

  background-color: ${C.PizzaWhite};
  border-radius: 12px;
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: ${C.MD}) {
    padding: 20px;
  }

  .title {
    font-size: 1.5rem;
    color: ${C.PizzaBlack};

    @media (max-width: ${C.MD}) {
      font-size: 1.2rem;
    }
  }

  .subtitle {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${C.PizzaBlueLight};

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      background-color: ${C.PizzaGray};
      color: ${C.PizzaBlack};
      border-radius: 10px;
      padding: 4px 12px;
    }

    @media (max-width: ${C.MD}) {
      font-size: 0.9rem;
    }
  }
`;

export const Submit = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    margin-top: 12px;
    svg {
      width: 25px;
    }

    @media (max-width: ${C.MD}) {
      width: 100%;
    }
  }
`;
