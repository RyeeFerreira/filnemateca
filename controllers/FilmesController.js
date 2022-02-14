const FilmesController = {
    index: (req, res) => {
        console.log("Alguem fez uma requisição");
        res.send("Toma aí o que você pediu");
    },
    listarFilmes: (req, res) => {
        const filmes = require("../database/filmes.json");
        res.send(filmes)
    },

    buscarPelaPosicao: (req, res) => {
        let posicao = req.params.posicao;

        const filmes = require('../database/filmes.json');
        res.send(filmes[posicao])
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