const mediaAritmeticaSimples  = (...numbers) => {
    let sumNumber = numbers.reduce((accum, num) => accum + num, 0)
    let totalNumber = numbers.length
    return sumNumber / totalNumber
}

const mediaAritmeticaPonderada = (...mediaPonderadaArray) => {
    let somaTotal = 0
    let somaDivisor = 0
    let total = 0
    mediaPonderadaArray.forEach(element => {
        for (let i = 0;i <= mediaPonderadaArray.length +1 ;i++){
            somaTotal += element[i].n * element[i].p
            somaDivisor += element[i].p
        }
        total = somaTotal / somaDivisor
    })
    return total
}

const mediana = (...numbers) => {
    length = numbers.length
    if (length % 2 == 0){
        let indice1 = length / 2
        let indice2 = (length / 2) - 1
        let soma = mediaAritmeticaSimples(numbers[indice1], numbers[indice2])
        return soma
    } else {
        let indice = Math.ceil(length / 2)
        return numbers[indice - 1]
    }
}


const moda = (...numbers) => {
    let contador = 1
    let array = []

    const numberInOrder = numbers.sort()
    
    for (let i = 0;i < numberInOrder.length;i++){
        const objeto = {}
        if (numberInOrder[i] === numberInOrder[i + 1]){
            contador = contador +1
        } else {
            const numero = numberInOrder[i]
            const qtdVezes = contador
            objeto.numero = numero
            objeto.qtdVezes = qtdVezes
            array.push(objeto)
            contador = 1
        }
    }

    let result = CheckModa(array)
    console.log(result)
}

function CheckModa(array){
    let numero
    let maiorQtd = 0
    array.forEach(element =>{
        if (element.qtdVezes > maiorQtd){
            maiorQtd = element.qtdVezes
            numero = element.numero
        }
    })
    return [numero,maiorQtd]
}
/*
console.log (mediaAritmeticaSimples(2,6,3,7,4))
console.log (mediaAritmeticaPonderada([{ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }]))
console.log (mediana(2, 4, 5, 7, 42, 99))
*/

moda (1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)