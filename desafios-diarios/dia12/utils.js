import { qtdJogadoresTime } from "./dom-renderer.js"

export function calcultarTotalTimes (jogadoresLinha, qtdJogadoresTime) {
    const totalTimes = Math.floor(jogadoresLinha.length / qtdJogadoresTime.value)
    return totalTimes
}