import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ItemCard = (props) => {
  let navigate = useNavigate();
  
  return (
      <Card>
        <Subcard>
          <ImgCard src={props.file} alt="item"  onClick={() => navigate(`/shop/${props.id}`)}></ImgCard>
          <Info>
            <Text>{props.name}</Text>
            <Text>{props.price}$</Text>
          </Info>
        </Subcard>
        <AddButton onClick={() => props.addToCart(props.id, props.name, props.price)} className='material-icons'>ADD TO CART</AddButton>
        
      </Card>
    );
  };

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto Condensed', sans-serif;
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
  width: 100%;
  font-size: 1rem;
  box-sizing: border-box;
  padding: 0.4rem 1.5rem 1rem 0.5rem;
`;

const Text = styled.div`
  font-size: 1.4rem;
`;

const ImgCard = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

const AddButton = styled.button`
  align-self: stretch;
  background-color: #010;
  border: none;
  border-radius: 2px;
  color: white;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1rem;
  padding: 0.5rem;
  cursor: pointer;

  :hover{
    background-color: #121;
  }
`;

export default ItemCard;