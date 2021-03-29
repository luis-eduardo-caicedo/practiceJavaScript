//5.Leer un número entena de dos digitos y determinar si es primo y además si es negativo.

let number = 23
let contador = 0

for (let i=1; i<=number; i++) {
    if (number%i==0) {
        contador+=1
    }
}

if (contador==2) {
    console.log(`${number} Es un numero primo`)
}else{
    console.log(`${number} No es un numero primo`)
} 

if (number<0) {
    console.log(`${number} Es un numero negativo`)
}else{
    console.log(`${number} Es un numero positivo`)
} 
