let adicionar = document.getElementById("adicionar")
let quantidade = document.getElementById("quantidade")
let remover = document.getElementById("remover")
let preco = document.getElementById("preco")
let valorTotal = document.getElementById("valor_total")


let contador = 0
let precoProduto = 12.99

function adicionarProdutos(){
    contador++
    quantidade.textContent = `${contador}`;
    console.log(contador)
    let preco = contador * precoProduto
    console.log(preco)
    let precoFormatado = Number(preco.toFixed(2));
    valorTotal.textContent = `VALOR TOTAL:  R$ ${precoFormatado}`;
}

function removerProdutos(){
    if(contador > 0){
        contador--
        quantidade.textContent = `${contador}`;
        console.log(contador)

        let preco = precoProduto * contador
        let precoFormatado = Number(preco.toFixed(2))
        valorTotal.textContent = `VALOR TOTAL:  R$ ${precoFormatado}`;
    }

}

adicionar.addEventListener('click', adicionarProdutos)
remover.addEventListener('click', removerProdutos)