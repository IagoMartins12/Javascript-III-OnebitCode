//O spread serve primordialmente para clonar objetos e arrays. 
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
//Caracterizado pelo '...', o spread basicamente percorre todo uma variavel iteravel e espalha. Neste exemplo abaixo, o spread irá percorrer o array e deixar tudo em uma só string
console.log(...towns)
//Quando damos um indice unico pro spread, ele percorre todo o valor daquele indice e espalha o valor que esta contido la 
console.log(...towns[0])

/*Quando apontamos um novo array com base em um array antigo desta maneira, qualquer modificação que fizermos no novo array, irá afetar o array antigo tambem. Pois o array novo
se trata de uma referencia do antigo */
const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({ towns, townsCopy })

//Porem quando usamos o spread pra isso, a modificação que fizermos no novo array, vai ficar contida apenas no novo array. Não irá afetar o antigo
const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({ towns, townsCopy, townsClone })

//O mesmo se aplica aos objetos 
const townsObj = { ...towns }
const townsObjClone = { ...townsObj }

townsObjClone.test = 'Test'

console.log({ townsObj, townsObjClone })