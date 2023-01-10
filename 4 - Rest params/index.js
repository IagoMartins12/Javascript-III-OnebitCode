//Utilizando o rest params para não limitar a quantidade de parametros de uma função. Quando usamos o rest params, podemos passar quantos parametros forem necessarios 
function sum(...numbers) {
    return numbers.reduce((accum, num) => accum + num, 0)
  }
  
  console.log(sum(1, 1))
  console.log(sum(2, 2, 2, 2, 2))
  console.log(sum(32, 5, 74, 7, 1, 9, 90))