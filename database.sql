create TABLE coffee(
    id SERIAL PRIMARY KEY,
    coffee_name VARCHAR(255),
   description VARCHAR(255),
   image VARCHAR(255),
   ingredients TEXT,
   price INT,
   count INT
);

create TABLE coffees(
    id SERIAL PRIMARY KEY,
    coffee_name VARCHAR(255),
   description VARCHAR(255),
   image VARCHAR(255),
   ingredients TEXT,
   price INT,
   count INT
);