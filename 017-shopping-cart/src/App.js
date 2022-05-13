import React, {useState, useEffect} from 'react';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ErrorPage from "./components/ErrorPage";
import ItemPage from "./components/ItemPage";
import Cart from './components/Cart';
import items from "./items";
import './index.css';

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  //addElement to Cart
  function addElementToCart(newItem, name, price, amount=1){
    const index = cart.findIndex(x => x.id === newItem)
    if(index === -1){
      const addItem = {
        id : newItem,
        name : name,
        price: price,
        amount : amount
      }
      setCart(cart.concat(addItem))
    } else{
      let newCart = [...cart];
      newCart[index].amount += amount;
      setCart(newCart);
    }
  }

  useEffect(() =>{
    console.log(cart);
  }, [cart]);
  
  return (
    <HashRouter basename="/">
        <div className="header">
        <nav>
            <Link to="/"> Home </Link>
            <Link to="/shop"> Shop </Link>
        </nav>
        <button onClick={() => setShowCart(!showCart)}>Cart</button>
        <Cart show={showCart} cartItems={cart}/>
        </div>
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