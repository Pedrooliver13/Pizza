import * as Styled from './style';

const Checkbox = ({ checked, index, onClick }) => {
  return (
    <Styled.Wrapper onClick={onClick}>
      <input
        className={checked && 'checked'}
        type="checkbox"
        checked={checked === index}
        readOnly
      />
      <label></label>
    </Styled.Wrapper>
  );
};

export default Checkbox;
