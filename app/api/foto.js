
var api = {};

var CONTADOR = 3;

fotos = [{ _id: 1, titulo: 'Leão', url: 'http://www.fundosanimais.com/Imagens/leao-por-do-sol.jpg' },
{ _id: 2, titulo: 'Leão', url: 'http://www.fundosanimais.com/Imagens/leao-por-do-sol.jpg' },
{ _id: 3, titulo: 'Leão', url: 'http://www.fundosanimais.com/Imagens/leao-por-do-sol.jpg' }]

//vai retorna uma foto ou uma lista de fotos caso tenha
api.lista = (req, res) => {
    res.json(fotos);
}

//vai retornar uma foto de acordo com o id passado na requisição.
api.buscarPorId = (req, res) => {
    foto = fotos.find((foto) => {
        return foto._id == req.params.id;
    });

    res.json(foto);
}

api.removerFotoPorId = (req, res) => {

    let find;
    let index;

    fotos.forEach(foto => {
        if (foto._id == req.params) {
            find = foto;
        }
    });

    index = fotos.indexOf(find);
    fotos.splice(index, 1);


    //Aqui ele retorna um array de fotos que seja diferente do id passado.
    fotos = fotos.filter(foto => {
        return foto._id != req.params.id;
    });


    res.sendStatus(204);

}

api.adicionar = (req, res) => {
    var fotoDoNavegador = req.body;
    fotoDoNavegador._id = ++CONTADOR;
    fotos.push(fotoDoNavegador);
    res.json(fotoDoNavegador);
}

api.alterar = (req, res) => {

    var foto = req.body;
    var fotoId = req.params.id;

    var indice = fotos.findIndex((foto) => {
        return foto._id = fotoId;
    })

    fotos[indice] = foto;

    res.sendStatus(200);

}

module.exports = api;
