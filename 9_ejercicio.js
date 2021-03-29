//9.Leer tres numeros enteros y determinar si el último digito. de los tres numeros es igual. 

let number1 = 72
let number2 = 32
let number3 = 12

let digito1 = number1%10
let digito2 = number2%10
let digito3 = number3%10

if (digito1 === digito2 && digito2 === digito3) {
    console.log(`Los ultimos numeros son iguales`)
}else{
    console.log(`Los ultimos numeros son diferentes`)
}

