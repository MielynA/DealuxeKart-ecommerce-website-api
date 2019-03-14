CREATE DATABASE DealuxeKart; 

\c DealuxeKart

CREATE TABLE Suppliers (
    supplierId SERIAL PRIMARY KEY, 
    customerId INT REFERENCES Customer(customerId) NOT NULL,
    fName VARCHAR (250) NOT NULL,
    LName VARCHAR (250) NULL,
    password VARCHAR NOT NULL,
    shopName VARCHAR (250) UNIQUE NOT NULL,
    phone int NULL,
    email VARCHAR (250) UNIQUE NOT NULL,
    adress VARCHAR (500) NOT NULL,
    city VARCHAR (250) NULL,
    state VARCHAR (250) NULL,
     country VARCHAR (250) NULL
);

CREATE TABLE Products (
    productId SERIAL PRIMARY KEY, 
    supplierId INT REFERENCES Suppliers(supplierId) NOT NULL,
    productName VARCHAR (250) NOT NULL,
    productDesc VARCHAR (250) NOT NULL, 
    unitPrice INT NOT NULL,
    color VARCHAR (250) NULL,
    quantityPerUnit INT NOT NULL,
    categoryName VARCHAR (250) NOT NULL,
    categoryDesc TEXT NULL
);



CREATE TABLE Orders (
    orderId SERIAL PRIMARY KEY, 
    productId INT REFERENCES Products(productId) NOT NULL,
    customerId INT REFERENCES Customer(customerId) NOT NULL, 
    orderDate date NULL,
    orderNum INT NOT NULL,
    price INT NOT NULL, 
    quantity INT NOT NULL,
    total INT NOT NULL,
    color VARCHAR (250) NULL,
    orderStatus VARCHAR (250) NOT NULL,
    paymentType VARCHAR (250) NOT NULL 
);

CREATE TABLE Customer (
    customerId SERIAL PRIMARY KEY, 
    username VARCHAR (250) UNIQUE NOT NULL, 
    password VARCHAR (250) NOT NULL,
    email VARCHAR (250) UNIQUE NOT NULL, 
    billingAdd VARCHAR (250) NOT NULL, 
    city VARCHAR (250) NULL,
    state VARCHAR (250) NULL,
    creditCard INT NOT NULL
);

CREATE TABLE OrderLine (
    orderLineId SERIAL PRIMARY KEY,
    orderId INT REFERENCES Orders (orderId) NOT NULL, 
    productId INT REFERENCES Products (productId) NOT NULL 
);
CREATE TABLE Customer (
    customerId SERIAL PRIMARY KEY, 
    username VARCHAR (250) UNIQUE NOT NULL, 
    userPassword VARCHAR (250) NOT NULL,
    email VARCHAR (250) UNIQUE NOT NULL, 
    billingAdd  VARCHAR (250) NOT NULL, 
    city VARCHAR (250) NULL,
    state VARCHAR (250) NULL,
    creditCard INT NOT NULL
);



CREATE TABLE Suppliers (
    supplierId SERIAL PRIMARY KEY, 
    customerId INT REFERENCES Customer(customerId) NOT NULL,
    fName VARCHAR (250) NOT NULL,
    LName VARCHAR (250) NULL,
    supplierPassword VARCHAR (250) UNIQUE NOT NULL,
    shopName VARCHAR (250) UNIQUE NOT NULL,
    phone int NULL,
    email VARCHAR (250) UNIQUE NOT NULL,
    adress VARCHAR (500) NOT NULL,
    city VARCHAR (250) NULL,
    state VARCHAR (250) NULL,
    country VARCHAR (250) NULL
);



CREATE TABLE Products (
    productId SERIAL PRIMARY KEY, 
    supplierId INT REFERENCES Suppliers(supplierId) NOT NULL,
    productName VARCHAR (250) NOT NULL,
    productDesc VARCHAR (250) NOT NULL, 
    unitPrice INT NOT NULL,
    color VARCHAR (250) NULL,
    quantityPerUnit INT NOT NULL,
    categoryName VARCHAR (250) NOT NULL,
    categoryDesc TEXT NULL
);



CREATE TABLE Orders (
    orderId SERIAL PRIMARY KEY, 
    productId INT REFERENCES Products(productId) NOT NULL,
    customerId INT REFERENCES Customer(customerId) NOT NULL, 
    orderDate date NULL,
    orderNum INT NOT NULL,
    price INT NOT NULL, 
    quantity INT NOT NULL,
    total INT NOT NULL,
    color VARCHAR (250) NULL,
    orderStatus VARCHAR (250) NOT NULL,
    paymentType VARCHAR (250) NOT NULL 
);

CREATE TABLE OrderLine (
    orderLineId SERIAL PRIMARY KEY,
    orderId INT REFERENCES Orders (orderId) NOT NULL, 
    productId INT REFERENCES Products (productId) NOT NULL 
);



INSERT INTO Customer (username, password, email, billingAdd, city, state, creditCard) VALUES
('Mie', 'admin123', 'mie@email.com', 'queens nyc', 'nyc', 'nyc', 12945);

INSERT INTO Products (supplierId, productName, productDesc, unitPrice, color, quantityPerUnit,categoryName, categoryDesc) VALUES
(3, 'Sakroots', 'Ladies HandBag', 30, 'red', 30, 'HandBag', 'handbag leather'), (2, 'ToteBag', 'tote bag ', 30, 'white', 30, 'Handbag', 'handbag leather');

INSERT INTO Suppliers (customerId, fName, LName, password, shopName, phone, email, address, city, state, country) VALUES (3, 'amanda', 'acosta', 'admin123', 'amandashop', 19393, 'amanda.com', 'queens', 'nyc','nyc', 'USA');

