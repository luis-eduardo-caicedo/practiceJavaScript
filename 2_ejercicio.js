//2.Leer un número entero de dos digitos y terminar a cuánto es igual la suma de sus digitos.

let number = 95

let digito1= number %10
let digito2= parseInt(number/10)

console.log(`${digito2} + ${digito1} = ${digito1 + digito2}`);
