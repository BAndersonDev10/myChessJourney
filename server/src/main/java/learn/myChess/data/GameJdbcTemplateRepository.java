package learn.myChess.data;


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
        //add sql string TODO

        List<ChessGame> result = null;
        //add list

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
