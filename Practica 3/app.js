const sumar = require("./sumar");
const readline = require("readline")

const InterfazConsola = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

InterfazConsola.question("Por favor ingrese el primer número ", (num1) => {
    InterfazConsola.question("Por favor ingrese el segundo número ", (num2) => {

        let numero1 = parseFloat(num1)
        let numero2 = parseFloat(num2)

        console.log(`Su suma es : ${sumar(numero1, numero2)}`);
    })
})
