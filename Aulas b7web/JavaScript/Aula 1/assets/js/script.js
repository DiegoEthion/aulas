let nome = "Diego Oliveira Gonçalves" // string
let idade = 34 // number
let logado = true //boolean
let lista = ["um","dois", "tres"] //array
let nomeCompleto = {Nome:nome, Idade:idade} //object

console.log(nome)
console.log(idade + " Anos")


if (logado === true) {
    console.log("Bom dia senhor " + nome)
    document.getElementById('titulo').innerHTML = ("Bom dia senhor " + nome + "de " + idade + " anos");

}else{
    console.log("voce não está logado por favor caça login " + nome)
    document.getElementById('titulo').innerHTML = ("Você não está logado por favor faça login " + nome)

}   
console.log("o tipo da variavel " + nome + " é " + typeof nome) 
console.log(nomeCompleto) 

