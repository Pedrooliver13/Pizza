import { useSelector } from "react-redux";

import SectionMain from "../../components/SectionMain";

import { Content } from "../../styles/container";

const Results = () => {
  const { dough, size, filling, price } = useSelector(state => state.pizzaReducer.pizza);

  const data = {
    name: `Pizza de ${filling.name} ${size.name}`,
    image: filling.image,
    dough: dough.name,
    filling: filling.name,
    price,
    points: 50
  }
  
  return (
    <Content>
      <SectionMain title="Pizza comprada:" data={data} hiddenButton/>
    </Content>
  );
};

export default Results;
