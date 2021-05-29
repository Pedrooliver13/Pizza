import { FiArrowRight } from 'react-icons/fi';

import Button from "../Button";

import * as Styled from "./style";

const SectionWrapper = ({ children }) => {
  return (
    <Styled.Wrapper>
      <h1 className="title">Ou monte sua pizza</h1>
      <h3 className="subtitle">
        Selecione Sua Massa
        <span>0 / 3</span>
      </h3>

      {children}

      <Styled.Submit>
        <Button>
          montar meu pedido <FiArrowRight  size={20}/>
        </Button>
      </Styled.Submit>
    </Styled.Wrapper>
  );
};

export default SectionWrapper;
