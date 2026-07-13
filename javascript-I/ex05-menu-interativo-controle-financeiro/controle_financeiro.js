/* Controle Financeiro

Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa. */


let saldo = parseFloat(prompt("Qual a quantidade de dinheiro inicial disponível? "))
let escolha = 0
do {
    escolha = Number(prompt(`
        Seu saldo é: R$${saldo.toFixed(2)}\n
        Escolha uma opção abaixo:
        1) Depositar dinheiro
        2) Sacar dinheiro
        3) Sair
        `))
    switch (escolha) {
        case 1:
            let quantidadeAdicionar = parseFloat(prompt("Digite o valor a ser depositado: "))
            saldo += quantidadeAdicionar
            window.alert("O dinheiro foi depositado com sucesso!\nSeu novo saldo é R$" + saldo.toFixed(2))
            break
        case 2:
            let quantidadeRemover = parseFloat(prompt("Digite o valor a ser sacado: "))
            saldo -= quantidadeRemover
            window.alert("O dinheiro foi sacado com sucesso!\nSeu novo saldo é R$" + saldo.toFixed(2))
            break
        case 3:
            window.alert("Encerrando Programa...")
            window.alert("Programa Encerrado!")
            break
        default:
            window.alert("Opção inválida! Escolha entre as opções de 1 a 3!")
            break

    }
} while (escolha !== 3)