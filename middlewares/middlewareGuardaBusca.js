const fs = require("fs")
module.exports = (req, res, next) => {
    console.log("Passando no middleware global")

    let trechobuscado = req.query.busca + "\n";

    fs.writeFileSync("./trechosBuscados.txt", trechobuscado, {flag:"a+"});

    next();

    res.end()
}

