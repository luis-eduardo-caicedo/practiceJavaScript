//8.Leer un número entero de 4 digitos y determinar si el segundo digito es igual al penúltimo.

let number = 4779

let digito1= (parseInt(number/100))%10
let digito2= (parseInt((number %100)/10))

if (digito1===digito2) {
    console.log(`El segundo digito y el penultimo son iguales`)
}else{
    console.log(`El segundo digito y el penultimo no son iguales`)
}

