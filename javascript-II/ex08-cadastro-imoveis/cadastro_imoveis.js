/* Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

    - Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
    - O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
    - O menu deve ter a opção de salvar um imóvel.
    - Para salvar um novo imóvel o programa deve pedir as seguintes informações:
        - Nome do proprietário.
        - Quantidade de quartos.
        - Quantidade de banheiros.
        - Se possui garagem.
    - O menu também deve ter a opção de mostrar todos os imóveis salvos. */

const imovel = []
let opcao = 1
let codigo = 0

do {
    opcao = parseInt(prompt(`
        Imóveis cadastrados: ${imovel.length}

        Escolha:
        1) Salvar Imóvel
        2) Remover Imóvel
        3) Exibir todos os imóveis
        4) Sair
        `))

    switch (opcao) {
        case 1:
            imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
            imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"))
            imovel.banheiros = parseFloat(prompt("Quantos banheiros possui o imóvel?"))
            imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

            const confirma = confirm(
            "Salvar este imóvel?\n" +
            "\nProprietário: " + imovel.proprietario +
            "\nQuartos: " + imovel.quartos +
            "\nBanheiros: " + imovel.banheiros +
            "\nPossui Garagem? " + imovel.garagem
            )

            if (confirma) {
                imovel.push(imovel)
            }
            break
        case 2:
            if (imovel.length > 0) {
                let removerImovel = parseInt(prompt("Digite o código (linha) do imóvel que deseja remover: "))
                
                if (removerImovel >= imovel.length || removerImovel < 0 || isNaN(removerImovel)) {
                    window.alert("Código inválido, tente novamente!")
                } else {
                    imovel.splice(removerImovel, 1)
                    window.alert("Imóvel removido!")
                }
            } else {
                window.alert("Não é possível remover imóveis, pois não há registros!")
            }
            break
        case 3:
            if (imovel.length > 0) {
                console.table(imovel)
            } else {
                window.alert("Não há registros de imóveis!")
            }
            break
        case 4:
            window.alert("Encerrando...")
            break
        default:
            window.alert("Opção inválida! Escolha entre 1 e 4.")
            break
    }
} while (opcao !== 4)