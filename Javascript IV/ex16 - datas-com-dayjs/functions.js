const dayjs = require("dayjs")

function datas (stringDataNascimento) {
    // mostrar idade da pessoa no dia atual
    const dataNascimento = dayjs(stringDataNascimento)
    const dataAtual = dayjs()
    const idade = dataAtual.diff(dataNascimento, 'year')

    // sua proxima data de aniversario no formato 'DD/MM/YYYY'
    let proximoAniversario = dataNascimento.add(idade, 'year')
    if (proximoAniversario.isBefore(dataAtual)) {
        proximoAniversario = proximoAniversario.add(1, 'year')
    }
    const proximoAniversarioFormatado = proximoAniversario.format('DD/MM/YYYY')

    // quantos dias faltam para o proximo aniversario
    const contagemDias = proximoAniversario.diff(dataAtual, 'day') + 1

    return `
    Idade: ${idade}
    Próximo aniversário: ${proximoAniversarioFormatado}
    Dias que faltam para chegar o próximo aniversário: ${contagemDias}`
}
module.exports = datas