import { useDispatch } from 'react-redux';
import { FiCheck } from "react-icons/fi";

import Button from "../Button";

import * as Styled from "./style";
import BadgeImge from "../../assets/badge.png";
import { addPoint } from '../../store/modules/points/actions';

const SectionMain = () => {
  const dispatch = useDispatch();
  
  function handleClick() {
    dispatch(addPoint(50));
  }
  
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <h1 className="title">Pizza do dia:</h1>

        <div className="accumulate-points">
          <div className="bg-badge">
            <img src={BadgeImge} alt="background badge" />
          </div>
          <p>
            <span>50</span> <br /> pontos
          </p>
        </div>

        <Styled.Card>
          <Styled.Image
            src="https://i.imgur.com/REcYtUX.png"
            alt="Foto de uma Pizza"
          />

          <Styled.Description>
            <div className="text-block">
              <h1 className="title">Nova-iorquina</h1>
              <div className="description">
                <span>Massa:</span>
                Napolitana
                <span>Ingredientes:</span>
                mussarela, peito de peru, palmito, parmesão, orégano.{" "}
              </div>
            </div>

            <Styled.Buy>
              <div className="price">R$ 5,00</div>
              
              <Button onClick={handleClick}>
                quero! <FiCheck size={24} />
              </Button>
            </Styled.Buy>
          </Styled.Description>
        </Styled.Card>
      </Styled.Content>
      <Styled.Info>
        ganhe pontos ao concluir o seu pedido <span>*</span>
      </Styled.Info>
    </Styled.Wrapper>
  );
};

export default SectionMain;
