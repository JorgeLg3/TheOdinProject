import React, {useEffect, useState} from 'react';
import scoreBackground from '../assets/796524.png';

export function Score(props){

    return(
        <div className='scoreContainer'> 
                <img className='scoreImg' src={scoreBackground} alt={'score'} />
                <div className='score'> {props.score}/{props.range}</div>
                <div className='bestScore'> BEST: {props.bestScore}</div>
        </div>
        
    );
}