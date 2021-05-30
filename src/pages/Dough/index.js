import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addDough, addPrice, pizzaSelected } from "../../store/modules/pizza/actions";
import SectionWrapper from "../../components/SectionWrapper";

import { dough } from "../../services/dough.json";

const Dough = ({ state, setState }) => {
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
    dispatch(addDough(data));
    dispatch(addPrice(data.price));

    return;
  };

  return (
    <SectionWrapper
      data={dough}
      step={state}
      message={message}
      handleClick={handleClick}
    />
  );
};

export default Dough;
