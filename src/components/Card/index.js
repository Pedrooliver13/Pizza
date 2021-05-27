import Checkbox from "../Checkbox";
import * as Styled from "./style";

const Card = (props) => {
  return (
    <Styled.Wrapper>
      <Styled.Image src="https://i.imgur.com/REcYtUX.png" alt="" />

      <Styled.Description>
        <Styled.TextBlock>
          <h1 className="title">Nova-iorquina</h1>
          <div className="description">Massa pequena ideal para 1 pessoa</div>
        </Styled.TextBlock>

        <Styled.Price>R$ 5,00</Styled.Price>
      </Styled.Description>
      
      <Styled.WrapperCheckbox>
        <Checkbox />
      </Styled.WrapperCheckbox>
    </Styled.Wrapper>
  );
};

export default Card;
