//importando o modulo http, para criar um servidor.
var http = require('http');
//importando o modulo express, configurado com as rotas para cada requisição
var app = require('./config/express');

//importando o banco configurado;
require('./config/database')('localhost/alurapic');

//Criando um servidor, passando o express configurado e a porta que será escutada, além de um callback pra vê se está tdo ok.
http.createServer(app).listen(3000, () => {
        console.log("Servidor Iniciado");
    });

     
