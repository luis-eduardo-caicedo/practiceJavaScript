//11.Leer un número entero y determinar a cuánto es igual la suma de sus digitos.

let number = 4832

let digito1= (parseInt((number/100)/10))
let digito2= (parseInt(number/100))%10
let digito3= (parseInt((number %100)/10))
let digito4= (parseInt(number%100)%10)

console.log(`La suma de los digitos del numero ${number} es: ${digito1+digito2+digito3+digito4}`)

