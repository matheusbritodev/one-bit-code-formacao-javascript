function converter_temp(celsius) {
    let fahrenheit = ((celsius * 1.8) + 32).toFixed(2)
    let kelvin = (celsius + 273.15).toFixed(2)
    let celsiusFormatado = celsius.toFixed(2)
    
    let temp = {
        celsiusFormatado,
        conversoes: {
            fahrenheit,
            kelvin
        }
    }
    
    return temp
}

let celsius = parseFloat(prompt("Temperatura em graus Celsius: "))

let teste = converter_temp(celsius)
console.log(teste)
