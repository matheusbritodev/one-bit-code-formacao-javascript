let lista = [2, 1, 4, 10, 8]

const target = 17
lista.sort((a, b) => a - b)
//1, 2, 4, 8, 10

let i = 0
let j = lista.length - 1
let sum = 0

while (true) {
    sum = lista[i] + lista[j]

    if (sum > target) {
        j --
    } else if (sum < target) {
        i ++
    } else if (j < i){
        console.log("nao encontrou")
        break
    } else {
        console.log(`encontrou: ${lista[i]} + ${lista[j]} = ${sum}`)
        break
    }
}
