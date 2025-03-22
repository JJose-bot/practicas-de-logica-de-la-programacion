const AnimalFactory = (name, age, color, race) => {
    try {

        if (!name || !age || !color || !race) return "Para poder crear un nuevo animal tienes que enviar todos los campos"
        const newAnimal = {
            nombre : name,
            age : age,
            color : color,
            raza : race
        }

        return newAnimal
        
    } catch (error) {
        throw new Error(`Hubo un problema al crear el animal : ${error}`);
    }
}

module.exports = AnimalFactory