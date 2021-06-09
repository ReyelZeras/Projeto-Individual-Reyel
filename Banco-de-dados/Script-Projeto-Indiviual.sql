create database ProjetoIndividual;

use ProjetoIndividual;

/* Criando tabelas */

create table jogador(
idJogador INT primary key auto_increment,
nome varchar(50),
gols INT,
jogos INT,
assistencias INT,
cartoesa INT,
cartoesv INT,
numeroCamisa INT
);

create table usuario(
idUsuario INT primary key auto_increment,
nome VARCHAR(50),
email VARCHAR(50),
senha VARCHAR(50),
user VARCHAR(50),
sexo VARCHAR(50),
jogadorFavorito int,
foreign key(jogadorFavorito) references jogador(idJogador),
dataCriacao timestamp default current_timestamp,
dataAtualizacao timestamp default current_timestamp
);


create table noticias(
idNoticia INT primary key auto_increment,
titulo varchar(100)
);

create table publicacao(
idPubli INT primary key auto_increment,
descricao varchar(100),
fkUsuario INT,
foreign key(fkUsuario) references usuario(idUsuario),
fkNoticia INT,
foreign key(fkNoticia) references noticias(idNoticia)
);

/* Inserindo dados */

insert into jogador (nome, gols, jogos, assistencias, cartoesa, cartoesv, numeroCamisa) values
('João Paulo', 0, 14, 0, 1, 0, 34),
('Pará', 1, 18, 0, 5, 0, 21),
('Kaiky', 1, 18, 0, 3, 0, 28),
('Luan Peres', 0, 20, 1, 4, 0, 14),
('Felipe Jonatan', 2, 19, 3, 2, 0, 3),
('Alison', 0, 13, 0, 5, 0, 5),
('Carlos Sanchez', 0, 0, 0, 0, 0, 7),
('Gabriel Pirani', 2, 20, 2, 1, 0, 20),
('Marinho', 4, 12, 3, 2, 0, 11),
('Kaio Jorge', 6, 16, 1, 3, 0, 9),
('Lucas Braga', 5, 19, 1, 4, 0, 30);

insert into noticias(titulo) values
('Diniz aguarda por Ganso'),
('Prévia: Santos x Ceará SC'),
('Santos anuncia contratação de Zanocelo');

insert into usuario values
(null, 'Reyel', 'reyel.conceicao@bandtec.com', 'teste123', 'ReyelzZeras', 'masculino', 10, now(), now()),
(null, 'Felipe', 'felipe.domke@bandtec.com', 'teste123', 'DomkeSalles', 'masculino', 11, now(), now()),
(null, 'Bruno', 'bruno.zapa@bandtec.com', 'teste123', 'BrunuZapa', 'masculino', 8, now(), now()),
(null, 'Isabela', 'isabela.nascimento@bandtec.com', 'teste123', 'ElaEla', 'feminino', 1, now(), now());

insert into publicacao values
(null, 'Ótima contatação!', 1, 3),
(null, 'Não o conheço', 4, 3),
(null, 'Melhor que o Jean Mota!', 3, 1),
(null, 'Muito bom se vier', 2, 1),
(null, 'Vamos perder mais umas...', 4, 2),
(null, 'Vamos ganhar por 3x1', 1, 3);

select * from jogador;
select * from noticias;
select * from publicacao;
select * from usuario;



SELECT
    (SELECT COUNT(*) FROM usuario WHERE JogadorFavorito = 1) as JogadorFavorito1,
    (SELECT COUNT(*) FROM usuario WHERE JogadorFavorito = 2) as JogadorFavorito2,
    (SELECT COUNT(*) FROM usuario WHERE JogadorFavorito = 3) as JogadorFavorito3,
    (SELECT COUNT(*) FROM usuario WHERE JogadorFavorito = 4) as JogadorFavorito4,
    (SELECT COUNT(*) FROM usuario WHERE JogadorFavorito = 5) as JogadorFavorito5,
    (SELECT COUNT(*) FROM usuario WHERE JogadorFavorito = 6) as JogadorFavorito6,
    (SELECT COUNT(*) FROM usuario WHERE JogadorFavorito = 7) as JogadorFavorito7,
    (SELECT COUNT(*) FROM usuario WHERE JogadorFavorito = 8) as JogadorFavorito8,
    (SELECT COUNT(*) FROM usuario WHERE JogadorFavorito = 9) as JogadorFavorito9,
    (SELECT COUNT(*) FROM usuario WHERE JogadorFavorito = 10) as JogadorFavorito10,
    (SELECT COUNT(*) FROM usuario WHERE JogadorFavorito = 11) as JogadorFavorito11;

	SELECT 
    jogador.nome,
    jogador.gols,
    jogador.jogos,
    jogador.assistencias,
    jogador.cartoesa,
    jogador.cartoesv,
	jogador.numeroCamisa
    FROM jogador
    WHERE idJogador = 10;


