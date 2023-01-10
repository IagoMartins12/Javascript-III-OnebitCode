//Os modulos serve para exportar e importar funções do JavaScript para outros arquivos JS
//Por exemplo, digamos que eu tenho 2 arquivos JS separados, e precise inserir uma função que existe no primeiro, no segundo. Nesse caso, usamos os modulos 

//Usando commomJs: 
//Com o common, precisamos usar o module.exports e passar a função que queremos exportar no arquivo origem, e no arquivo destino a gente cria uma variavel 
//e passa o require usando o caminho do arquivo js

const render = require("./render(Common)")
render()

//Usando o ESmodules:

//Antes de iniciarmos os exposts, é necessario inserir o type modulo no script src <script src="js/index.js" type="module" defer></script>
//Com o ESModules, a gente precisa inserir o export antes da function, e depois colocar o import { nomo da função } from 'caminho do arquivo'

import { label, br,input } from "./arquivo(ESModule)"

console.log(label({ for: 'fullname', textContent: 'Nome Completo'}))
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))
console.log(br())