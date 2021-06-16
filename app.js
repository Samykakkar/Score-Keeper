const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1display')

}
const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2display')

}



const resetbtn = document.querySelector('#reset')
const winningscoreselect = document.querySelector('#playto')


let winningscore = 3
let isgameover = false



function updatescore(player, opponent) {
    if (!isgameover) {
        player.score += 1
        if (player.score === winningscore) {
            isgameover = true
           // player.display.classlist.add('has-text-success')
            //opponent.display.classlist.add('has-text-danger')
            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.textContent = player.score
    }

}


p1.button.addEventListener('click', function () {
    updatescore(p1,p2)

})


p2.button.addEventListener('click', function () {
    updatescore(p2,p1)
})

winningscoreselect.addEventListener('change', function () {
    winningscore = parseInt(this.value)
    reset()
})

resetbtn.addEventListener('click', reset)


function reset() {
    isgameover = false
    for(let p of [p1,p2]){
        p.score=0
        p.display.textContent=0
        //p.display.classlist.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false
    }
    p1.score = 0
    p2.score = 0
    p1.display.textContent = 0
    p2.display.textContent = 0
   // p1.display.classlist.remove('has-text-success', 'has-text-danger')
    //p2.display.classlist.remove('has-text-success', 'has-text-danger')
    p1.button.disabled = false
    p2.button.disabled = false
}

