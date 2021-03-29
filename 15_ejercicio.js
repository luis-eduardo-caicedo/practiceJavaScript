//15.Leer 10 números enteros, almacenarlos en un vector y determinar en qué posiciones se encuentra el número mayor. 

let number= [3,2,17,4,5,12,21,32,9,10]
let mayor=0

for (i=0; i<number.length; i++){

    if (mayor<number[i]) {
        mayor=number[i]
    }
}
    console.log(mayor)
