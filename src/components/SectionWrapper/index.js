import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import Card from "../Card";
import Button from "../Button";

import * as Styled from "./style";

const SectionWrapper = ({ data, handleClick, step, message }) => {
  const [checked, setChecked] = useState();

  return (
    <Styled.Wrapper>
      <h1 className="title">Ou monte sua pizza</h1>
      <h3 className="subtitle">
        Selecione Sua Massa:
        <span>{ step } / 3</span>
      </h3>

      {data.map((item, index) => (
        <Card
          key={index}
          data={item}
          index={index}
          state={checked}
          setState={setChecked}
        />
      ))}

      <Styled.Submit>
        <Button onClick={() => handleClick(checked)}>
          montar meu pedido <FiArrowRight size={20} />
        </Button>
        {message && <p className="error">Selecione uma opção</p>}
      </Styled.Submit>
    </Styled.Wrapper>
  );
};

export default SectionWrapper;
