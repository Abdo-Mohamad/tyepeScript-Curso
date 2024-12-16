"use strict";
const userName = 'Bezael';
const age = 25;
console.log(`My name is ${userName} and I am ${age} years old.`);
// para esjctutar el typescript tsc nomber del archivo ej --> tsc index.ts salida index.js
// tsc --outDir dist index.js && node dist/index.js
// tsc --outDir dist index.js --watch
// tsc --help sale todo lo que hace el comando tsc
// los tipos de datos en typescript
// number 
let edad = 25;
// string
let nombre = 'Bezael';
// boolean
let estaLogueado = true;
// array
let colores = ['rojo', 'verde', 'azul'];
// objeto
let persona1 = { nombre: 'Bezael', edad: 25 };
// null y undefined 
let noExiste1 = null;
// any
let cualquiera = 'hola';
// void
function noRetorna() { }
// never
function error() {
    throw new Error('Error');
}
// tipos de datos en typescript
// String
let myTypeString = 'hola';
// number
let myTypeNumber = 25;
// boolean
let myTypeBoolean = true;
// array 
let arrayNumber = [1, 2, 3, 4, 5];
// objeto
let persona = { nombre: 'Bezael ', edad: 25 };
// null y undefined
let noExiste = null;
// any 
let arrAny = [1, 2, 3, 4, 5, 'hola', true];
// tuple 
let tupla = ['hola', 25, true];
console.log(tupla);
// Tuple Array
let players;
players = [['Lebron', 1], ['Kobe', 2], ['Bezael', 3]];
let myVerible;
let myVerible1;
let myVerible2;
let myVerible3;
let myVerible4 = 33; // number automaticament difinido la variable myVerible4
// let myVerible5: number = 'hola'; // error de tipos de datos
// Unios 
let myVerible5;
myVerible5 = 'hola';
// myVerible5 = 25; // error de tipos de datos
