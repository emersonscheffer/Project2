DROP DATABASE IF EXISTS warehouse_db;
CREATE DATABASE warehouse_db;
USE warehouse_db;

CREATE TABLE restaurants (
  id INT NOT NULL AUTO_INCREMENT,
  rest_name VARCHAR(100) NOT NULL,
  food_type VARCHAR(100) NOT NULL,
  website_url VARCHAR(100) NULL,
  tel_number INT NULL,
  rest_description VARCHAR(500) NOT NULL,
  slot_num INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE menu (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  item_description VARCHAR(500) NULL,
  rest_name VARCHAR(100) NOT NULL,
  item_pic VARCHAR(100) NULL,
  PRIMARY KEY (id)
);


SELECT * FROM restaurants;

SELECT * FROM menu;