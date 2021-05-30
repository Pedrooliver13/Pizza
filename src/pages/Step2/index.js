import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import SectionWrapper from "../../components/SectionWrapper";
import { addPrice, addSize } from "../../store/modules/pizza/actions";

import { size } from "../../services/size.json";
import { Content } from "../../styles/container";

const Step2 = () => {
  const [message, setMessage] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const { step } = useSelector((state) => state.pizzaReducer.pizza.size);
  const doughState = useSelector((state) => state.pizzaReducer.pizza.dough);

  useEffect(() => {
    if (!doughState.name) {
      return history.push("/");
    }
  }, [doughState, history]);

  const handleClick = (data) => {
    if (!data) {
      return setMessage(true);
    }

    dispatch(addSize(data));
    dispatch(addPrice(data.price));
    history.push("/step3");
    return;
  };

  return (
    <Content>
      <SectionWrapper
        data={size}
        step={step}
        message={message}
        handleClick={handleClick}
      />
    </Content>
  );
};

export default Step2;
