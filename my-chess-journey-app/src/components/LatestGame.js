import { Chessboard } from "react-chessboard";
import { useState, useEffect } from 'react';
import { findLatestGame } from "../services/gameOfTheDay"

export default function LatestGameDay(){
    const [latestGame, setLatestGame] = useState([]);

    useEffect(()=>{
        findLatestGame('bhandersonjr').then(setLatestGame);
    }, []);

    return(
        //TODO add loading turn functionality while the latest game is loading 
        <>


            <h2>My Latest Game</h2>
            <h2>{latestGame.white} vs {latestGame.black}</h2>
            <h3>{(latestGame.winner === "Game Drawn") ? "Game Drawn" : "Winner: " + latestGame.winner}</h3>
            {latestGame.moves}

            <div className="container d-flex justify-content-center">
                <Chessboard id="BasicBoard" boardWidth='400'/>
            </div>
            

        </>

    )
    
}