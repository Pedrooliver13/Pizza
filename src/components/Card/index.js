import Checkbox from "../Checkbox";
import * as Styled from "./style";

const Card = ({ data, index, state, setState }) => {
  return (
    <Styled.Wrapper>
      <Styled.Image src={data?.image} alt={data.name} />

      <Styled.Description>
        <div className="text-block">
          <h1 className="title">{data.name}</h1>
          <div className="description">{data.description}</div>
        </div>

        <div>R$ {data.price}</div>
      </Styled.Description>

      <Styled.WrapperCheckbox>
        <Checkbox
          index={index}
          checked={state?.id}
          onClick={() => setState({ ...data, id: index })}
        />
      </Styled.WrapperCheckbox>
    </Styled.Wrapper>
  );
};

export default Card;
