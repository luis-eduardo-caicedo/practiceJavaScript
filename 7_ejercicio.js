//7.Leer un número entero de dos digitos y determinar si los dos digitos son iguales.

let number = 23

let digito1= parseInt(number/10)
let digito2= number %10 

if (digito1===digito2) {
    console.log(`Los digitos son iguales`)
}else{
    console.log(`Los digitos no son iguales`)
}
