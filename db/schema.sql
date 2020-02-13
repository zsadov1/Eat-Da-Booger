USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(30) NOT NULL,
	devoured BOOLEAN NOT NULL default false,
    PRIMARY KEY (id)
);