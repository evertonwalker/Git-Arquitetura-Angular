var express = require('express');
var app = express();
var consign = require('consign');

// configurações do express.

app.use(express.static('./client/'));

//cwd: pergunta qual primeiro diretório será o padrão
// a partir do primeiro include o resto se usa then.
consign({ cwd: 'app'})
    .include('api')
    .then('routes').into(app);

module.exports = app;