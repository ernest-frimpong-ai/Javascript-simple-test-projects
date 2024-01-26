const number = document.querySelector('#number')
const increase = document.querySelector('#increase')
const decrease = document.querySelector('#decrease')
const clear = document.querySelector('#reset')

let currentNumber = 0

function increment(){
    number.textContent = currentNumber
}

increase.addEventListener('click',()=> {
    currentNumber ++;
    increment()
})

decrease.addEventListener('click',()=>{
    currentNumber --;
    increment()
})

function reset(){
    reset.textContent = '0'
}

clear.addEventListener('click',reset)
