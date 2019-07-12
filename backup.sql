
DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE IF NOT EXISTS burger_db;

USE burger_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id int not null auto_increment,
    burger_name varchar(250) not null ,
    devoured BOOL DEFAULT false,
    primary key (id)    
);