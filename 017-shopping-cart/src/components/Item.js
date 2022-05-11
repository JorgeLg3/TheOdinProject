
const Item = (props) => {
    return (
      <div>
        <img src={`imgs/${props.file}`} alt="item"></img>
        <h2>{props.name}</h2>
        <h2>{props.price}$</h2>
      </div>
    );
  };
  
  export default Item;