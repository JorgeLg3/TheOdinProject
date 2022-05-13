import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ItemCard = (props) => {
  let navigate = useNavigate();
  
  return (
      <Card>
        <Subcard>
          <ImgCard src={props.file} alt="item"  onClick={() => navigate(`/shop/${props.id}`)}></ImgCard>
          <Info>
            <h2>{props.name}</h2>
            <h2>{props.price}$</h2>
            <span onClick={() => props.addToCart(props.id, props.name, props.price)} className='material-icons'>add_shopping_cart</span>
          </Info>
        </Subcard>
        
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

  > span {
    background-color: #232;
    color: white;
    padding: 0.2rem;
    border-radius: 3px;
    cursor:pointer;

    :hover{
      background-color: #343;
    }
  }
`;

const ImgCard = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

export default ItemCard;