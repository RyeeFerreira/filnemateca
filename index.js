const express = require("express");
const path = require("path");
const middlewareGlobal = require("./middlewares/middlewareGlobal");

const FilmesRouter = require("./routers/FilmesRouters");
const AdmRouter = require("./routers/AdmRouter")

const servidor = express();

servidor.set("view engine","ejs")

servidor.use(express.static(path.join(__dirname, 'public')));

servidor.use(express.urlencoded({ extended: false }));

servidor.use(middlewareGlobal)

servidor.use("/", FilmesRouter);
servidor.use("/", AdmRouter);

servidor.listen(3000)