import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import SectionWrapper from "../../components/SectionWrapper";
import { addPrice, addSize, pizzaSelected } from "../../store/modules/pizza/actions";

import { size } from "../../services/size.json";

const Size = ({ state, setState }) => {
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
    dispatch(addSize(data));
    dispatch(addPrice(data.price));
    return;
  };

  return (
    <SectionWrapper
      data={size}
      step={state}
      message={message}
      handleClick={handleClick}
    />
  );
};

export default Size;
