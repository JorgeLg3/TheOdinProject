import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ItemCard = (props) => {
  let navigate = useNavigate();
  
  return (
      <Card>
        <Subcard onClick={() => navigate(`/shop/${props.id}`)}>
          <ImgCard src={props.file} alt="item"></ImgCard>
          <Info>
            <h2>{props.name}</h2>
            <h2>{props.price}$</h2>
          </Info>
        </Subcard>
        <button onClick={() => props.addToCart(props.id, props.name, props.price)}>Add to Cart</button>
      </Card>
    );
  };

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 20px;
`;  

const Subcard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

const ImgCard = styled.img`
  height: 100%;
  width: 100%;
`;

export default ItemCard;