//10.Leer dos numeres enteros y determinar si la diferencia entre los dos es un número divisor exacto de alguno de los dos números.

let number1 = 20
let number2 = 10


console.log(number1%number2)
console.log(number2%number1)

if (number1%number2==0) {
    console.log(`La diferencia entre los numeros ${number1} y ${number2} es un divisor exacto`)
}else{
    console.log(`La diferencia entre los numeros ${number1} y ${number2} es un divisor no exacto`)
}

if (number2%number1==0) {
    console.log(`La diferencia entre los numeros ${number2} y ${number1} es un divisor exacto`)
}else{
    console.log(`La diferencia entre los numeros ${number2} y ${number1} es un divisor no exacto`)
}
