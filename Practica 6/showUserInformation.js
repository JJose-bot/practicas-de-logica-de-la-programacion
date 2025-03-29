/* let name = "Juan"; //Variable de tipo String --- Cadena de texto

let age = 20 //Variable de tipo Number --- Dato numerico o dato float (Decimal)

let number = 22.22 //Ejemplo de float o double


//En linea o no está en linea

let isActive = true // Dato booleano

isActive = false */


// const siEstaActivo = () => {
//     if (isActive == true){
//         return 'en linea'
//     } else {
//         return 'ultima vez 2:00 PM'
//     }
// }

// console.log(siEstaActivo());

const fruits = [
     "apple",
     "pear",
     "grape",
     1
]

fruits.forEach(element => {
    console.log(element);
});

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

const UserInfo = {
    name : "Juan",
    age : 20,
    isActive : true,
    favoriteColor : ["black", "white"]
}

const {name, age, isActive, favoriteColor} = UserInfo
console.log(name);
console.log(age);
console.log(isActive);

favoriteColor.forEach(element => {
    console.log(element)
});

