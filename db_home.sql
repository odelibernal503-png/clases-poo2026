create database Biblioteca;

use Biblioteca;

create table Autores(
id int primary key auto_increment,
nombre varchar(100),
apellido varchar(100),
edad int,
genero varchar(10),
nacionalidad varchar(50),
fecha_de_nacimiento date

);

create table Libros(
id int primary key auto_increment,
titulo varchar(150),
año_publicado date,
autor varchar(100)
);

create table Prestamos(
id int primary key auto_increment,
fecha_de_prestamo date,
fecha_de_devolucion date,
nombre_del_prestario varchar(100)
);