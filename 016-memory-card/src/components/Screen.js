import React, {useState, useEffect} from 'react';
import { Card } from './Card';
import { TextBox } from './TextBox';
import { Score } from './Score';
import { Pokedex } from './Pokedex';


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

    //check Win condition
    useEffect(() => {
      if(score === (last-first+1)){
        console.log('You Win!');
        initializeGame();
      } 
    }, [score]);

    //update displays
    useEffect(() => {
      if(score === 0){
        defaultDisplay();
      } else {
        randomDisplay();
      }
    }, [freePokemons]);
        
    //displays functions
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
        if(score>bestScore){
        setBestScore(score);
      }
      setFreePokemons(range(first,last));
      setCapturedPokemons([]);
      setScore(0);
    }

    //on load component load local storage
    useEffect(()=>{
        if(localStorage.getItem('localScore')){
            const localScore = JSON.parse(localStorage.getItem('localScore'));
            setBestScore(Number(localScore));
        }
    }, []);

    //on update maxScore store it
    useEffect(() => {
      localStorage.setItem('localScore', JSON.stringify(bestScore));
    }, [bestScore]);

    //update range
    function handleFirst(newValue){
      setFirst(newValue);
    }

    function handleLast(newValue){
      setLast(newValue);
    }

    useEffect(()=> {
      initializeGame();
    },[last]);
  
    return (
      <div className="screen">
        <div className='top'>
            <Score score={score} bestScore={bestScore} range={last-first+1}/>
            <Pokedex handleLast={handleLast} handleFirst={handleFirst}/>
        </div>
        <div className='pokemons'>
            <Card pokemonID={pokemon1} onClickHandle={playRound} shinyRate={shinyRate}/>
            <Card pokemonID={pokemon2} onClickHandle={playRound} shinyRate={shinyRate}/>
        </div>
        <TextBox/>
      </div>
    );
  }