module.exports = {
    mostraLogin: (req, res)=>{res.render("login")},

    login: (req, res)=> {
        let usuarios = require("../database/usuarios.json");
        
        let dados = req.body;
        res.send(dados)

        
    }
}