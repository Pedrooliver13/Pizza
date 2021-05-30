import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { addDough, addPrice } from "../../store/modules/pizza/actions";
import SectionWrapper from "../../components/SectionWrapper";

import { dough } from "../../services/dough.json";

const Step1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { step } = useSelector((state) => state.pizzaReducer.pizza.dough);

  const handleClick = (data) => {
    dispatch(addDough(data));
    dispatch(addPrice(data.price));
    history.push("/step2");

    return;
  };

  return <SectionWrapper data={dough} handleClick={handleClick} step={step} />;
};

export default Step1;
