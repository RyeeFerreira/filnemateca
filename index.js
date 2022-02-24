const express = require("express");
const path = require("path");

const FilmesRouter = require("./routers/FilmesRouters");

const servidor = express();

servidor.set("view engine","ejs")

servidor.use(express.static(path.join(__dirname, 'public')));

servidor.use("/", FilmesRouter);


servidor.listen(3000)