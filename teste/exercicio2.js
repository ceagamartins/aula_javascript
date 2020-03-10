/*
Exercício 2
Escreva um programa que calcule e mostre a tabuada (até 10x)
de um número qualquer, digitado pelo usuário.
*/

function calcular() {
    let n = document.querySelector("input#txttab")
    let res = document.querySelector("div#res")
    n = Number(n.value)

    for (let cont = 0; cont < 11; cont++) {
        res.innerHTML += `${n} x ${cont} = ${n * cont} </br>`
    }
}
