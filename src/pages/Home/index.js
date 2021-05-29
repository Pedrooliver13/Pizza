import { useState } from "react";

import Header from "../../components/Header";
import Card from "../../components/Card";
import SectionWrapper from "../../components/SectionWrapper";
import SectionMain from "../../components/SectionMain";

const Home = () => {
  const [checked, setChecked] = useState();

  const pizza = [
    {
      id: 1,
      name: "Pizza",
      image: "https://i.imgur.com/REcYtUX.png",
      price: "50,00",
      description: "mussarela, peito de peru, palmito, parmesão, orégano.",
    },
    {
      id: 2,
      name: "Pizza",
      image: "https://i.imgur.com/REcYtUX.png",
      price: "50,00",
      description: "mussarela, peito de peru, palmito, parmesão, orégano.",
    },
    {
      id: 3,
      name: "Pizza",
      image: "https://i.imgur.com/REcYtUX.png",
      price: "50,00",
      description: "mussarela, peito de peru, palmito, parmesão, orégano.",
    },
    {
      id: 4,
      name: "Pizza",
      image: "https://i.imgur.com/REcYtUX.png",
      price: "50,00",
      description: "mussarela, peito de peru, palmito, parmesão, orégano.",
    },
  ];

  return (
    <>
      <Header />

      <SectionMain />
      <SectionWrapper>
        {pizza.map((item, index) => (
          <Card
            data={item}
            index={index}
            state={checked}
            setState={setChecked}
          />
        ))}
      </SectionWrapper>
    </>
  );
};

export default Home;
