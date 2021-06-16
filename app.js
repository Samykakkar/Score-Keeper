const p1button = document.querySelector('#p1button')
const p2button = document.querySelector('#p2button')
const p1dispaly = document.querySelector('#p1display')
const p2dispaly = document.querySelector('#p2display')
const reset=document.querySelector('#reset')

let p1score = 0
let p2score = 0
let winningscore = 5
let isgameover = false
p1button.addEventListener('click', function () {
    if (!isgameover) {
        p1score += 1
        if (p1score === winningscore) {
            isgameover = true
        }
        p1display.textContent = p1score
    }

})


p2button.addEventListener('click', function () {
    if (!isgameover) {
        p2score += 1
        if (p2score === winningscore) {
            isgameover = true
        }
        p2display.textContent = p2score
    }

})

reset.addEventListener('click', function(){
    isgameover=false
    p1score=0
    p2score=0
    p1display.textContent=0
    p2dispaly.textContent=0
})
