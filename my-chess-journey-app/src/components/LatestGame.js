import { useState, useEffect } from 'react';
import { findLatestGame } from "../services/gameOfTheDay"

export default function LatestGameDay(){
    const [latestGame, setLatestGame] = useState([]);

    useEffect(()=>{
        findLatestGame('bhandersonjr').then(setLatestGame);
    }, []);

    return(
        //TODO add loading turn functionality while the latest game is loading 
        <div>

            <img
                src= 'https://tile.loc.gov/storage-services/service/pnp/ppmsca/56500/56547r.jpg'
                alt= 'hand on a boris diplomat chess computer'
            />
            <h2>My Latest Game</h2>
            <h2>{latestGame.white} vs {latestGame.black}</h2>
            <h3>{(latestGame.winner === "Game Drawn") ? "Game Drawn" : "Winner: " + latestGame.winner}</h3>
            {latestGame.moves}
            
        </div>

    )
    
}