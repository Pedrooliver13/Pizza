import * as Styled from "./style";

const Button = (props) => {
  return <Styled.Wrapper {...props}>{props.children}</Styled.Wrapper>;
};

export default Button;
