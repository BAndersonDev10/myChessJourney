import { useState, useEffect } from 'react';
import { findLatestGame } from "../services/gameOfTheDay"

export default function GameOfTheDay(){
    const [gameOfDay, setGameOfDay] = useState([]);

    useEffect(()=>{
        findLatestGame('bhandersonjr').then(setGameOfDay);
    }, []);

    return(
        
        <div>
            <h2>Hello From Game of the day</h2>
            <h2>{gameOfDay.white} vs {gameOfDay.black}</h2>
            {gameOfDay.moves}
        </div>

    )
    
}