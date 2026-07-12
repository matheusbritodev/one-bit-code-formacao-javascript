/* Menu Interativo

Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado. */

let opcao = 0

do {
    opcao = Number(prompt(`
        Escolha uma das funcionalidades a seguir:
        1) Opção 1
        2) Opção 2
        3) Opção 3
        4) Opção 4
        5) Encerrar
        `))
    switch (opcao) {
        case 1:
            window.alert("A opção '1' foi escolhida!")
            break
        case 2:
            window.alert("A opção '2' foi escolhida!")
            break
        case 3:
            window.alert("A opção '3' foi escolhida!")
            break
        case 4:
            window.alert("A opção '4' foi escolhida!")
            break
        case 5:
            window.alert("A opção '5' foi escolhida!")
            window.alert("Encerrando o programa...")
            break
        default:
            window.alert("Opção inválida! Escolha de 1 a 5.");
            break
    }

} while (opcao !== 5)
