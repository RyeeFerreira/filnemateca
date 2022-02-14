const saldos = [10,100,22,25,34]

const mtcin = n => n % 5 == 0;
const salcin = saldos.filter(mtcin);
console.log(salcin)
