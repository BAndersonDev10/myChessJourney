package learn.myChess.data;


import learn.myChess.data.mappers.GameMapper;
import learn.myChess.model.ChessGame;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class GameJdbcTemplateRepository {

    private final JdbcTemplate jdbcTemplate;

    public GameJdbcTemplateRepository(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<ChessGame> findByPlayer(String playerId){
        final String sql = "SELECT gameid, playerone, playertwo, moves, result "+
                "FROM game WHERE playerone = ? OR playertwo = ?";

        List<ChessGame> result = jdbcTemplate.query(sql, new GameMapper(), playerId);

        return result;
    }

    public ChessGame add(ChessGame chessGame){

        //sql String TODO

        //keyholder stuff

        return chessGame;
    }

    public boolean deleteById(int gameId){
        //TODO
        return true;
    }





}
