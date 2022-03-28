const express = require("express");

const middlewareGuardaBusca = require("../middlewares/middlewareGuardaBusca")

const router = express.Router();

const FilmesController = require("../controllers/FilmesController")

router.get('/', FilmesController.index);

router.get('/',FilmesController.index)

router.get('/filme',FilmesController.listarFilmes)

router.get('/generos',FilmesController.buscarPorGenero)

router.get('/filmes/:id',FilmesController.buscarPelaPosicao)

router.get('/buscar/:titulo',FilmesController.buscarTitulo)

router.get('/busca', middlewareGuardaBusca,FilmesController.buscarPorTrecho);


router.get('/buscaporid/:id',(req,res)=>{});

router.get('/generos/:genero',(req,res)=>{});


module.exports = router;