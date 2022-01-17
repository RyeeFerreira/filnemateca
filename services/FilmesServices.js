const filmes = require("../database/filmes.json")
const uniqid = require("uniqid")
const fs = require("fs")

const services = {
    listar: function(){
        return filmes;
    },
    create: function(cartaz, titulo, censura, trailer, sinopse, generos){
        let id = uniqid();
        let novoFilme = {
            id, cartaz, titulo, generos, censura, trailer, sinopse, 
        }
        filmes.push(novoFilme);
        fs.writeFileSync(__dirname+"/../database/filmes.json",
        JSON.stringify(filmes,null,4)
        )
    },
    apagar: function(){},
    editar: function(){},
    getTitulos: function() {
        let titulos = [];
        for(let f of filmes){
            titulos.push(f.titulo)
        }
        return titulos;
    }
     
};

console.log(services.getTitulos());
services.create(
    "Miranha.jpg",
    "Homem Aranha: Sem Volta para Casa",
    10,
    "http://youy",
    "Sinopse do filme que dizem que é bom",
    ["Ação", "Ficção", "Comédia"]
)


module.exports = services;