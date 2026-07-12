/* Pilha de Cartas

Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. */
let baralho = ["carta 1","carta 2","carta 3","carta 4","carta 5","carta 6","carta 7","carta 8","carta 9","carta 10"]

let opcao = ""

do {
    opcao = prompt(`
        Quantidade de cartas: ${baralho.length}
    
        Escolha uma opção:
        1) Adicionar uma carta
        2) Puxar uma carta
        3) Sair
        `).toLowerCase()
    switch(opcao) {
        case "1":
            let novaCarta = prompt("Qual o nome da carta? ").toLowerCase()
            
            if (baralho.includes(novaCarta)) {
                window.alert("Essa carta já existe no baralho!")
                break
            } else {
                //Adicionar uma carta ao final
                baralho.push(novaCarta)
                window.alert(`A carta foi adicionada ao topo do baralho!`)
                console.log(baralho)
                break
            }
            
        case "2":
            if (baralho.length == 0) {
                window.alert("Todas as cartas foram puxadas!")
            } else {
                //remover uma carta do final
                let cartaPuxada = baralho.pop(baralho[baralho.length - 1])
                
                window.alert(`A carta foi puxada do topo do baralho!\nCarta puxada: ${cartaPuxada}`)
                console.log(baralho)
                break
            }
            
        case "3":
            window.alert("Encerrando programa...")
            break
            
        default:
            window.alert("Opção inválida")
            break
                }

} while (opcao !== "3")
