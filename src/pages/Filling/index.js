import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  addFilling,
  addPrice,
  pizzaSelected,
} from "../../store/modules/pizza/actions";
import { addPoint } from "../../store/modules/points/actions";
import SectionWrapper from "../../components/SectionWrapper";

import { filling } from "../../services/filling.json";

const Filling = ({ state, setState }) => {
  const [message, setMessage] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pizzaSelected(null));
  }, [dispatch]);

  const handleClick = (data) => {
    if (!data) {
      return setMessage(true);
    }

    setState(state + 1);
    dispatch(addFilling(data));
    dispatch(addPrice(data.price));
    dispatch(addPoint(50));
    return;
  };

  return (
    <SectionWrapper
      data={filling}
      step={state}
      message={message}
      handleClick={handleClick}
    />
  );
};

export default Filling;
