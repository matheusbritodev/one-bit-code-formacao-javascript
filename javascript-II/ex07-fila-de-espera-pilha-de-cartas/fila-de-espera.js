/* Fila de Espera

Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. */

let pacientes = ["Matheus", "Vinicius", "Pedro", "Rômulo"]
let opcao = ""

do {
    let ordenado = "\n"
    for (let i = 0; i <= pacientes.length - 1; i++){
        ordenado += "        " + (i + 1) + "º - " + pacientes[i] + "\n"
    }
    opcao = String(prompt(`
        Fila de espera:
        ${ordenado}
        Escolha a opcao abaixo:
        1) Novo Paciente
        2) Consultar Paciente
        3) Sair
        `))
    switch (opcao) {
        case "1":
            //Adiciona ao final da fila
            let novoPaciente = String(prompt("Digite o nome do novo paciente: "))
            pacientes.push(novoPaciente)
            window.alert("O paciente " + novoPaciente + " foi adicionado com sucesso!")
            break
        case "2":
            //remove o primeiro da fila
            if (pacientes.length == 0) {
                window.alert("Não há mais pacientes a espera de consultas!")
            } else {
                window.alert("O paciente " + pacientes[0] + " finalizou sua consulta!")
                pacientes.shift()
            }
            break
        case "3":
            window.alert("Encerrando programa...")
            break
        default:
            window.alert("Opção inválida!")
            break
    }
} while (opcao !== "3")