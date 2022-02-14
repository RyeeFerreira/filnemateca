let pessoas = [
    {
        nome:"Natália",
        salario: 15000
    },
    {
        nome:"Sérgio Moura",
        salario: 13000
    },
    {
        nome:"Silvia",
        salario: 10000
    },
    {
        nome:"João",
        salario: 8000
    }
]

let maisQB = p => p > ({salario: 8000});
let salarios = pessoas.filter(maisQB);
console.log(salarios)

