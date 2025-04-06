-- write your queries here

--1--
select * from owners o full outer join vehicles v on o.id = v.owner_id;

--2--
select first_name, last_name, count(owner_id) from owners o full outer join vehicles v on o.id = v.owner_id group by (first_name, last_name) order by first_name;

--3--
select first_name, last_name, avg(price) as avg_price, count(owner_id) from owners o full outer join vehicles v on o.id = v.owner_id group by (first_name, last_name) having avg(price) > 10000 and count(owner_id) > 1 order by first_name desc;

