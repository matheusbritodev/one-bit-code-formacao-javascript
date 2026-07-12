    /* Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

    - Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.

    - Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.

    - Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens. */


//NOME DO PERSONAGEM 1
const nomep1 = prompt("Nome do atacante: ")
//PODER DE ATAQUE DO PERSONAGEM 1
const poderAtaque = parseFloat(prompt("Poder de ATAQUE: "))

//NOME DO PERSONAGEM 2
const nomep2 = prompt("Nome do defensor: ")
//PODER DE DEFESA DO PERSONAGEM 2
const poderDefesa = parseFloat(prompt("Poder de DEFESA: "))
//QUANTIDADE DE PONTOS DE VIDA DO PERSONAGEM 2
let pontosVidaP2 = parseFloat(prompt("Quantos pontos de vida: "))
//O PERSONAGEM 2 POSSUI ESCUDO
const escudo = prompt("O defensor possui escudo? ").toLowerCase()

let danoCausado = 0

if (poderAtaque > poderDefesa && escudo[0] === "n") {
    danoCausado = poderAtaque - poderDefesa //DIFERENÇA DE ATAQUE E DEFESA

} else if (poderAtaque > poderDefesa && escudo[0] === "s") {
    danoCausado = (poderAtaque - poderDefesa) / 2 //METADE DA DIFERENÇA DE ATAQUE E DEFESA
}

pontosVidaP2 -= danoCausado //NAO MEXE, TA FUNCIONANDO
alert(nomep2 + " sofreu " + danoCausado + " de dano! \nPontos de vida após o ataque: " + pontosVidaP2)