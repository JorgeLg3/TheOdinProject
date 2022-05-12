import items from "../items";
import {useParams, useNavigate} from 'react-router-dom';

const ItemPage = (props) => {
    const {id} =useParams();
    const item = items.find(x => x.id === id);
    
    let navigate = useNavigate();

    return (
      <div>
        <img src={`imgs/${item.file}`} alt={item.name}></img>
        <h2>{item.name}</h2>
        <h2>{item.price}$</h2>
        <p>{item.description}</p>
        <button onClick={() => props.addToCart(id, item.name, item.price)}>Buy!</button>
        <button onClick={() => {navigate('/shop')}}>Back Market</button>
      </div>
    );
  };
  
  export default ItemPage;