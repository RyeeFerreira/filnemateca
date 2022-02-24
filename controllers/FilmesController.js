const FilmesController = {
    index: (req, res) => {
        const filmes = require("../database/filmes.json");
        res.render("index.ejs",{filmes});
    },
    listarFilmes: (req, res) => {
        const filmes = require("../database/filmes.json");
        res.send(filmes)
    },

    buscarPelaPosicao: (req, res) => {
        let posicao = req.params.posicao;

        const filmes = require('../database/filmes.json');

        let filme = filmes[posicao]
        res.render("filme.ejs",{filme})
    },

    buscarPorTrecho: (req, res) => {
        let trecho = req.params.trecho;

        const filmes = require("../database/filmes.json");

        let filtradora = filme => {
            return filme.titulo.includes(trecho);
        }
        let resultadoDaBusca = filmes.filter(filtradora);

        res.send(resultadoDaBusca);
    },

    buscarTitulo: (req, res) => {
        res(req.params.titulo)
    },

    buscarPorId: (req, res) => {

    },

    buscarPorGenero: (req, res) => {

    },

}


module.exports = FilmesController;