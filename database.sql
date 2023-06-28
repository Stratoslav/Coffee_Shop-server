create TABLE coffee(
    id SERIAL PRIMARY KEY,
    coffee_name VARCHAR(255),
   description VARCHAR(255),
   image VARCHAR(255),
   ingredients TEXT,
   price INT,
   count INT
);

create TABLE order_coffee(
    id SERIAL PRIMARY KEY,
    address VARCHAR(255),
    date VARCHAR(255),
   email VARCHAR(255),
   name VARCHAR(255),
   coffee_name TEXT,
   count_coffee INT,
   phone INT,
  price INT,
  time VARCHAR(255)
);
