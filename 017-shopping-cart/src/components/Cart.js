import styled from 'styled-components';
import React, {useState, useEffect} from 'react';

const Cart = (props) => {
    const [total, setTotal] = useState(0);

    useEffect(() =>{
        const subtotal = props.cartItems.reduce((sum, item)=> {
            return sum + (item.price*item.amount);
        }, 0);
        setTotal(Math.round(subtotal * 100) / 100);
      }, [props.cartItems]);

    return (
      <CartDisplay show={props.show}>
        <h1>Cart List</h1>
        {props.cartItems.map((item) => <p>{item.name} {item.price}$ x{item.amount}</p>)}
        <p>Amount: {total}$</p>
        {(props.cartItems.lenght > 0) ? (<p>Nothing</p>) : (<p>Your cart is empty {props.cartItems.length > 0}</p>)}
      </CartDisplay>
    );
  };
  
const CartDisplay = styled.div`
  opacity: ${(props) => (props.show === true ? '1' : '0')};
  position: fixed;
  background-color: gray;
`

export default Cart;