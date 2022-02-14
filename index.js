const express = require("express");

const FilmesRouter = require("./routers/FilmesRouters");

const servidor = express();

servidor.use("/", FilmesRouter)

servidor.get("/", (req, res) =>{
    console.log("Alguem fez uma requisiçao");
    res.send("toma ai o q voce me pediu");
})

servidor.get("/filmes", (req, res) =>{
    console.log("Filme assistido");
    res.send("Homem Aranha");
})

servidor.get("/generos", (req, res) =>{
    console.log("Generos do Filme");
    res.send("comedia");
})

servidor.get("/filmes/:posicao", (req,res)=>{

    let posicao = req.params.posicao;
    const filmes = require("./database/filmes.json")
    res.send(filmes[posicao])
})


servidor.listen(3000)