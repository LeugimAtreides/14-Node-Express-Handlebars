
CREATE TABLE burgers (
    id int not null auto_increment,
    burger_name varchar(250) not null ,
    devoured BOOL DEFAULT false,
    primary key (id)    
);

