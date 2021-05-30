import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import SectionWrapper from "../../components/SectionWrapper";
import { addPoint } from "../../store/modules/points/actions";
import { addFilling, addPrice } from "../../store/modules/pizza/actions";

import { Content } from "../../styles/container";
import { filling } from "../../services/filling.json";

const Filling = () => {
  const [message, setMessage] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const { step } = useSelector((state) => state.pizzaReducer.pizza.filling);
  const sizeState = useSelector((state) => state.pizzaReducer.pizza.size);
  
  useEffect(() => {
    if (!sizeState.name) {
      return history.push("/");
    }
  }, [sizeState, history]);

  const handleClick = (data) => {
    if (!data) {
      return setMessage(true);
    }

    dispatch(addFilling(data));
    dispatch(addPrice(data.price));
    dispatch(addPoint(50));
    history.push("/results");
    return;
  };

  return (
    <Content>
      <SectionWrapper
        data={filling}
        step={step}
        message={message}
        handleClick={handleClick}
      />
    </Content>
  );
};

export default Filling;
