
-- Database para la App Completa --
create database shortd;

-- Selecciono la Database -- 
use shortd;

-- drop table empleados; --
-- drop table contactos; --


-- Creamos la tabla Productos para la App Completa --
create table styles(
idStyle int unsigned not null auto_increment,
nameStyle varchar(150) not null,
ibusStyle int not null,
descriptionStyle varchar(200) not null,
primary key (idStyle)
);

-- Creamos la tabla Contacto para la App Completa --
create table contact (
idContact int unsigned not null auto_increment,
contactName varchar(150) not null,
contactMail varchar(150) not null,
primary key (idContact)
);
