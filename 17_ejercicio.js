//17.Leer 10 números enteros, almacenados en un vcetor y determinar cuántas veces está recetido el mayor

let number= [3,32,17,4,5,32,21,32,9,10]
let mayor=0
let contador=0

for (i=0; i<number.length; i++){

    if (mayor<number[i]) {
        mayor=number[i]
    }
}

for (j=0; j<number.length; j++) {
    if (mayor==number[j]) {
        contador+=1
    }
}

console.log(`El numero mayor es: ${mayor}`)
console.log(`El numero de veces que se repite el numero mayor es: ${contador} veces`)

