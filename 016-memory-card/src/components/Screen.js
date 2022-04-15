import React, {useState, useEffect} from 'react';
import { Card } from './Card';

export function Screen() {
    //range of the pokedex
    const [first, setFirst] = useState(1);
    const [last, setLast] = useState(151);
    const [freePokemons, setFreePokemons] = useState(range(first,last));
    const [capturedPokemons, setCapturedPokemons] = useState([]);
    const [pokemon1, setPokemon1] = useState(randomItem(freePokemons));
    const [pokemon2, setPokemon2] = useState(randomItem(freePokemons));
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [shinyRate, setShinyRate] = useState(4096);  
    
    //utility functions
    function range(start, end) {
      return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
  
    function randomItem(array){
      var item = array[Math.floor(Math.random()*array.length)];
      return item;
    }
  
    //main logic of game
    const playRound = (e) => {
      const choice = Number(e.target.alt);
      if(capturedPokemons.includes(choice)){
        console.log('Already captured, you lost!');
        initializeGame();
      } else {
        console.log('New pokemon captured!');
        setScore(score +1);
        setCapturedPokemons(capturedPokemons.concat(choice));
        setFreePokemons(freePokemons.filter(function(pokemon) {
          return pokemon !== choice
        }));
      }
    }

    useEffect(() => {
      if(score === (last-first+1)){
        console.log('You Win!');
        initializeGame();
      } else if(score !== 0){
        randomDisplay();
      } else {
        defaultDisplay();
      }
    }, [score])
    
    //update displays
    function randomDisplay(){
      //random de posiiton of the free/capture pokemon
      const random_boolean = Math.random() < 0.5;
      if(random_boolean){
        setPokemon1(randomItem(freePokemons));
        setPokemon2(randomItem(capturedPokemons));
      } else {
        setPokemon2(randomItem(freePokemons));
        setPokemon1(randomItem(capturedPokemons));
      }
    }
    
    function defaultDisplay(){
      setPokemon1(randomItem(freePokemons));
      setPokemon2(randomItem(freePokemons));
    }
  
    function initializeGame(){
        localStorage.setItem('localScore', JSON.stringify(bestScore));
        if(score>bestScore){
        setBestScore(score);
      }
      setScore(0);
      setFreePokemons(range(first,last));
      setCapturedPokemons([]);
    }

    //on load component load local storage
    useEffect(()=>{
        if(localStorage.getItem('localScore')){
            const localScore = JSON.parse(localStorage.getItem('localScore'));
            setBestScore(Number(localScore));
        }
    }, []);
  
    return (
      <div className="screen">
        <Card className = "card" pokemonID={pokemon1} onClickHandle={playRound} shinyRate={shinyRate}/>
        <Card className = "card"pokemonID={pokemon2} onClickHandle={playRound} shinyRate={shinyRate}/>
        <div> Score {score}/{last-first+1}</div>
        <div> Best score: {bestScore}</div>
      </div>
    );
  }