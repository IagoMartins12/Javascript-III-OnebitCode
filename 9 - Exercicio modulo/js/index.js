import calculate  from "./calculate.js"
import copy from "./copy.js"
import { keyHandlerPress } from "./keyHandler.js"
import themeswitcher from "./themeswitcher.js"

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(keyHandlerPress)

document.getElementById('equal').addEventListener('click',calculate)

document.getElementById('clear').addEventListener('click',function(){
   input.value = ''
   input.focus() 
})

input.addEventListener('keydown', function(ev){
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }

    if (ev.key ==='Backspace'){
        input.value = input.value.slice(0, -1)
    }
    
    if (ev.key ==='Enter'){
        calculate
    }
})

document.getElementById('copyToClipboard').addEventListener('click', copy )

document.getElementById('themeSwitcher').addEventListener('click', themeswitcher)