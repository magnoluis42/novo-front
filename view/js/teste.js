let img = document.querySelector("img")
let clicks = document.getElementById("clicks")
let limpar = document.getElementById("limpar")

let contador = 0

function contaClicks(evento){
    contador++

    clicks.textContent = `Cliques: ${contador}`;


    console.log(contador)
}

function limparClicks(){
    contador = 0
    clicks.textContent = `Cliques: ${contador}`;
    console.log(this.contador)
}

img.addEventListener('click', contaClicks);
limpar.addEventListener('click', limparClicks)