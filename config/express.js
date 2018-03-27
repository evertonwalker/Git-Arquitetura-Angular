//importando o modulo express mapeamento de requisições
var express = require('express');
//fica responsável por carregar todos componentes que iramos precisar.
var consign = require('consign');

//utilzado para converter os dados para JSON 
var bodyParser = require('body-parser'); 

//estanciando o express na variável app.
var app = express();

app.use(bodyParser.json());
// configurações para deixar a pasta do nosso projeto pública e assim o express conseguir abrir ela
app.use(express.static('./client/'));


//cwd: pergunta qual primeiro diretório será o padrão, artifício usado mais para importação

//include api and then routes, esses dois parâmetros serve para incluir api e então carregar routes e aplicar tudo dentro de app, onde será exportado
//e usado no final através do nosso servidor HTTP. 
consign({ cwd: 'app'})
    .include('api')
    .then('routes').into(app);

module.exports = app;

/*
Consegue perceber? Express nada mais é do que um módulo que aplicará uma pilha de filtros para lidar com a requisição e resposta recebido pelo nosso servidor.
 Na verdade, o termo correto não é "pilha de filtro", mas sim pilha de middlewares.

Middlewares são funções que lidam com requisições. Uma pilha de middlewares pode ser aplicada em uma mesma requisição para se atingir diversas
 finalidades (segurança, logging, auditoria etc.). Cada middleware passará o controle para o próximo até que todos sejam aplicados.

 */

 //importando modulo que lhe da com o tratamento de importação de rotas, de forma que a cada rota criada não precisaremos
//importar dentro do express.js
//require('../app/routes/grupo')(app);
//require('../app/routes/foto')(app); se não tudo iria ficar dessa maneira