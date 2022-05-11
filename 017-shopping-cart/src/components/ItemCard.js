import { useNavigate } from 'react-router-dom';

const ItemCard = (props) => {
  let navigate = useNavigate();
  
  return (
      <div onClick={() => navigate(`/shop/${props.id}`)}>
        <img src={`imgs/${props.file}`} alt="item"></img>
        <h2>{props.name}</h2>
        <h2>{props.price}$</h2>
      </div>
    );
  };
  
  export default ItemCard;