import { useState } from "react";

import Dough from "../Dough";
import Size from "../Size";
import Filling from "../Filling";
import Results from '../Results';
import SectionMain from "../../components/SectionMain";

import { getFeaturedItem } from "../../utils";
import { Content } from "../../styles/container";
import { pizzas } from "../../services/pizza.json";

const Home = () => {
  const [step, setStep] = useState(1);

  const arrayTab = [
    <Dough state={step} setState={setStep} />,
    <Size state={step} setState={setStep} />,
    <Filling state={step} setState={setStep} />,
    <Results setState={setStep}/>,
  ];

  return (
    <Content>
      {step === 1 && <SectionMain data={getFeaturedItem(pizzas)} />}
      {step <= arrayTab.length && arrayTab[step - 1]}
    </Content>
  );
};

export default Home;
