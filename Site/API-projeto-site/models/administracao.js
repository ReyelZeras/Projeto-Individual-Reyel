'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let administracao = sequelize.define('administracao',{	
		idAdm: {
			field: 'idAdm',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		 nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		sexo: {
			field: 'sexo',
			type: DataTypes.STRING, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		}
	}, 
	{
		tableName: 'administracao', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return administracao;
};
