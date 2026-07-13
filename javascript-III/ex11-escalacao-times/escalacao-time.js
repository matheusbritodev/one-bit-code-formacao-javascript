/* Aqui está a transcrição da imagem "image_b7e782.png":
Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

    - Escalar um jogador

        Informar a posição do jogador a ser escalado para o time.

        Informar o nome do jogador.

        Informar o número da camisa do jogador.

        Ter um botão "Escalar" que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.

        Após o jogador ser escalado os campos de texto devem ser limpos.

    - Remover um jogador

        Informar o número da camisa do jogador.

        Ter um botão "Remover" que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.

        Após o jogador ser removido o campo de texto deve ser limpo.

Dica: lembrando que é possível acessar o texto de um input através da propriedade value. */

function escalarJogador() {
    const ul = document.querySelector('.escalacao-time')
    
    const jogadorNome  = document.getElementById('nome-jogador')
    const jogadorPosicao  = document.getElementById('posicao-jogador')
    const jogadorNumero  = document.getElementById('numero-camisa')
    
    const confirmacao = confirm(`
        Deseja escalar esse jogador?
        | Jogador: ${jogadorNome.value} 
        | Posição: ${jogadorPosicao.value} 
        | Número da camisa: ${jogadorNumero.value}`)
    
    if (confirmacao) {
        const adicionarJogadorTime = document.createElement('li')

        adicionarJogadorTime.id = `jogador-${jogadorNumero.value}`
        
        adicionarJogadorTime.innerText = `Nome: ${jogadorNome.value} | Posição: ${jogadorPosicao.value} | Número da camisa: ${jogadorNumero.value}`
        
        ul.appendChild(adicionarJogadorTime)
        
        jogadorNome.value = ''
        jogadorPosicao.value = ''
        jogadorNumero.value = ''
    }
}

function removerJogador () {
    const numeroRemover = document.getElementById('numero-remover-jogador')

    const li = document.getElementById(`jogador-${numeroRemover.value}`)

    
    console.log(li)
    if (!li) {
        alert('Jogador não encontrado!')
    } else {
        const confirmacao = confirm(`Deseja remover o jogador de camisa número '${numeroRemover.value}'?`)

        if (confirmacao) {
            li.remove()
            alert('Jogador removido com sucesso')
            numeroRemover.value = ''
            return
        } else {
            alert('Remoção de jogador cancelada!')
        }
    }
}