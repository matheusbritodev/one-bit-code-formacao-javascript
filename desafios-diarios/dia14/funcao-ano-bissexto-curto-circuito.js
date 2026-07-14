/*Ano Bissexto: Desafio dos Séculos

Crie uma função que determine se um ano é bissexto ou não. Um ano bissexto é divisível por 4, exceto anos seculares (divisíveis por 100) que não são divisíveis por 400. Por exemplo, 1900 não é bissexto, mas 2000 é. A função deve receber um inteiro positivo representando o ano e retornar True se for bissexto, False caso contrário. Considere anos de 1 a 9999. */

function anoBissexto (ano) {
    return false || ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0)
}

console.log(anoBissexto(2024))