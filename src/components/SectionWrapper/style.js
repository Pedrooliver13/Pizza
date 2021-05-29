import styled from "styled-components";
import * as C from "../../styles/constants";

export const Wrapper = styled.section`
  max-width: 600px;
  width: 100%;
  padding: 30px;
  margin: 10px auto;
  font-size: 1.2rem;
  line-height: 1.5;

  background-color: ${C.PizzaWhite};
  border-radius: 14px;
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.2);

  .title {
    font-size: 1.5rem;
    color: ${C.PizzaBlack};

    @media (max-width: ${C.MD}) {
      font-size: 1.2rem;
    }
  }

  .subtitle {
    font-weight: bold;
    color: ${C.PizzaBlue};

    display: flex;
    align-items: flex-end;
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

  @media (max-width: ${C.SM}) {
    max-width: 300px;
    padding: 16px 12px;
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
