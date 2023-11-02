create table students(
studentID int not null unique,
firstName varchar(255) not null,
lastName varchar(255),
age int,
university varchar(255),
city varchar(255))

insert into students(studentID,firstName,lastName,age,university,city) 
values
(1,'Fuad','Rahimli',18,'ASOIU','Baku'),
(2,'Ilkin','Allahverdiyev',18,'ASOIU','Baku'),
(3,'Parviz','Parvizli',27,'UNEC','Baku'),
(4,'Anar','Anarli',24,'ADU','Baku'),
(5,'Murad','Muradli',28,'AzTU','Baku'),
(6,'Fuad','Rahimli',18,'ASOIU','Baku')

select * from students
select age from students
select firstName,lastName from students
select * from students where firstName like 'N%' or firstName like 'M%';
select * from students where not firstName = 'Parviz' 
select * from students where firstName like '_U%'
update students
set city='Rome' where studentID=2 or studentID=3
select * from students where age>20
select * from students order by age
select * from students order by firstName desc
select distinct firstName from students 
select sum(age) from students
select top 1 *  from students order by age 
select top 1 *  from students order by age desc
select count(*) from students
select avg(age) from students
delete students where studentID=5
select * from students where firstName in ('Parviz','Ilkin')
select * from students where age between 22 and 29
select top 4 * from students 
drop table students





