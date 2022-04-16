import React, {useState, useEffect} from 'react';
import {Screen} from './components/Screen';
import './styles/app.css';
import titleimg from './assets/pokemon.png';

function App() {
  

  return (
    <div className="App">
      <div className='title'>
        <img className='titleImg' src={titleimg} alt={'title'}/>
        <div className='titleTxt'>Memory Card Game!</div>
      </div>
      <Screen />
    </div>
  );
}

export default App;
