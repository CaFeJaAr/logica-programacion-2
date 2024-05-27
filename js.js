function convertirTemperatura() {
    let temperaturaCelsius = prompt("Ingrese la temperatura en grados Celsius:");

    if (temperaturaCelsius === "" || isNaN(temperaturaCelsius)) {
        console.error("Error: Debes ingresar un número válido.");
        convertirTemperatura();
        return;
    }

    let temperaturaFahrenheit = (parseFloat(temperaturaCelsius) * 9 / 5) + 32;
    let temperaturaKelvin = parseFloat(temperaturaCelsius) + 273.15;

    let decimales = prompt("Ingrese la cantidad de decimales para redondear:");

    if (decimales === "" || isNaN(decimales)) {
        console.error("Error: Debes ingresar un número válido para la cantidad de decimales.");
        convertirTemperatura();
        return;
    }

    temperaturaFahrenheit = temperaturaFahrenheit.toFixed(decimales);
    temperaturaKelvin = temperaturaKelvin.toFixed(decimales);

    console.log("Grados Fahrenheit:", temperaturaFahrenheit);
    console.log("Grados Kelvin:", temperaturaKelvin);
}

convertirTemperatura();
