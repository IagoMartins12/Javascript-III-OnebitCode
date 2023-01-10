/*Quando utilizamos o a || b, o javascript irá ignorar qualquer valor que esteja dentro desses requisitos: 
    string vazia: “”
    número 0 (zero)
    false
    null
    undefined
    NaN

Porem se utilizarmos o ?? ao inves do ||, o javascript so irá ignorar se for NULL ou undefined
*/
//O operador de coalescencia nula retorna a operação que esta acontencendo do lado direito caso o lado esquerdo seja null ou undefined. Caso contrario, ele retorna o lado esquerdo
const a = 0

const b = null 

const c = 'Teste'

console.log({ a, b })

b = a ?? 42 //Irá retornar o 42, pois o 0 irá contar como se fosse verdadeiro

console.log({a, b})


console.log({c})


