import styled from "styled-components";
import * as C from "../../styles/constants";

export const Wrapper = styled.main`
  max-width: 600px;
  width: 100%;
  margin-top: -40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${C.SM}) {
    max-width: 300px;
    margin-top: -20px;
  }
`;

export const Content = styled.section`
  position: relative;
  background-color: ${C.PizzaGray};
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 8px 16px;

  .title {
    font-size: 1.5rem;
    color: ${C.PizzaBlack};

    @media (max-width: ${C.SM}) {
      font-size: 1rem;
    }
  }

  .accumulate-points {
    position: absolute;
    width: 90px;
    height: 90px;

    top: -33px;
    right: -16px;
    z-index: 1;
    overflow: hidden;

    img {
      position: relative;
      max-width: 100%;
      height: auto;

      -webkit-animation: spin 15s linear infinite;
      -moz-animation: spin 15s linear infinite;
      animation: spin 15s linear infinite;
    }

    @media (max-width: ${C.LG}) {
      right: 0;
    }

    @media (max-width: ${C.MD}) {
      right: -10px;
    }

    @-moz-keyframes spin {
      100% {
        -moz-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    p {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 0.75rem;
      color: #fff;
      padding-top: 1.4rem;
      line-height: 17px;

      span {
        font-weight: bold;
        font-size: 1rem;
      }
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    padding: 10px 3px 10px 10px;
    width: 143px;
    height: 45px;
    outline: none;
    border: none;
    color: ${C.PizzaWhite};
    font-size: 20px;
    cursor: pointer;

    @media (max-width: ${C.SM}) {
      width: 100px;
      font-size: 1rem;
      height: 30px; 
      border-radius: 10px;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  width: 100%;
  background: ${C.PizzaGray};
  border-radius: 15px;
  height: 100%;
  overflow: hidden;
  margin: 12px auto;

  @media (max-width: ${C.SM}) {
    margin: 10px auto;
  }
`;

export const Image = styled.img`
  max-width: 200px;
  width: 100%;
  object-fit: cover;
  overflow: auto;

  @media (max-width: ${C.LG}) {
    max-width: 45%;
    width: 100%;
  }
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2rem;

  span {
    display: block;
    color: ${C.PizzaBlack};
    font-weight: bold;
    line-height: 1.5rem;
  }

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
        font-size: 1.05rem;
        margin-bottom: 1rem;
      }
    }
  }

  @media (max-width: ${C.MD}) {
    width: 60%;
    padding: 10px;
  }
`;

export const Buy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

  .price {
    color: ${C.PizzaGreen};
    font-size: 1.8rem;
    font-weight: bold;

    @media (max-width: ${C.SM}) {
      font-size: 1.1rem;
    }
  }

  @media (max-width: ${C.SM}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Info = styled.p`
  font-size: 0.9rem;
  display: block;
  text-align: right;
  color: ${C.PizzaBlack};
  margin-top: 10px;

  span {
    color: ${C.PizzaAlert};
  }

  @media (max-width: ${C.MD}) {
    font-size: 0.6rem;
    margin-right: 10px;
  }
`;
