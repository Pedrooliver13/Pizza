import { useDispatch } from "react-redux";

import Checkbox from "../Checkbox";
import { formatBRL } from '../../utils/index';
import { pizzaSelected } from '../../store/modules/pizza/actions';

import * as Styled from "./style";

const Card = ({ data, index, selected }) => {
  const dispatch = useDispatch();
  
  return (
    <Styled.Wrapper>
      <Styled.Image src={data?.image} alt={data.name} />

      <Styled.Description>
        <div className="text-block">
          <h1 className="title">{data.name}</h1>
          <div className="description">{data.description}</div>
        </div>

        <div className="price">{formatBRL(data.price)}</div>
      </Styled.Description>

      <Styled.WrapperCheckbox>
        <Checkbox
          index={index}
          checked={selected?.id}
          onClick={() => dispatch(pizzaSelected({ ...data, id: index }))}
        />
      </Styled.WrapperCheckbox>
    </Styled.Wrapper>
  );
};

export default Card;
