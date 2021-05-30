import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { addPrice, addSize } from "../../store/modules/pizza/actions";
import SectionWrapper from "../../components/SectionWrapper";

import { Content } from "../../styles/container";
import { size } from "../../services/size.json";

const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { step } = useSelector((state) => state.pizzaReducer.pizza.size);

  const handleClick = (data) => {
    dispatch(addSize(data));
    dispatch(addPrice(data.price));
    history.push("/step3");
    return;
  };

  return (
    <Content>
      <SectionWrapper data={size} handleClick={handleClick} step={step} />
    </Content>
  );
};

export default Step2;
