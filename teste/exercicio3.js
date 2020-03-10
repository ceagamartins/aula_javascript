/*
Exercício 3
Faça um programa que leia um vetor numérico de 10 posições.
Depois, ordene o vetor em ordem crescente e apresente os elementos ordenados.
*/

let num = document.getElementById('txtnum')
let lista = document.getElementById('slista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value}`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML = `O conteúdo do vetor é: ${valores.join(', ')} </br>`
        for (let i = 0; i < valores.length; i++) {
            for (let j = i; j > 0 && valores[j] < valores[j - 1]; j--) {
                let aux = valores[j - 1]
                valores[j - 1] = valores[j]
                valores[j] = aux
            }
        }
        res.innerHTML += `O vetor ordenado é: ${valores.join(', ')}`
    }
}