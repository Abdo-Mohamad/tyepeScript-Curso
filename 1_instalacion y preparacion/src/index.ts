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
let myTypeString: string = 'hola';
// number
let myTypeNumber: number = 25;
// boolean
let myTypeBoolean: boolean = true;


// array 

let arrayNumber: number[] = [1, 2, 3, 4, 5];
// objeto
let persona: { nombre: string, edad: number } = { nombre: 'Bezael ', edad: 25 };
// null y undefined
let noExiste: null = null;
// any 

let arrAny: any[] = [1, 2, 3, 4, 5, 'hola', true];

// tuple 

let tupla: [string, number, boolean] = ['hola', 25, true];

console.log(tupla);

// Tuple Array

let players: [string, number][];

players = [['Lebron', 1], ['Kobe', 2], ['Bezael', 3]];


let myVerible;
let myVerible1:string;
let myVerible2: number;
let myVerible3: boolean;
let myVerible4 = 33; // number automaticament difinido la variable myVerible4
// let myVerible5: number = 'hola'; // error de tipos de datos


// Unios 

let myVerible5 : string | boolean | null | undefined;
myVerible5 = 'hola';
// myVerible5 = 25; // error de tipos de datos