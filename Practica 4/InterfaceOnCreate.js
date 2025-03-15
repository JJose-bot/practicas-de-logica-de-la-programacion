const LeerLinea = require("readline")
const vehicleOnCreate = require("./VehicleService")

const InterfazConsola = LeerLinea.createInterface({
    input: process.stdin,
    output: process.stdout
})

InterfazConsola.question("Por favor ingrese el modelo del vehículo ", (model) => {
    InterfazConsola.question("Por favor ingrese el color del vehiculo ", (color) => {
        InterfazConsola.question("Por favor ingrese el año del vehiculo ", (year) => {
            InterfazConsola.question("Por favor ingrese el estado del vehiculo ", (isFuncional) => {
                InterfazConsola.question("Por favor ingrese la marca del vehículo ", (brand) => {
                    console.log(vehicleOnCreate(model, color, year, isFuncional, brand));
                    InterfazConsola.close()
                })
            })
        })
    })
})