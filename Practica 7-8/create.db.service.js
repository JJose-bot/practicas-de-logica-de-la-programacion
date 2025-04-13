const { error } = require("console");
const fs = require("fs")

const mongo = "./mongo.json"

const createDatabase = () => {
    try {
        fs.writeFile(mongo, '{"users" : [] }', (error) => {
            if(error) throw new Error(`${error}`);
            console.log("Base de datos ha sido creada exitosamente");
        })
    } catch (error) {
        throw new Error(`${error}`);
        
    }
}

module.exports = createDatabase