//6.Leer un número enteros de dos digitos y determinar si un digito es múltiplo del otro.

let number = 48


let digito1= parseInt(number/10)
let digito2= number %10 

if ((digito1%digito2)==0) {
    console.log(`${digito1} Es multiplo de ${digito2}`)
}else{
    console.log(`${digito1} No es multiplo de ${digito2}`)
}

if ((digito2%digito1)==0) {
    console.log(`${digito2} Es multiplo de ${digito1}`)
}else{
    console.log(`${digito2} No es multiplo de ${digito1}`)
}

