/* Calculadora Geométrica

Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

    área do triângulo: base * altura / 2
    área do retângulo: base * altura
    área do quadrado: lado²
    área do trapézio: (base maior + base menor) * altura / 2
    área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu. */ 

function calcularAreaTriangulo () {
    const base = Number(prompt("Defina a BASE do triângulo: "))
    const altura = Number(prompt("Defina a ALTURA do triângulo: "))

    return base * altura / 2
}
function calcularAreaRetangulo () {
    const base = Number(prompt("Defina a BASE do retângulo: "))
    const altura = Number(prompt("Defina a ALTURA do retângulo: "))

    return base * altura
}
function calcularAreaQuadrado () {
    const lado = Number(prompt("Defina o tamanho do LADO do quadrado: "))

    return lado ** 2
}
function calcularAreaTrapezio () {
    const baseMaior = Number(prompt("Defina a BASE MAIOR do trapézio: "))
    const baseMenor = Number(prompt("Defina a BASE MENOR do trapézio: "))
    const altura = Number(prompt("Defina a ALTURA do trapézio: "))

    return (baseMaior + baseMenor) * altura / 2
}
function calcularAreaCirculo () {
    const raio = Number(prompt("Defina o RAIO do circulo: "))
    return Math.PI * (raio ** 2)
}

let opcao = 0
let resultado = 0

do {
    opcao = Number(prompt(`Opções de cálculo:\n\n1 - área do triângulo\n2 - Área do retângulo\n3 - Área do quadrado\n4 - Área do trapézio\n5 - Área do circulo\n6 - Sair`))

    switch (opcao) {
        case 1:
            resultado = calcularAreaTriangulo()
            break
        case 2:
            resultado = calcularAreaRetangulo()
            break
        case 3:
            resultado = calcularAreaQuadrado()
            break
        case 4:
            resultado = calcularAreaTrapezio()
            break
        case 5:
            resultado = calcularAreaCirculo()
            break
        case 6:
            console.log("Encerrando...")
            break
        default:
            console.log("Opção inválida!")
            break
    }

    if (resultado) {
        console.log(`Resultado: ${resultado}`)
    }

} while (opcao !== 6)