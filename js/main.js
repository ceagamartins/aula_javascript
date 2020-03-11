/*
var nome = "Christian Martins"
var idade = 29
var idade2 = 10
var frase = "Japão é o melhor time do mundo"
//alert(`${nome} tem ${idade} anos`)
//alert(idade + idade2)
console.log(nome)
console.log(idade+idade2)
console.log(frase.toLowerCase())
*/

/*
var lista = ["Maçã", "Pêra", "Laranja"]
lista.push("Uva")
//lista.pop("Uva")
console.log(lista)
console.log(lista.toString())
console.log(lista.join(", "))
*/

/*
var fruta ={nome:"Maçã", cor:"Vermelha"}
console.log(fruta.cor)
*/

/*
var frutas = [{nome:"Maçã", cor:"Vermelha"}, {nome:"Uva", cor:"Roxa"}]
console.log(frutas)
console.log(frutas[1].nome)
*/

/*
var idade = prompt("Qual sua idade?")
if (idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}
*/

/*
var count = 0
while(count<=5){
    console.log(count)
    alert(count)
    count ++
}
*/

/*
var count
for(count=0; count<=5; count++){
    console.log(count)
    alert(count)
}
*/

/*
var d = new Date()
alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes())
var nome = "Christian Martins"
var idade = 29
var idade2 = 10
    //alert(`${nome} tem ${idade} anos`)
    ///alert(idade + idade2)


function soma(n1, n2) {
    return n1 + n2
}

function validaIdade(idade) {
    var validar
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar
}

var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade))
    //alert(soma(5, 10))
    */

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
        //console.log(document.getElementById("agradecimento"))
        //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://globallabs.academy/")
    //window.location.href = "https://www.google.com.br/"
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
