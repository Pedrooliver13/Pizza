import { useDispatch } from "react-redux";
import { FiCheck } from "react-icons/fi";

import Button from "../Button";
import { formatBRL } from "../../utils";
import { addPoint } from "../../store/modules/points/actions";

import * as Styled from "./style";
import BadgeImge from "../../assets/badge.png";

const SectionMain = ({ data, title, hiddenButton }) => {
  const dispatch = useDispatch();

  function handleClick(points) {
    dispatch(addPoint(points));
  }

  return (
    <main>
      <Styled.Wrapper>
        <h1 className="title">{title ? title : "Pizza do dia:"}</h1>

        <div className="accumulate-points">
          <div className="bg-badge">
            <img src={BadgeImge} alt="background badge" />
          </div>
          <p>
            <span>{data.points}</span> <br /> pontos
          </p>
        </div>

        <Styled.Card>
          <Styled.Image src={data?.image} alt="Foto de uma Pizza" />

          <Styled.Description>
            <div className="text-block">
              <h1 className="title">{data?.name}</h1>
              <div className="description">
                <span>Massa:</span>
                {data?.dough}
                <span>Ingredientes:</span>
                {data?.filling}
              </div>
            </div>

            <Styled.Buy>
              <div className="price">{formatBRL(data?.price)}</div>

              {!hiddenButton && (
                <Button onClick={() => handleClick(data.points)}>
                  quero! <FiCheck size={24} />
                </Button>
              )}
            </Styled.Buy>
          </Styled.Description>
        </Styled.Card>
      </Styled.Wrapper>
      {!hiddenButton && (
        <Styled.Info>
          ganhe pontos ao concluir o seu pedido <span>*</span>
        </Styled.Info>
      )}
    </main>
  );
};

export default SectionMain;
