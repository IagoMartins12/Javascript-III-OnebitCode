function normalSum(a, b) {
  return a + b
}

console.log(`Soma normal: ${normalSum(2, 2)}`)
//Declarando função da maneira convencional
const anonymousSum = function (a, b) {
  return a + b
}

console.log(`Soma anônima: ${anonymousSum(2, 2)}`)

//Declarando função com arrow function
const arrowSum = (a, b) => {
  return a + b
}

console.log(`Soma arrow function: ${arrowSum(2, 2)}`)

//Caso tenha apenas uma linha de codigo, podemos simplificar ainda mais
const subtract = (a, b) => a - b

console.log(`Subtração: ${subtract(5, 2)}`)

//E caso tenha apenas um parametro, podemos tirar os ()
const double = n => `O dobro de ${n} é ${n * 2}`

const number = 21
console.log(`Dobro: ${double(number)}`)

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

//Exemplo de arrow function com high order function
const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)