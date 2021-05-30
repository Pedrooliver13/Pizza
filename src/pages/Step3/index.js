import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import SectionWrapper from "../../components/SectionWrapper";
import { addFilling, addPrice } from "../../store/modules/pizza/actions";
import { addPoint } from '../../store/modules/points/actions';

import { Content } from "../../styles/container";
import { filling } from "../../services/filling.json";

const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { step } = useSelector((state) => state.pizzaReducer.pizza.filling);

  const handleClick = (data) => {
    dispatch(addFilling(data));
    dispatch(addPrice(data.price));
    dispatch(addPoint(50))
    history.push("/results");
    return;
  };

  return (
    <Content>
      <SectionWrapper data={filling} handleClick={handleClick} step={step} />
    </Content>
  );
};

export default Step3;
