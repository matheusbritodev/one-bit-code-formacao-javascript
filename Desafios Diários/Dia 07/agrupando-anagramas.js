let input = ['bat', 'tab', 'cat', 'act']

function agruparAnagrama (array) {
    let output = {}

    for (let palavra of array) {

    let palavraOrdenada = palavra.split('').sort().join('')

    if (!output[palavraOrdenada]) {
        output[palavraOrdenada] = []
    }

    outp ut[palavraOrdenada].push(palavra)
    }

    return Object.values(output)
}

console.log(agruparAnagrama(input))