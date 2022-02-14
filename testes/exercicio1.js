const ehPar =(n) =>{
    if(n % 2 == 0) {
        return true
    }else{
        return false
    }
};

const numerosDasCasa = [5,10,20,23,24];
const nPar = n => n % 2 == 0;
const casasPares = numerosDasCasa.filter(nPar)
console.log(casasPares)