/* Visitando Novas Cidades

Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou. */ 


const nomeTurista = String(prompt("Nome: "))

let resposta = String(prompt("Já visitou alguma cidade? (s/n)")).toLowerCase() 
let cidades = ""
let cont = 0

while (resposta == "s") {
    let cidade = String(prompt("Qual o nome da cidade?"))
    cidades += " - " + cidade + "\n"
    cont ++

    resposta = String(prompt("Já visitou alguma outra cidade? ")).toLowerCase() 
}

window.alert("Nome do Turista: " + nomeTurista + "\nQuantidade de cidades visitadas: " + cont + "\nCidades visitadas: \n"+ cidades)