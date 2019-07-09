
use burger_db;

INSERT INTO burgers (burger_name) VALUES ('Cheese Burger');

INSERT INTO burgers (burger_name) VALUES ('Veggie Burger');

INSERT INTO burgers (burger_name, devoured) VALUES ('Ham Burger', true);

INSERT INTO burgers (burger_name)  VALUES ('Double Quarter-pounder with Cheese');

INSERT INTO burgers (burger_name, devoured) VALUES ('The Baconator', true);

INSERT INTO burgers (burger_name, devoured) VALUES ('Conflicted Burger', true);

select * FROM burgers;