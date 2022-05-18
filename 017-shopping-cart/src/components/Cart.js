import styled from 'styled-components';
import React, {useState, useEffect} from 'react';

import CartItem from './CartItem';

const Cart = (props) => {
    const [total, setTotal] = useState(0);

    useEffect(() =>{
        const subtotal = props.cartItems.reduce((sum, item)=> {
            return sum + (item.price*item.number);
        }, 0);
        setTotal(Math.round(subtotal * 100) / 100);
      }, [props.cartItems]);

    return (
      <CartDisplay show={props.show}>
        
        <CartTitle>YOUR SHOPPING BAG</CartTitle>
        <CartMain>
            {props.nItems === 0 &&
              <p>Your shopping cart is empty!</p>
            }
            {props.cartItems.map((item) => <CartItem name={item.name} price={item.price} number={item.number} id={item.id} deleteItem={props.deleteItem}></CartItem>)}
        </CartMain>
        
        <CartFooter>
            <Line></Line>
            <Total>TOTAL: {total}$</Total>
            <PaymentButton>CHECKOUT</PaymentButton>
        </CartFooter>
        
      </CartDisplay>
    );
  };
  
const CartDisplay = styled.div`
  width: min(400px, 80vw);
  position: fixed;
  background-color: rgba(255, 255, 255, 0.4);
  right: ${(props) => (props.show === true ? '0' : '-100%')};
  height: calc(100vh - 3rem);
  transition: 0.5s;
  backdrop-filter: blur(10px);
  font-family: 'Roboto Condensed', sans-serif;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`
const CartTitle = styled.div`
  font-size: 1.6rem;
  margin-bottom: 2rem;
  font-family: sans-serif;
`;

const CartMain = styled.div`
  flex: 1;
`;

const CartFooter = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: min(160px, 30vw);
  height: 1px;
  border-bottom: 2px solid black;
  margin: 1rem;
  align-text: right;
  align-self: flex-end;
`
const Total = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  align-self: flex-end;
`;

const PaymentButton = styled.button`
  align-self: center;
  margin-top: 1.5rem;
  border: none;
  background-color: #121;
  color: #fff;
  padding: 0.5rem 3rem;
  border-radius: 2px;
  cursor: pointer;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.9rem;

  &:hover{
      background-color: #232;
  }
`;

export default Cart;