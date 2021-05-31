import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/Button";
import SectionMain from "../../components/SectionMain";
import { clearPoint } from "../../store/modules/points/actions";
import { clearPizza } from "../../store/modules/pizza/actions";

import * as Styled from "./style";

const Results = ({ setState }) => {
  const dispatch = useDispatch();

  const { dough, size, filling, price } = useSelector(
    (state) => state.pizzaReducer.pizza
  );

  const data = {
    name: `Pizza de ${filling.name} ${size.name}`,
    image: filling.image,
    dough: dough.name,
    filling: filling.name,
    price,
    points: 50,
  };

  const handleClick = () => {
    setState(1);
    dispatch(clearPizza());
  };

  const handleClearState = () => {
    dispatch(clearPoint())
  }

  return (
    <Styled.Wrapper>
      <SectionMain title="Pizza comprada:" data={data} hiddenButton />

      <Styled.TextBlock>
        <p>Compra concluída + 50 pontos</p>

        <Button onClick={handleClearState}>Limpar pontuação</Button>
        <Button onClick={handleClick}>Voltar para home</Button>
      </Styled.TextBlock>
    </Styled.Wrapper>
  );
};

export default Results;
