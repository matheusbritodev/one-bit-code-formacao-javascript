import { extrairDadosJogador } from "./data-parser.js"
import { listaJogadores, qtdJogadoresTime, botaoGerarTimes, botaoApagarTudo, divPai, ulsDosTimes, ulGoleiros, limparTudo, gerarTagsParaArmazenarTimes } from "./dom-renderer.js"
import { adicionarJogadoresLinha, adicionarGoleiros } from "./team-builder.js"
import { calcultarTotalTimes } from "./utils.js"

function main () {
    const { jogadoresLinha, goleiros } = extrairDadosJogador(listaJogadores)
    if (jogadoresLinha.length % qtdJogadoresTime.value !== 0) {
        alert("A quantidade não permite dividir os times igualmente!")
        return
    }
    const totalTimes = calcultarTotalTimes(jogadoresLinha, qtdJogadoresTime)
    const jogadoresLinhaOrdenado = jogadoresLinha.sort((a, b) => b.peso - a.peso)
    gerarTagsParaArmazenarTimes(totalTimes, divPai)
    adicionarJogadoresLinha(jogadoresLinha, totalTimes)
    adicionarGoleiros(goleiros)
    botaoGerarTimes.disabled = true
}

botaoGerarTimes.addEventListener("click", main)

botaoApagarTudo.addEventListener("click", limparTudo)
