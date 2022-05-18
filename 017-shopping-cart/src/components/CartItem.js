import styled from 'styled-components';

const CartItem = (props) => {
    return (
      <Item>
        <div>{props.name}</div>
        <div>{props.price}$</div>
        <div>x{props.number}</div>
        <span className="material-icons" onClick={() => props.deleteItem(props.id)}>delete_outline</span>
      </Item>
    );
  };
  
  export default CartItem;

  const Item = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 0.2fr;
    padding: 0.4rem 1rem;
    font-family: 'Roboto Condensed', sans-serif;
    justify-content: space-between;
    font-family: 1rem;

    >span{
      font-size: 18px;
      cursor: pointer;
    }
  `;