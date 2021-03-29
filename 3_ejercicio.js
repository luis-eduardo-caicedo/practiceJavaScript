//3.Leer un número entena de dos digitos y determinar si ambos digitos son pares.

number = 32

let digito1=  parseInt(number/10)
let digito2=  number %10

if (digito1 %2==0) {
    console.log(`El primer numero ${digito1} es par`)
}else{
    console.log(`El primer numero ${digito1} impar`)
}
if (digito2 %2==0) {
    console.log(`El primer numero ${digito2} es par`)
}else{
    console.log(`El primer numero ${digito2} impar`)
}

