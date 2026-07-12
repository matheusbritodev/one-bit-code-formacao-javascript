let ano = parseFloat(prompt("Digite um ano: "))

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    window.alert("O ano " + ano + " é bissexto!")
} else {
    window.alert("O ano " + ano + " não é bissexto!")
}