//16.Leer 10 números enteros, almacenarlos en un vector y determinar en qué posiciones se encuentran los números terminados en O

 let number= [3,30,17,4,5,32,20,32,9,10]


for (let i=0; i<number.length; i++) {
    
    if (number[i]%10==0) {
    console.log(` Posicon ${i}`)
    }

}

