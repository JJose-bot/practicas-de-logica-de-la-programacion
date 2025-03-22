const leerLinea = require("readline")
const AnimalFactory = require("./AnimalFactory")

const interfazConsola = leerLinea.createInterface({
    input : process.stdin,
    output : process.stdout
})

interfazConsola.question("Por favor ingresa el nombre del animal ", (name) => {
    interfazConsola.question("Por favor ingresa la edad del animal ", (age) =>{
        interfazConsola.question("Por favor ingresa el color del animal ", (color) => {
            interfazConsola.question("Por favor ingrese la raza del animal ", (raza) => {
                console.log(AnimalFactory(name, age, color, raza));

                interfazConsola.close()
            })
        })
    })
})