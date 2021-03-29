//12.Leer un número entero y determinar cuantas veces tiene el digito 1

let number = 1214

let digito1= (parseInt((number/100)/10))
let digito2= (parseInt(number/100))%10
let digito3= (parseInt((number %100)/10))
let digito4= (parseInt(number%100)%10)
let contador = 0


if (digito1===1) {
    contador+=1
}if (digito2===1){
    contador+=1
}if (digito3===1){
    contador+=1
}if (digito4===1){
    contador+=1
}

console.log(`El numero 1 se repite: ${contador} veces`)


