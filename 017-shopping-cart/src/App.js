import React, {useState, useEffect} from 'react';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';

import Home from "./components/Home";
import Shop from "./components/Shop";
import ErrorPage from "./components/ErrorPage";
import ItemPage from "./components/ItemPage";
import Cart from './components/Cart';
import Header from './components/Header';
import items from "./items";
import './index.css';

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [nItems, setNItems] = useState(0);

  //addElement to Cart
  function addElementToCart(newItem, name, price, number=1){
    const index = cart.findIndex(x => x.id === newItem)
    if(index === -1){
      const addItem = {
        id : newItem,
        name : name,
        price: price,
        number : Number(number),
      }
      setCart(cart.concat(addItem))
    } else{
      let newCart = [...cart];
      newCart[index].number += Number(number);
      setCart(newCart);
    }
  }

  function deleteCartItem(id){
    setCart(cart.filter((item) => item.id !== id));
  }

  useEffect(() =>{
    setNItems(cart.reduce((sum, item)=> {
      return sum + (item.number);
    }, 0)
    );
    //console.log(cart);
  }, [cart]);

  function changeCartVisibility(){
    setShowCart(!showCart)
  }
  
  return (
    <HashRouter basename="/">
        <Header showEvent={changeCartVisibility} show={showCart} nItems={nItems}/>
        <Cart show={showCart} cartItems={cart} nItems={nItems} deleteItem={deleteCartItem}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop items={items} addToCart={addElementToCart}/>} />
        <Route path="/shop/:id" element={<ItemPage addToCart={addElementToCart}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};



export default App;