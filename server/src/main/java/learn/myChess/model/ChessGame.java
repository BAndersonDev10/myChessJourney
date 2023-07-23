package learn.myChess.model;

import java.util.Objects;

public class ChessGame {

    private int gameId;
    private String playerOneName;
    private String playerTwoName;
    //decided on a string not list for this because the data from chess.com comes as a string and we don't really care about individual moves;
    private String moves;
    // 0 for placeholder. 1 for white wins 2 for black wins 3 for draw
    private int winner;

    public ChessGame(){};

    public ChessGame(int gameId, String playerOneName, String playerTwoName, String moves, int winner) {
        this.gameId = gameId;
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.moves = moves;
        this.winner = winner;
    }

    public int getGameId() {
        return gameId;
    }

    public void setGameId(int gameId) {
        this.gameId = gameId;
    }

    public String getPlayerOneName() {
        return playerOneName;
    }

    public void setPlayerOneName(String playerOneName) {
        this.playerOneName = playerOneName;
    }

    public String getPlayerTwoName() {
        return playerTwoName;
    }

    public void setPlayerTwoName(String playerTwoName) {
        this.playerTwoName = playerTwoName;
    }

    public String getMoves() {
        return moves;
    }

    public void setMoves(String moves) {
        this.moves = moves;
    }

    public int getWinner() {
        return winner;
    }

    public void setWinner(int winner) {
        this.winner = winner;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ChessGame chessGame = (ChessGame) o;
        return gameId == chessGame.gameId && winner == chessGame.winner && Objects.equals(playerOneName, chessGame.playerOneName) && Objects.equals(playerTwoName, chessGame.playerTwoName) && Objects.equals(moves, chessGame.moves);
    }

    @Override
    public int hashCode() {
        return Objects.hash(gameId, playerOneName, playerTwoName, moves, winner);
    }


}
