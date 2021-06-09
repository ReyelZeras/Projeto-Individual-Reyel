var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var jogador = require('../models').jogador;

// estatísticas (max, min, média, mediana, quartis etc)
router.get('/dados/:jogadorFavorito_usuario_meuapp', function (req, res, next) {
	
	console.log(`Recuperando as estatísticas atuais`);

    let Favorito = req.params.jogadorFavorito_usuario_meuapp;
	
	const instrucaoSql = `SELECT 
    jogador.nome as nome,
    jogador.gols as gols,
    jogador.jogos as jogos,
    jogador.assistencias as assistencias,
    jogador.cartoesa as amarelos,
    jogador.cartoesv as vermelhos,
	jogador.camisa as camisa
    FROM jogador
    WHERE idJogador = ${Favorito};`;
					

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});


/* Cadastrar Jogador */
router.post('/cadastrar', function(req, res, next) {
	console.log('Adicionando um jogador');
	console.log(new Date());
	console.log('dados', req.body)
	jogador.create({
		nome: req.body.nome,
		gols: req.body.gols,
		jogos: req.body.jogos,
		assistencias: req.body.assistencias,	
		cartoesa: req.body.cartoesa,
		cartoesv: req.body.cartoesv,
		camisa: req.body.camisa



	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});


module.exports = router;