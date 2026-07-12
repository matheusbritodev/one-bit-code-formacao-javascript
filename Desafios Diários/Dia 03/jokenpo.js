let resultado = ""
let jogadas = ["Pedra", "Papel", "Tesoura"]

let jogada = parseInt(prompt(`
    Informe o número da jogada:
    1) Pedra
    2) Papel
    3) Tesoura
    4) Sair
    `))

let jogadaPc = Math.floor(Math.random() * 3) + 1

if (jogada === jogadaPc) {
    window.alert("Empate!")
} else if ((jogada === 1 && jogadaPc === 3) || (jogada === 2 && jogadaPc === 1) || (jogada === 3 && jogadaPc === 2)) {
    resultado = "Venceu!"
} else {
    resultado = "Perdeu!"
}

if (jogada === 4) {
    window.alert("Jogo encerrado!")
} else {
    window.alert("Sua jogada: " + jogadas[jogada - 1] + 
        "\nJogada do Adversário: " + jogadas[jogadaPc - 1] + 
        "\nVocê " + resultado)
}
