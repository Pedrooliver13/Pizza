import styled from "styled-components";
import * as C from "../../styles/constants";

export const Wrapper = styled.section`
  position: relative;
  background-color: ${C.PizzaGray};
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.3);
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
    width: 100px;
    height: 100px;

    top: -33px;
    right: -20px;
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
      right: -12px;
      width: 90px;
      height: 90px;
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
      font-size: 0.85rem;
      color: #fff;
      padding-top: 1.8rem;
      line-height: 17px;

      span {
        font-weight: bold;
        font-size: 1rem;
      }

      @media (max-width: ${C.MD}) {
        font-size: 0.8rem;
        padding-top: 1.5rem;

        span {
          font-weight: bold;
          font-size: 0.9rem;
        }
      }
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

  @media (max-width: ${C.MD}) {
    margin: 10px auto;
  }

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
    max-width: 40%;
    width: 100%;
    object-position: center center;
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

  @media (max-width: ${C.MD}) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }

  .price {
    color: ${C.PizzaGreenLight};
    font-size: 1.8rem;
    font-weight: bold;

    span {
      display: inline-block;
      color: ${C.PizzaGreen};
    }

    @media (max-width: ${C.SM}) {
      font-size: 1.1rem;
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
      width: 100%;
      font-size: 1rem;
      height: 35px;
      border-radius: 10px;
    }
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
