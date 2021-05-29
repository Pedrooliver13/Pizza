import { useSelector } from 'react-redux';

import * as Styled from "./style";
import { Container } from "../../styles/container";

const Header = () => {
  const pointState = useSelector(state => state.pointsReducer.points);
  
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Content>
          <Styled.Logo>
            <Styled.Image
              src="https://img.icons8.com/officel/344/pizza.png"
              alt="Fatia de pizza"
            />

            <div className="title">
              PizzaStoom
              <span>é pizza, sim.</span>
            </div>
          </Styled.Logo>

          <Styled.Point>
            <Styled.Image
              src="https://image.flaticon.com/icons/png/512/845/845665.png"
              alt="Icone de Moeda"
            />
            
            <h3 className="title">
              StoomPoints
              <div>
                <span>{pointState}</span> Points
              </div>
            </h3>
          </Styled.Point>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};

export default Header;
