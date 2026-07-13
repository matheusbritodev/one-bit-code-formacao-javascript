let num = parseFloat(prompt("Digite um número: "))
let divisores = 0

for (let i = 1; i <= num; i++)
    if (num % i == 0) {
        divisores++
    }

if (num > 1 && divisores === 2) {
    window.alert("O número " + num + " é primo")
} else {
    window.alert("O número " + num + " não é primo")
}