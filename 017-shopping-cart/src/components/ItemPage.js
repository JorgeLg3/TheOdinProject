import items from "../items";
import {useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const ItemPage = (props) => {
    const {id} =useParams();
    const item = items.find(x => x.id === id);
    
    let navigate = useNavigate();

    return (
      <div>
        <Img src={item.image} alt={item.name}></Img>
        <h2>{item.name}</h2>
        <h2>{item.price}$</h2>
        <p>{item.description}</p>
        <button onClick={() => props.addToCart(id, item.name, item.price)}>Buy!</button>
        <button onClick={() => {navigate('/shop')}}>Back Market</button>
      </div>
    );
  };
  
  const Img = styled.img`
    height: 90vh;
    width: 60vh;
  `;

  export default ItemPage;