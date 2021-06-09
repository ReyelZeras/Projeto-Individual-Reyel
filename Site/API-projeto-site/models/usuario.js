	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let usuario = sequelize.define('usuario',{
		idPaciente: {
			field: 'idUsuario',
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
		usuario: {
			field: 'usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		
		
		sexo: {
			field: 'sexo',
			type: DataTypes.STRING,
			allowNull: false
		},

		dataNasc:{
            field: 'dataNasc',
            type: DataTypes.DATEONLY,
            allowNull: true,
            
        },
		
		jogadorFavorito:{
			field: 'jogadorFavorito',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		
		dataAtualizacao:{
			field: 'dataAtualizacao',
			defaultValue: data(),
			type: DataTypes.DATE,
			allowNull: false
		},
		dataCriacao:{
			field: 'dataCriacao',
			defaultValue: data(),
			type: DataTypes.DATE,
			allowNull: false
		}

	}, 
	{
		tableName: 'usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
		

	});


    return usuario;
};

function data(){
	var dataAtual = new Date();
	dataAtual.setHours(dataAtual.getHours()-3)
	return dataAtual;
}
