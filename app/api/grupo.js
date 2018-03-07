var api = {}


api.lista = (req, res) => {
    var grupos = [
        { _id: 1 , nome: 'esporte'},
        { _id: 2 , nome: 'jogos'},
        { _id: 3 , nome: 'relacionamentos'},
    ]
    res.json(grupos);
}


module.exports = api;