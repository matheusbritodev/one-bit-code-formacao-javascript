/* De acordo com os conhecimentos aprendidos nesse módulo sobre recursos do javascript moderno, crie quatro funções que aceitem qualquer quantidade de parâmetros e utilizando a sintaxe de *arrow functions* para calcular as operações abaixo.

Essas funções devem mostrar o resultado de alguma forma em texto porém não é necessário implementar uma interface. Para testar a função você pode fazer chamadas manuais a ela no javascript ou utilizar o console do navegador (qualquer função incluída na página pode ser chamada diretamente no console). */

// media aritimetica simples
function media (...arr) {
    const soma = arr.reduce((total, num) => total + num, 0)
    const media = soma / arr.length
    return media.toFixed(2)
}
console.log(media(2, 6, 3, 7, 4))

function mediaPonderada (...arr) {
    const numeradorDaMedia = arr.reduce((total, { n: numero, p: peso }) => total + (numero * (peso ?? 1)), 0)
    const denominadorDaMedia = arr.reduce((total, { p: peso }) => total + (peso ?? 1), 0)
    const mediaPonderada = numeradorDaMedia / denominadorDaMedia
    return mediaPonderada.toFixed(2)
}
console.log(mediaPonderada(
    { n: 9, p: 3}, 
    { n: 7}, 
    { n: 3, p: 1 }))

function mediana (...arr) {
    const ordenado = [...arr].sort((a, b) => a - b)
    const meio = Math.trunc(ordenado.length / 2)

    if (ordenado.length % 2 === 0) {
        return media(ordenado[meio - 1], ordenado[meio])
    } else {
        return ordenado[meio]
    }
}
console.log(mediana(2, 4, 5, 7, 42, 99))
console.log(mediana(15, 14, 8, 7, 3))

function moda (...arr) {
    const lista = arr.reduce((total, num) => {
        if (!total[num]) {
            total[num] = 1
        } else {
            total[num] += 1
        }
        return total
    }, {})
    const valoresObjeto = Object.values(lista)
    const moda = Math.max(...valoresObjeto)
    return moda
 }

console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4))