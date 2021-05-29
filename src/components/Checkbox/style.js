import styled from "styled-components";
import * as C from "../../styles/constants";

export const Wrapper = styled.div`
  width: 26px;
  height: 29px;
  position: absolute;
  right: 10px;

  @media (max-width: ${C.MD}) {
    width: 10px;
    height: 10px;
    right: 25px;
  }

  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    position: absolute;
    left: -9999px;
  }
  [type="checkbox"]:not(:checked) + label,
  [type="checkbox"]:checked + label {
    position: relative;
    padding-left: 32px;
    cursor: pointer;
    margin-bottom: 4px;
    display: inline-block;
    font-size: 16px;
  }

  [type="checkbox"]:not(:checked) + label:before,
  [type="checkbox"]:checked + label:before {
    content: "";
    position: absolute;
    left: 1px;
    top: 0px;
    width: 22px;
    height: 22px;
    border: 1px solid #cccccc;
    background: ${C.PizzaWhite};
    border-radius: 7px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  [type="checkbox"]:checked + label:before {
    border: 2px solid #09ad7e;
    background: #c5dcc9;
  }

  [type="checkbox"]:not(:checked) + label:after,
  [type="checkbox"]:checked + label:after {
    content: "";
    position: absolute;
    top: 8px;
    left: 9px;
    font-size: 20px;
    line-height: 1.2;
    background: #09ad7e;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  [type="checkbox"]:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }
  [type="checkbox"]:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }

  [type="checkbox"]:checked:focus + label:before,
  [type="checkbox"]:not(:checked):focus + label:before {
    border: 2px dotted #0e8609;
  }
`;
