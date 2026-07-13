// Cadastro de recruta

const nome = prompt("Nome: ")
const sobrenome = prompt("Sobrenome: ")
const areaEstudo = prompt("O que voce estuda? ")
const anoNascimento = prompt("Ano  de Nascimento: ")

window.alert(`
    Nome completo: ${nome + " " + sobrenome}
    Area de estudo: ${areaEstudo}
    Idade: ${2026 - anoNascimento}`
)

