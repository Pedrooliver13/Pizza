import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addDough, addPrice } from "../../store/modules/pizza/actions";
import SectionWrapper from "../../components/SectionWrapper";

import { dough } from "../../services/dough.json";

const Step1 = () => {
  const [message, setMessage] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const pizzaState = useSelector((state) => state.pizzaReducer.pizza.dough);

  const handleClick = (data) => {
    if (!data) {
      return setMessage(true);
    }

    dispatch(addDough(data));
    dispatch(addPrice(data.price));
    history.push("/step2");

    return;
  };

  return (
    <SectionWrapper
      data={dough}
      step={pizzaState.step}
      message={message}
      handleClick={handleClick}
    />
  );
};

export default Step1;
