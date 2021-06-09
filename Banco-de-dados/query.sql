create table usuario(
idUsuario INTEGER IDENTITY,
nome varchar(50),
usuario varchar(50),
email varchar(50),
senha varchar(50),
dataNasc date,
sexo varchar(30),
jogadorFavorito int,
dataCriacao datetimeoffset(3),
dataAtualizacao datetimeoffset(3)
);

drop table usuario;
truncate table dbo.usuario;
select * from usuario;