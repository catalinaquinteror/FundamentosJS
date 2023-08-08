//Tipos de datos

//undefined
let cliente
console.log(cliente)
console.log(typeof cliente);

//Boolean
const descuento = true
console.log(descuento);
console.log(typeof descuento);

//Number
const numero1 = 20.20
const numero2 = 30
const numero3 = -100

console.log(typeof numero1);

//string
const alumno = "Juan"

//BigInt
const numeroGrande = BigInt(45645694854459)
console.log(typeof numeroGrande);

const numero = 10
const numero02 = 20
console.log( numero + Number(numeroGrande)); //agregarle el tipo de dato antes modifica el tipo de dato

//symbol
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol);

console.log(primerSymbol.valueOf);

//null
const descuento2 = null
console.log(typeof descuento2)