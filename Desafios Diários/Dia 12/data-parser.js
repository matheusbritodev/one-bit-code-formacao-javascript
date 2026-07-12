export function extrairDadosJogador (listaJogadores) {
    const listaTratada = listaJogadores.value.toLowerCase().split("\n")
    
    const jogadoresTotais = listaTratada.map((jogador) => {
            const jogadorFormatado = jogador.trim() 
            const nome = jogadorFormatado.slice(0, -1).trim()
            const peso = jogadorFormatado.slice(-1)
            return {nome, peso}
        })
    const goleiros = jogadoresTotais.filter((jogador) => jogador.peso === "g")
    const jogadoresLinha = jogadoresTotais
        .filter((jogador) => jogador.peso !== "g")
        .map(({ nome, peso }) => {
            return {nome, peso: Number(peso)}
        })

    return {jogadoresLinha, goleiros}
}