module.exports = (req, res, next) => {
    let data = new Date();
    let hora = data.getHours();

    if (hora<8 || hora >= 20){
        res.send ("ja ta tarde ... va para casa!")
    } else {
        next();
    }
}
