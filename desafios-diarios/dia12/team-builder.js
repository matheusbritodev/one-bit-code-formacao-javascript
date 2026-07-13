import { ulGoleiros, ulsDosTimes  } from "./dom-renderer.js"

function adicionarJogadoresLinha (jogadoresLinha, totalDeTimes) {
    while ((jogadoresLinha.length > 0)) {
        ulsDosTimes.reverse()
        
        for (let i = 0; i < totalDeTimes; i++) {
            if (jogadoresLinha.length === 0) {
                break
            }
            const li = document.createElement("li")
            li.innerText = jogadoresLinha[0].nome
            ulsDosTimes[i].appendChild(li)
            jogadoresLinha.shift()
        }
    }
}

function adicionarGoleiros (goleiros) {
    for (let i = 0; i < goleiros.length; i++) {
        const li = document.createElement("li")
        li.innerText = goleiros[i].nome
        ulGoleiros.appendChild(li)
    }
}

export { adicionarJogadoresLinha, adicionarGoleiros }