//4. Leer un número entena de dos digitos menor gue 20 y determinar si es primo.

let number = 23
let contador = 0

for (let i=1; i<=number; i++) {
    if (number%i==0) {
        contador+=1
    }
}

if (contador==2) {
    console.log("Es un numero primo")
}else{
    console.log("No es un numero primo")
} 
