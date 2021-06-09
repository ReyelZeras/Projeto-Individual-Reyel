var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;
var env = process.env.NODE_ENV || 'development';


// Estatísticas Jogadores Favoritos
router.get('/dados', function (req, res, next) {
	
	console.log(`Recuperando as estatísticas atuais`);

	const instrucaoSql = `SELECT
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
    (SELECT COUNT(*) FROM usuario WHERE JogadorFavorito = 11) as JogadorFavorito11;`;
					

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});


// Estatísticas Usuarios
router.get('/usuarios', function (req, res, next) {
	
	console.log(`Recuperando as estatísticas atuais`);

	const instrucaoSql = `select * from usuario order by dataCriacao desc;`;
					

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});




module.exports = router;
