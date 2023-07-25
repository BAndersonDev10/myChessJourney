-- drop tables if they exist 

DROP TABLE IF EXISTS game
DROP TABLE IF EXISTS user 
DROP TABLE IF EXISTS post 

-- now create the tables 

CREATE TABLE game(
    'gameid' INT NOT NULL AUTO_INCREMENT, 
    'playerone' VARCHAR(255), 
    'playertwo' VARCHAR(255),
    PRIMARY KEY ('gameid')
);

CREATE TABLE user(
    'userid' INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY ('userid')
);

CREATE TABLE post(
    'postid' INT NOT NULL AUTO_INCREMENT, 
    'title' VARCHAR(255), 
    'created' DATETIME, 
    'content' TEXT
);










