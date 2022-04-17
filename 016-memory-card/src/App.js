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
      <div className='footer'>By JorgeLg3 - code <a href="https://github.com/JorgeLg3/TheOdinProject/tree/main/016-memory-card">here!</a></div>
    </div>
  );
}

export default App;
