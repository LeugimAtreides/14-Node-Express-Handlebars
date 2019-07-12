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


use burger_db;

INSERT INTO burgers (burger_name) VALUES ('Cheese Burger');

INSERT INTO burgers (burger_name) VALUES ('Veggie Burger');

INSERT INTO burgers (burger_name, devoured) VALUES ('Ham Burger', true);

INSERT INTO burgers (burger_name)  VALUES ('Double Quarter-pounder with Cheese');

INSERT INTO burgers (burger_name, devoured) VALUES ('The Baconator', true);

INSERT INTO burgers (burger_name, devoured) VALUES ('Conflicted Burger', true);

select * FROM burgers;