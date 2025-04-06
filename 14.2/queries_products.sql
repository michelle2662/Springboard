-- Comments in SQL Start with dash-dash --

--1--
INSERT INTO products (name, price, can_be_returned)
VALUES ('chair', 44.00, false);

--2--
INSERT INTO products (name, price, can_be_returned)
VALUES ('stool', 25.99, true);

--3--
INSERT INTO products (name, price, can_be_returned)
VALUES ('table', 124.00, false);

--4--
SELECT * FROM PRODUCTS;

--5--
SELECT NAME FROM PRODUCTS;

--6--
SELECT NAME,PRICE FROM PRODUCTS;

--7--
INSERT INTO products (name, price, can_be_returned)
VALUES ('piano', 560.00, false);

--8--
SELECT * FROM PRODUCTS
WHERE can_be_returned = TRUE

--9--
SELECT * FROM PRODUCTS
WHERE PRICE < 44

--10--
SELECT * FROM PRODUCTS
WHERE PRICE < 99.99 AND PRICE > 22.50 

--11--
UPDATE PRODUCTS SET PRICE = PRICE - 20;

--12--
DELETE FROM PRODUCTS WHERE PRICE < 25

--13--
UPDATE PRODUCTS SET PRICE = PRICE + 20;


--14--
UPDATE PRODUCTS SET can_be_returned = TRUE

