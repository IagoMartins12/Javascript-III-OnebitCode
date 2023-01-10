const input = document.getElementById('input')

export function keyHandlerPress(charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value 
        input.value += value
    })
}