import React, {useEffect, useState} from 'react';
import pikachu from '../assets/example.png';

export function Card(props) {
    
    const [pokemon, setPokemon] = useState(pikachu);
    const [name, setName] = useState('pikachu');
    const [id, setID] = useState(25);

    function getShinyChance(rate){
        var randomNumber = Math.random() * rate;
        if(randomNumber <= 1){
            return true;
        } else {
            return false;
        }
    }

    async function getPokemon(n){
        try{
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`, {
                mode: 'cors'
            });
            let catData = await response.json();
            //console.log(catData);
            return catData;
        } catch (error){
            console.log(error);
        }
    }

    async function storePokemon(){
        //setPokemon(pokemonData.sprites.versions.generation-iii.emerald.front_default);
        //setPokemon(pokemonData.sprites.front_default);
        let data = await getPokemon(props.pokemonID);
        if(getShinyChance(props.shinyRate)){
            setPokemon(data.sprites.front_shiny);
            console.log('shiny');
        } else{
            setPokemon(data.sprites.front_default);
        }
        setName(data.name)
        setID(data.id)
    }

    useEffect(() => {
        storePokemon();
    },[props.pokemonID]);

    return (
        <div>
            <div className='imageContainer'>
                <img src={pokemon} alt={id} onClick={props.onClickHandle}/>
            </div>
            <div>
                {name.toUpperCase()}
            </div>
        </div>
    );
}