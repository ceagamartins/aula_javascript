/*
Exercício 1
Faça um programa que leia 2 números, some-os e exiba uma mensagem
com o resultado comparando se os valores são maiores, menores ou iguais a 100.
*/

function comparar(){
    let n = document.querySelector("input#txtn")
    let res = document.querySelector("h1#res")
    n = Number(n.value)
    if (n > 100){
        res.innerHTML = `O número é maior que 100`
    }else if (n == 100){
        res.innerHTML = `O número é igual a 100`
    }else{
        res.innerHTML = `O número é menor que 100`
    }
}