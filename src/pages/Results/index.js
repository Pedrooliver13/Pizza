import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/Button";
import SectionMain from "../../components/SectionMain";
import { clearPoint } from "../../store/modules/points/actions";
import { clearPizza } from "../../store/modules/pizza/actions";

import * as Styled from "./style";
import { Content } from "../../styles/container";

const Results = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const { dough, size, filling, price } = useSelector(
    (state) => state.pizzaReducer.pizza
  );
  const hasPizza = !dough.name || !size.name || !filling.name;

  useEffect(() => {
    if(hasPizza) {
      return history.push("/");
    }
  }, [hasPizza, history])

  const data = {
    name: `Pizza de ${filling.name} ${size.name}`,
    image: filling.image,
    dough: dough.name,
    filling: filling.name,
    price,
    points: 50,
  };

  return (
    <Content>
      <SectionMain title="Pizza comprada:" data={data} hiddenButton />

      <Styled.TextBlock>
        <p>Compra concluída + 50 pontos</p>

        <Button onClick={() => dispatch(clearPoint())}>Limpar pontuação</Button>
        <Button
          onClick={() => {
            dispatch(clearPizza());
            history.push("/");
          }}
        >
          Voltar para home
        </Button>
      </Styled.TextBlock>
    </Content>
  );
};

export default Results;
