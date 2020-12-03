-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE shopping_list (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL, 
	quantity FLOAT,
    unit VARCHAR(20),
	purchased BOOLEAN DEFAULT 'false'
); 

/*Test Data*/
INSERT INTO shopping_list (name, quantity, unit)
VALUES ('grapes', '2', 'lb’);

INSERT INTO shopping_list (name, quantity, unit)
VALUES ('cheese’', '1', 'lb');