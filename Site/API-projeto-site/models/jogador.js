	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let jogador = sequelize.define('jogador',{
		idJogador: {
			field: 'idJogador',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		gols: {
			field: 'gols',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		jogos: {
			field: 'jogos',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		assistencias: {
			field: 'assistencias',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		
		
		cartoesa: {
			field: 'cartoesa',
			type: DataTypes.INTEGER,
			allowNull: false
		},

		cartoesv:{
            field: 'cartoesv',
            type: DataTypes.INTEGER,
            allowNull: true,
            
        },
		camisa:{
            field: 'camisa',
            type: DataTypes.INTEGER,
            allowNull: true,
            
        }
		

	}, 
	{
		tableName: 'jogador', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
		

	});


    return jogador;
};

function data(){
	var dataAtual = new Date();
	dataAtual.setHours(dataAtual.getHours()-3)
	return dataAtual;
}
