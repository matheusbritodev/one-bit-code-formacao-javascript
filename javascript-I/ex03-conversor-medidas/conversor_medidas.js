/* Conversor de Medidas

Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

    milímetro (mm)
    centímetro (cm)
    decímetro (dm)
    decâmetro (dam)
    hectômetro (hm)
    quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso) */

const valorInicial = parseFloat(prompt("Informe um valor em metros: "))
const escolha = parseFloat(prompt(`
    Deseja converter para qual unidade de medida?
    [DIGITE O NÚMERO REFERENTE] 

    1) mm - milímetro
    2) cm - centímetro
    3) dm - decímetro
    4) dam - decâmetro
    5) hm - hectômetro
    6) km - quilômetro
    `))

switch (escolha) {
    case 1:
        window.alert("Valor em metros: " + valorInicial + "\nValor convertido: " + valorInicial * 1000 + " mm")
        break
    case 2:
        window.alert("Valor em metros: " + valorInicial + "\nValor convertido: " + valorInicial * 100 + " cm")
        break
    case 3:
        window.alert("Valor em metros: " + valorInicial + "\nValor convertido: " + valorInicial * 10 + " dm")
        break
    case 4:
        window.alert("Valor em metros: " + valorInicial + "\nValor convertido: " + valorInicial / 10 + " dam")
        break
    case 5:
        window.alert("Valor em metros: " + valorInicial + "\nValor convertido: " + valorInicial / 100 + " hm")
        break
    case 6:
        window.alert("Valor em metros: " + valorInicial + "\nValor convertido: " + valorInicial / 1000 + " km")
        break
    default:
        window.alert("Você precisa escolher uma opção dentre as alternativas!")
}

