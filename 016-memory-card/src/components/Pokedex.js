import React, {useEffect, useState} from 'react';
import pokedexImg from '../assets/pokedex.jpg';

export function Pokedex(props){
    const [pokedex, setPokedex] = useState('Gen i Dex');
    const [dropMenu, setDropMenu] = useState(false);

    function displayMenu() {
        setDropMenu(true);
    }

    function changePokedex(e){
        props.handleFirst(Number(e.target.dataset.first));
        props.handleLast(Number(e.target.dataset.last));
        setPokedex(e.target.dataset.name);
        setDropMenu(false);
    }

    return(
        <div className='pokedex-selector'>
            <img className='pokedexImg' src={pokedexImg} alt={'pokedex'}/>
            <button className="dropbtn" onClick={displayMenu}>{pokedex}</button>
            <div id="myDropdown" className={dropMenu ? 'show dropdown-content' : 'dropdown-content'}>
                <button className='pokedex-input' data-name='Gen i Dex' data-first='1' data-last='151'  onClick={changePokedex} >Gen i Dex</button>
                <button className='pokedex-input' data-name='Gen ii Dex' data-first='152' data-last='251'  onClick={changePokedex} >Gen ii Dex</button>
                <button className='pokedex-input' data-name='Gen iii Dex' data-first='252' data-last='385'  onClick={changePokedex} >Gen iii Dex</button>
                <button className='pokedex-input' data-name='National Dex' data-first='1' data-last='386'  onClick={changePokedex} >National Dex</button>
            </div>
        </div>
        
    );
}