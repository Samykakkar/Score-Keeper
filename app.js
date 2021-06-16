const p1button= document.querySelector('#p1button')
const p2button= document.querySelector('#p2button')
const p1dispaly=document.querySelector('#p1display')
const p2dispaly=document.querySelector('#p2display')

let p1score=0
let p2score=0
p1button.addEventListener('click', function(){
    p1score+=1
    p1display.textContent=p1score
})


p2button.addEventListener('click', function(){
    p2score+=1
    p2display.textContent=p2score
})
