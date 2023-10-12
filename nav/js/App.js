let menu = document.getElementById("menu")
let buttonMenu = document.getElementById("button_menu")


let caixa = document.querySelector(".hidden")

buttonMenu.addEventListener('click', function(){
    if(caixa.classList.contains('open')){
        caixa.classList.remove('open')
    }else{
        caixa.classList.add('open')
    }
})
