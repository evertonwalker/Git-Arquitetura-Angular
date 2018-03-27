//primeiro que temos que exportar todo esse modulo de forma que nossa aplicação tenha acesso, então
//englobamos em uma função e sempre passamor o parâmetro app, que é o objeto principal da nossa aplicação
module.exports = function(app){
    
    var api = app.api.foto;

    app.route('/v1/fotos/')
        .get(api.lista)
        .post(api.adicionar);6
    
    //utilizando os verbos, para cada tipo de requisição get, delete com a msm url, usamos métodos diferentes.
    app.route('/v1/fotos/:id')
        .get(api.buscarPorId)
        .delete(api.removerFotoPorId)
        .put(api.alterar);

}


