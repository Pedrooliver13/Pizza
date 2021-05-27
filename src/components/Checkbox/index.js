import * as Styled from './style';

const Checkbox = ({ checked, onClick, index }) => {
  return (
    <Styled.Wrapper onClick={onClick}>
      <input
        className={checked && 'checked'}
        type="checkbox"
        checked={checked === index}
        readOnly
      />
      <label> </label>
    </Styled.Wrapper>
  );
};

export default Checkbox;
