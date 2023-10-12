let adicionar = document.getElementById("adicionar")
let remover = document.getElementById("remover")
let limpar = document.getElementById("limpar")

let mostrar = document.getElementById("mostrar_valor")

let contador = 0

function clickDeAdiconar(){
    contador++
    mostrar.textContent = `Quantidade de produto: ${contador}`;
    console.log(contador)
}

function clickDeRemover(){
    if(contador > 0){
        contador--
        mostrar.textContent = `Quantidade de produto: ${contador}`;
        console.log(contador)
    }
}

function clickDeLimpar(){
    contador = 0
    mostrar.textContent = `Quantidade de produto: ${contador}`;
    console.log(contador)
}

adicionar.addEventListener('click', clickDeAdiconar)
remover.addEventListener('click', clickDeRemover)
limpar.addEventListener('click', clickDeLimpar)