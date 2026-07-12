/* Exercício: Cadastro de Setup

Construa uma página web que permita cadastrar diferentes "Setups de PC" e seus respectivos componentes.

Requisitos:

    feito - A página deve ter um input para o Nome do Setup (ex: "PC da Sala") e um botão "Adicionar Componente".

    feito - Ao clicar em "Adicionar Componente", o JavaScript deve criar dinamicamente uma nova área/linha no formulário contendo:

        Um campo de texto para o Nome da Peça (ex: Ryzen 7 5700X, Placa-mãe B550M).

        Um grupo de botões tipo radio para a condição da peça com as opções: "Nova", "Usada" e "Importada".

        Um botão "Remover" que exclui apenas a linha daquele componente específico.

    O formulário deve ter um botão "Salvar Setup" que:

        Impede o comportamento padrão de recarregamento da página.

        Agrupa o nome do setup e a lista de componentes em um objeto e o adiciona a um array global.

        Exiba o array final no console.log().

        Limpa o campo do nome e remove todas as linhas de componentes que foram criadas dinamicamente, "zerando" a tela.

    Regra estrita: Utilize apenas eventos adicionados via JavaScript (addEventListener). O HTML não deve conter atributos como onclick. */

const inputNomeSetup = document.getElementById('nome-setup')
const form = document.querySelector('.form-setup')
const botaoAdicionarComponente = document.getElementById('adicionar-componente')
const botaoSalvarSetup = document.getElementById('salvar-setup')

let idLinha = 0
const bancoDeDados = []

function adicionarLinha (event) {
    idLinha ++
    
    event.preventDefault()
    const br = document.createElement('br')
    
    // CRIAR DIV
    const divLinha = document.createElement('div')
    divLinha.className = `componente-${inputNomeSetup.value.split(' ').join('')}`
    
    // NOME DA PECA
    const inputNomePeca = document.createElement('input')
    inputNomePeca.id = `nome-peca-${idLinha}`
    inputNomePeca.type = 'text'
    inputNomePeca.className = 'input-nome-peca'
    const labelNomePeca = document.createElement('label')
    labelNomePeca.htmlFor = `nome-peca-${idLinha}`
    labelNomePeca.innerText = 'Nome da peça: '
    
    
    // PECA NOVA
    const labelCondicaoPecaNova = document.createElement('label')
    labelCondicaoPecaNova.htmlFor = `novo-${idLinha}`
    labelCondicaoPecaNova.innerText = 'Nova'
    
    const inputCondicaoPecaNova = document.createElement('input')
    inputCondicaoPecaNova.id = `novo-${idLinha}`
    inputCondicaoPecaNova.name = `condicao-peca-${idLinha}`
    inputCondicaoPecaNova.type = 'radio'
    inputCondicaoPecaNova.value = 'novo'
    
    // PECA USADA
    const labelCondicaoPecaUsada = document.createElement('label')
    labelCondicaoPecaUsada.htmlFor = `usada-${idLinha}`
    labelCondicaoPecaUsada.innerText = 'Usada'
    
    const inputCondicaoPecaUsada = document.createElement('input')
    inputCondicaoPecaUsada.id = `usada-${idLinha}`
    inputCondicaoPecaUsada.name = `condicao-peca-${idLinha}`
    inputCondicaoPecaUsada.type = 'radio'
    inputCondicaoPecaUsada.value = 'usada'
    
    // PECA IMPORTADA
    const labelCondicaoPecaImportada = document.createElement('label')
    labelCondicaoPecaImportada.htmlFor = `importada-${idLinha}`
    labelCondicaoPecaImportada.innerText = 'Importada'
    
    const inputCondicaoPecaImportada = document.createElement('input')
    inputCondicaoPecaImportada.id = `importada-${idLinha}`
    inputCondicaoPecaImportada.name = `condicao-peca-${idLinha}`
    inputCondicaoPecaImportada.type = 'radio'
    inputCondicaoPecaImportada.value = 'importada'
    
    // BOTAO REMOVER
    const botaoRemover = document.createElement('button')
    botaoRemover.id = 'remover-componente'
    botaoRemover.innerText = 'Remover'
    botaoRemover.type = 'button'

    botaoRemover.addEventListener('click', function () {
        divLinha.remove()
    })
    
    
    divLinha.appendChild(br.cloneNode())
    divLinha.appendChild(labelNomePeca)
    divLinha.appendChild(inputNomePeca)
    divLinha.appendChild(br)
    divLinha.appendChild(br.cloneNode())
    divLinha.appendChild(inputCondicaoPecaNova)
    divLinha.appendChild(labelCondicaoPecaNova)
    divLinha.appendChild(inputCondicaoPecaUsada)
    divLinha.appendChild(labelCondicaoPecaUsada)
    divLinha.appendChild(inputCondicaoPecaImportada)
    divLinha.appendChild(labelCondicaoPecaImportada)
    divLinha.appendChild(br.cloneNode())
    divLinha.appendChild(br.cloneNode())
    divLinha.appendChild(botaoRemover)
    
    form.appendChild(divLinha)
}

botaoAdicionarComponente.addEventListener('click', adicionarLinha)


// FUNCAO SALVAR
function salvarSetup (event) {
    event.preventDefault()

    // SELECIONA TODAS AS DIVS COM A MESMA CLASSE
    const linhas = document.querySelectorAll(`.componente-${inputNomeSetup.value.split(' ').join('')}`)
    const itensSetup = {
        nome: inputNomeSetup.value,
        componentes: []
    }

    linhas.forEach(function (linha) {
        const pecaInput = linha.querySelector('.input-nome-peca')
        const condicaoInput = linha.querySelector('input[type="radio"]:checked')

        itensSetup.componentes.push({
            peca:pecaInput.value,
            estado: condicaoInput.value
        })
    })

    bancoDeDados.push(itensSetup)
    console.log(bancoDeDados)
    inputNomeSetup.value = ''
    linhas.forEach(linha => {
      linha.remove()  
    })
}


botaoSalvarSetup.addEventListener('click', salvarSetup)