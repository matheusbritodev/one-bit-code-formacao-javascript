/* Sistema de Vagas de Emprego

Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

    Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistemaListar vagas disponíveisCriar um nova vagaVisualizar uma vagaInscrever um candidato em uma vagaExcluir uma vagaSair
    Listar vagas disponíveis
    Criar um nova vaga
    Visualizar uma vaga
    Inscrever um candidato em uma vaga
    Excluir uma vaga
    Sair

    feito - A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.

    feito - A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.

    feito - A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.

    feito - A opção de inscrever um candidato em uma vaga deve pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.

    A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções. */

function listarVagasDisponiveis() {
    if (vagasEmprego.length === 0) {
        return "Nenhuma vaga cadastrada no momento."
    }

    const textoTodasAsVagas = vagasEmprego.reduce(function (textoAcumulado, vaga, indice) {
        
        textoAcumulado += `Índice: ${indice + 1}\n`;
        textoAcumulado += `Vaga: ${vaga.vaga}\n`;
        textoAcumulado += `Quantidade de candidatos: ${vaga.candidatos.length}\n`;
        textoAcumulado += `--------------------------------------\n`
        
        return textoAcumulado;
        
    }, "")

    return textoTodasAsVagas
}

function criarNovaVaga () {
    let nomeVaga = prompt("Nome da vaga: ")
    let descricaoVaga = prompt("Descricao: ")
    let dataLimite = prompt("Data limite: ")
    
    let confirmacao = window.confirm(`NOME DA VAGA: ${nomeVaga}
        \nDESCRIÇÃO DA VAGA: ${descricaoVaga}
        \nDATA LIMITE: ${dataLimite}
        \n\nDeseja confirmar?`)

    if (confirmacao) {
        vagasEmprego.push({
            vaga: nomeVaga,
            descricao: descricaoVaga,
            data_limite: dataLimite,
            candidatos: []
        })
        return `Vaga ${nomeVaga} criada com sucesso!`
    } else {
        return "Criação da vaga interrompida"
    }
}

function visualizarVaga () {
    const indiceVaga = parseInt(prompt("Digite o indice da vaga: ")) - 1

    if (!vagasEmprego[indiceVaga]) {
    return "Erro: vaga não encontrada!" 
    }

    return `
    indice: ${indiceVaga + 1}
    vaga: ${vagasEmprego[indiceVaga].vaga}
    descricao: ${vagasEmprego[indiceVaga].descricao}
    data limite: ${vagasEmprego[indiceVaga].data_limite}
    quantidade de candidatos: ${vagasEmprego[indiceVaga].candidatos.length}
    nomes dos candiatos: ${vagasEmprego[indiceVaga].candidatos}`

}

function inscreverCandidato () {
    const nomeCandidato = prompt("Nome do candidato: ")
    const indiceVaga = parseInt(prompt("Indice da vaga: ")) - 1
    
    if (!vagasEmprego[indiceVaga]) {
        return "Erro: vaga não encontrada"
        
    }

    const confirmacao = confirm(`Vaga: ${vagasEmprego[indiceVaga].vaga}\nDescricao: ${vagasEmprego[indiceVaga].descricao}\nData limite: ${vagasEmprego[indiceVaga].data_limite}\n\nDeseja inscrever o candidato "${nomeCandidato}" nessa vaga?`)

    if (confirmacao) {
        vagasEmprego[indiceVaga].candidatos.push(nomeCandidato)
        return "Inscrição realizada com sucesso!"
    } else {
        return `A inscrição do candidato ${nomeCandidato} foi cancelada!`
    }
}

function excluirVaga () {
    const indiceVaga = parseInt(prompt("Indice da vaga: ")) - 1

    if (!vagasEmprego[indiceVaga]) {
        return "Erro: vaga não encontrada"
    }

    let confirmacao = window.confirm(`
        indice: ${indiceVaga + 1}
        vaga: ${vagasEmprego[indiceVaga].vaga}
        descricao: ${vagasEmprego[indiceVaga].descricao}
        data limite: ${vagasEmprego[indiceVaga].data_limite}
        quantidade de candidatos: ${vagasEmprego[indiceVaga].candidatos.length}
        nomes dos candiatos: ${vagasEmprego[indiceVaga].candidatos}
        \nDeseja confirmar?`)

    if (confirmacao) {
        vagasEmprego.splice(indiceVaga, 1)
        return "Vaga excluída com sucesso!"
    } else {
        return "Exclusão cancelada"
    }
}

const vagasEmprego = [{
        vaga: "Engenheiro de Software Pleno",
        descricao: "Atuação focada na arquitetura mobile do aplicativo.",
        data_limite: "01/09/2026",
        candidatos: ["Matheus Brito", "Vinicius"]
    }]
let escolha, indiceVaga = 0

do {
    escolha = Number(prompt("Opções:\n\n1 - Listar vagas disponíveis\n2 - Criar nova vaga\n3 - Visualizar vaga\n4 - Inscrever candidato\n5 - Excluir vaga\n6 - Sair"))

    switch (escolha) {
        case 1:
            alert(listarVagasDisponiveis())
            break
        case 2:
            alert(criarNovaVaga())
            break
        case 3:
            alert(visualizarVaga())
            break
        case 4:
            alert(inscreverCandidato())
            break
        case 5:
            alert(excluirVaga())
            break
        case 6:
            alert("Ëncerrando...")
            break
        default:
            alert("Opção inválida!")
            break
    }

} while (escolha !== 6)