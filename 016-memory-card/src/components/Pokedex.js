import React, {useEffect, useState} from 'react';
import pokedexImg from '../assets/pokedex.jpg';

export function Pokedex(props){

    return(
        <div className='pokedex-selector'>
            <img className='pokedexImg' src={pokedexImg} alt={'pokedex'}/>
            <div>Kanto</div>
        </div>
        
    );
}