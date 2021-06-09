process.env.NODE_ENV = 'production'; // altere para 'production' ou 'dev'

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var jogadoresRouter = require('./routes/jogadores');
var administracoesRouter = require('./routes/administracoes');
var leiturasRouter = require('./routes/leituras');
var publicacoesRouter = require('./routes/publicacoes');
var publicacoes2Router = require('./routes/publicacoes2');
var publicacoes3Router = require('./routes/publicacoes3');
var publicacoes4Router = require('./routes/publicacoes4');
var publicacoes5Router = require('./routes/publicacoes5');
var publicacoes6Router = require('./routes/publicacoes6');



var app = express();

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/leituras', leiturasRouter);
app.use('/administracoes', administracoesRouter);
app.use('/publicacoes', publicacoesRouter);
app.use('/publicacoes2', publicacoes2Router);
app.use('/publicacoes3', publicacoes3Router);
app.use('/publicacoes4', publicacoes4Router);
app.use('/publicacoes5', publicacoes5Router);
app.use('/publicacoes6', publicacoes6Router);
app.use('/jogadores', jogadoresRouter);



module.exports = app;
