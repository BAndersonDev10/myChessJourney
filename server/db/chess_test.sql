DROP DATABASE IF EXISTS mychessjourney_test;
CREATE DATABASE mychessjourney_test;
use mychessjourney_test;




-- drop tables if they exist

DROP TABLE IF EXISTS game;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS post;

-- now create the tables

CREATE TABLE game(
    gameid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    playerone VARCHAR(255),
    playertwo VARCHAR(255),
    moves VARCHAR(510) NOT NULL,
    winner INT NOT NULL, 
    gamedate DATE NOT NULL,
    gamelink VARCHAR(510) NOT NULL
);

CREATE TABLE appuser(
    userid INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    passwordhash VARCHAR(255) NOT NULL
);

CREATE TABLE role(
    approleid INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE userrole(
    userid INT NOT NULL,
    roleid INT NOT NULL,
    CONSTRAINT pkappuserrole
        PRIMARY KEY (userid, roleid),
    CONSTRAINT fkuserid
        FOREIGN KEY (userid)
        REFERENCES appuser(userid),
    CONSTRAINT fkroleid
        FOREIGN KEY (roleid)
        REFERENCES role(approleid)
);

CREATE TABLE post(
    postid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    created DATETIME,
    content TEXT
);


-- insert into the db what we need to function

INSERT INTO role (`name`) VALUES
    ('USER'),
    ('ADMIN');
