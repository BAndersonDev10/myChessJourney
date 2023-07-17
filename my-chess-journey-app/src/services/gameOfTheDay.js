const CHESSCOM_API_URL = 'https://api.chess.com/pub/player';

export async function findLatestGame(id){
    const todays_date = new Date();
    const todays_year = todays_date.getFullYear();
    let todays_month = todays_date.getUTCMonth() + 1;
    if(todays_month<10){
        todays_month = '0'+ todays_month;
    }

    // # Description: Array of Live and Daily Chess games that a player has finished.
    // # URL pattern: https://api.chess.com/pub/player/{username}/games/{YYYY}/{MM}
    const response = await fetch(`${CHESSCOM_API_URL}/${id}/games/${todays_year}/${todays_month}`);

    if(response.ok){
        let json = await response.json();
        json = json.games[json.games.length-1];
        json = getReadableGameString(json);
        return Promise.resolve(json);
    } else{
        return Promise.reject();
    }
}

function getReadableGameString(gameObject){

    let gameTemplate = {};
    
    //had to figure out how to get pgn into a readable format 

    let moves = gameObject.pgn;
    const indexOfFirstMove = moves.indexOf('1. ');
    moves = moves.slice(indexOfFirstMove);
    let done = false;
    while(!done){
        let indexOfLeftCurly = moves.indexOf('{');
        let indexOfRightCurly = moves.indexOf('}');
        let leftSideOfString = moves.slice(0,indexOfLeftCurly);
        let rightSideOfString = moves.slice(indexOfRightCurly+1, moves.length);
        moves = leftSideOfString + rightSideOfString;
        if(moves.indexOf('{') === -1 || moves.indexOf('}') === -1){
            done = true;
        }

        
    }
    let doneForReal = false;
    while(!doneForReal){
        //now need to clean up all the extra #... in the mix 
        let indexOfEllipses = moves.indexOf('...');
        let leftSideOfEllipses = moves.slice(0, indexOfEllipses-1);
        let rightSideOfEllipses = moves.slice(indexOfEllipses+4, moves.length);
        moves = leftSideOfEllipses +rightSideOfEllipses
        if(moves.indexOf('...') === -1){
            doneForReal = true;
        }

    }

    gameTemplate.moves = moves.trim();
    gameTemplate.white = gameObject.white.username;
    gameTemplate.black = gameObject.black.username;
    let result = moves.slice(-4, -1);
    
    switch(result){
        case '0-1':
            gameTemplate.winner = gameObject.black.username;
            break;
        case '1-0':
            gameTemplate.winner = gameObject.white.username;
            break;
        default:
            gameTemplate.winner = "Game Drawn";
    }
    return gameTemplate;


}


