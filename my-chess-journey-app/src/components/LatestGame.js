import { useState, useEffect } from 'react';
import { findLatestGame } from "../services/gameOfTheDay"

export default function LatestGameDay(){
    const [latestGame, setLatestGame] = useState([]);

    useEffect(()=>{
        findLatestGame('bhandersonjr').then(setLatestGame);
    }, []);

    return(
        
        <div>
            <h2>My Latest Game</h2>
            <h2>{latestGame.white} vs {latestGame.black}</h2>
            <h3>{(latestGame.winner === "Game Drawn") ? "Game Drawn" : "Winner: " + latestGame.winner}</h3>
            {latestGame.moves}
            
        </div>

    )
    
}