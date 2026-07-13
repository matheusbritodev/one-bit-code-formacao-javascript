const subirEscada = (n) => n <= 1 && n >= 0 ? 1 : subirEscada(n -1) + subirEscada(n - 2)

console.log(subirEscada(10))