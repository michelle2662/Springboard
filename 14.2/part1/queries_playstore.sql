-- Comments in SQL Start with dash-dash --
--1--
select * from analytics where id = 1880;

--2--
select ID,APP_name from analytics where last_updated = '2018-08-01';

--3--
SELECT CATEGORY, COUNT(*) AS APP_COUNT FROM ANALYTICS GROUP BY CATEGORY;

--4--
SELECT APP_NAME, REVIEWS FROM ANALYTICS ORDER BY REVIEWS DESC  LIMIT 5;

--5--
SELECT APP_NAME, REVIEWS FROM ANALYTICS WHERE RATING >= 4.8 ORDER BY REVIEWS  DESC  LIMIT 1;

--6--
SELECT category, AVG(reviews) AS avg_reviews FROM analytics GROUP BY category ORDER BY AVG_REVIEWS  DESC;

--7--
select app_name, price, rating from analytics where rating< 3 order by price desc limit 1;

--8--
select app_name, rating, min_installs from analytics where min_installs <= 50 AND rating is not null order by rating desc;


--9--
select app_name, rating, reviews from analytics where rating < 3 AND reviews > 10000;


--10--
select app_name, reviews, rating, price from analytics where price >= .10 and price <= 1;

--11--
SELECT app_name, last_updated
FROM analytics
WHERE last_updated = (
    SELECT MIN(last_updated)
    FROM analytics
);


--12--
select app_name, price from analytics order by price desc limit 1;

--13--
select sum(reviews) as app_review from analytics ;

--14--
select category, count(*) as app_count from analytics group by category having count(*) > 300;

--15--
SELECT app_name, reviews, min_installs, 
       (min_installs::float / reviews) AS install_to_review_ratio
FROM analytics
WHERE min_installs >= 100000
ORDER BY install_to_review_ratio DESC
LIMIT 1;
