var api = {};

api.lista =  (req, res) => {
    fotos = [{
        _id: 1, titulo : 'Leão', url: 'http://www.fundosanimais.com/Imagens/leao-por-do-sol.jpg'
    }]
    res.json(fotos);
}

module.exports = api;


