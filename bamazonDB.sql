-- Drops the bamazon database if it exists already --
DROP DATABASE IF EXISTS bamazonDB;

-- Creates the bamazon database --
CREATE DATABASE bamazonDB;

-- Make it so that all of the following code will affect bamazonDB --
USE bamazonDB;

-- Create table called 'products' --
CREATE TABLE products(
    -- Item_id (unique id for each product) --
    item_id INT NOT NULL primary key AUTO_INCREMENT,
    -- product_name (Name of product) / this is a string column --
    product_name VARCHAR(30) NOT NULL,
    -- department_name --
    department_name VARCHAR(30) NOT NULL,
    -- price (cost to customer) --
    price INTEGER(11),
    -- stock_quantity (how much of the product is available in stores) --
    stock_quantity INTEGER(11)
    PRIMARY KEY (id)
);

--Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).--
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Converse sneakers", "Designer Shoes", 30, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Quilted jacket", "Women's Clothing", 300, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chloe sunglasses", "Accessories", 250, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cashmere striped sweater", "Petites", 70, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike hoodie", "Activewear", 40, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fleece blanket", "Bed and Bath", 40, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gingham dress shirt", "Men's Clothing", 19, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chanel fragrance", "Beauty", 105, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wine glasses", "Home Essentials", 30, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Diaper bag", "Kids and Baby", 19, 10);