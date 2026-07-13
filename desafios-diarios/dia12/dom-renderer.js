const listaJogadores = document.getElementById("lista-jogadores")
const qtdJogadoresTime = document.getElementById("qtd-por-time")

const botaoGerarTimes = document.getElementById("btn-gerar")
const botaoApagarTudo = document.getElementById("btn-limpar")

const divPai = document.getElementById("container-times")

const ulsDosTimes = [] 
const ulGoleiros = document.getElementById("lista-goleiros")
const divGoleiros = document.getElementById("container-goleiros")

const h2 = document.createElement("h2")

function limparTudo () {
    botaoGerarTimes.disabled = false
    divPai.innerText = ""
    ulGoleiros.innerText = ""
    qtdJogadoresTime.value = ""
    ulsDosTimes.splice(0)
    divGoleiros.removeChild(h2)
}

function gerarTagsParaArmazenarTimes (totalDeTimes, divPai) {
    h2.innerText = "Goleiro"
    divGoleiros.prepend(h2)
    for (let i = 0; i < totalDeTimes; i++) {
        const h2 = document.createElement("h2")
        h2.innerText = "TIME " + Number(i + 1)
        const ul = document.createElement("ul")
        ul.id = `time-${i + 1}`
        divPai.append(h2, ul)
        ulsDosTimes.push(ul)
    }
}

export { listaJogadores, qtdJogadoresTime, botaoGerarTimes, botaoApagarTudo, divPai, ulsDosTimes, ulGoleiros, limparTudo, gerarTagsParaArmazenarTimes }