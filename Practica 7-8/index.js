const consoleInterface = require("./console.service");
const createDatabase = require("./create.db.service");
const createUser = require("./create.user.service");
const deleteUserbyId = require("./delete.user.service");
const updateUsers = require("./update.user.service");
const showUsers = require("./show.users.service");
const {v4 : uuid} = require("uuid")

const main = () => {
    try {
        consoleInterface.question("Por favor ingrese una opción\n1-Crear base de datos\n2-Crear un usuario\n3-Actualizar usuario mediante su id\n4-Eliminar un usuario por su id\n5-Ver todos los usuarios\n", (option) => {

            switch (parseInt(option)) {
                case 1:

                    createDatabase()
                    
                    setTimeout(() => {
                        main()
                    }, 3000)

                    break;
                case 2:

                consoleInterface.question("Por favor ingresa tu nombre: ", (nombre) => {

                    consoleInterface.question("Por favor ingresa tu apellido: ", (apellido) => {
                        
                        consoleInterface.question("Por favor ingresa tu dui: ", (dui) => {

                            consoleInterface.question("Por favor ingrese su correo electronico: ", (correo) => {

                                const newUser = {
                                    id : uuid(),
                                    name : nombre,
                                    lastname : apellido,
                                    dui : dui,
                                    correo : correo
                                }

                                createUser(newUser)

                                setTimeout(() => {
                                    main()
                                }, 3000)
                            })
                        })
                    })
                })

                break;
                
                case 3:
                    consoleInterface.question("Por favor ingrese el id del usuario a actualizar: ", (id) => {
                        consoleInterface.question("Por favor ingresa el nombre a actualizar: ", (nombre) => {
                            consoleInterface.question("Por favor ingresa el apellido: ", (apellido) => {
                                consoleInterface.question("Por favor ingresa tu dui: ", (dui) => {
                                    consoleInterface.question("Por favor ingresa tu corrreo: ", (correo) => {

                                        const newData = {
                                            name : nombre,
                                            lastname : apellido,
                                            dui : dui,
                                            correo : correo
                                        }
                                        
                                        updateUsers(id, newData)

                                        setTimeout(() => {
                                            main()
                                        }, 3000)
                                    })
                                })
                            })
                        })
                    })
                    break;
                case 4:
                    consoleInterface.question("Por favor ingrese el id del user que quiere borrar: ", (id) => {

                        deleteUserbyId(id)

                        setTimeout(() => {
                            main()
                        }, 3000)
                    })
                    break;
                case 5:
                    showUsers()

                    setTimeout(() => {
                        main()
                    }, 3000)

                    break;

                default:
                    break;
            }
        })    
    } catch (error) {
        throw new Error(`${error}`);
        
    }
}

main()