package learn.myChess.data.mappers;

import learn.myChess.model.ChessGame;

import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class GameMapper implements RowMapper<ChessGame> {

    @Override
    public ChessGame mapRow(ResultSet resultSet, int rowNum) throws SQLException {
        ChessGame chessGame = new ChessGame();
        chessGame.setGameId(resultSet.getInt("gameid"));
        chessGame.setPlayerOneName(resultSet.getString("playerone"));
        chessGame.setPlayerTwoName(resultSet.getString("playertwo"));
        chessGame.setMoves(resultSet.getString("moves"));
        chessGame.setWinner(resultSet.getInt("winner"));
        return chessGame;
    }
}
