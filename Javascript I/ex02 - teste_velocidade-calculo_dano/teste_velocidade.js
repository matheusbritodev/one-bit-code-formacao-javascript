    /* Teste de Velocidade

Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso) */

const veiculo1 = prompt("Informe o nome do primeiro veículo:")
const velocidade1 = parseFloat(prompt("Digite a velocidade do veiculo 1:"))

const veiculo2 = prompt("Informe o nome do segundo veículo:")
const velocidade2 = parseFloat(prompt("Digite a velocidade do veiculo 2:"))

if (velocidade1 > velocidade2) {
    alert(`${veiculo1} é mais rapido!`)
} else if (velocidade1 < velocidade2) {
    alert(`${veiculo2} é mais rapido!`)
} else {
    alert("Os dois estão com a mesma velocidade!")
} 
