//ejercicio 2


class ConversorTemperatura {
  constructor(valor, escalaOrigen) {
    this.valor = valor;
    this.escalaOrigen = escalaOrigen.toUpperCase();
  }

  fahrenheitACelsius() {
    return ((this.valor - 32) * 5) / 9;
  }

  celsiusAFahrenheit() {
    return (this.valor * 9) / 5 + 32;
  }

  kelvinAFahrenheit() {
    return ((this.valor - 273.15) * 9) / 5 + 32;
  }

  kelvinACelsius() {
    return this.valor - 273.15;
  }

  convertir(escalaDestino) {
    const destino = escalaDestino.toUpperCase();
    let resultado;
    let conversion = this.valor + "° " + this.escalaOrigen + " -> ";

    if (this.escalaOrigen === "F" && destino === "C") {
      resultado = this.fahrenheitACelsius();
      conversion += resultado.toFixed(2) + "° C";
    } else if (this.escalaOrigen === "C" && destino === "F") {
      resultado = this.celsiusAFahrenheit();
      conversion += resultado.toFixed(2) + "° F";
    } else if (this.escalaOrigen === "K" && destino === "F") {
      resultado = this.kelvinAFahrenheit();
      conversion += resultado.toFixed(2) + "° F";
    } else if (this.escalaOrigen === "K" && destino === "C") {
      resultado = this.kelvinACelsius();
      conversion += resultado.toFixed(2) + "° C";
    } else {
      conversion += "Conversion no soportada.";
    }

    console.log("--- Conversion de Temperatura ---");
    console.log(conversion);
    console.log("");
  }
}

const temp1 = new ConversorTemperatura(98.6, "F");
temp1.convertir("C");

const temp2 = new ConversorTemperatura(37, "C");
temp2.convertir("F");

const temp3 = new ConversorTemperatura(300, "K");
temp3.convertir("F");

const temp4 = new ConversorTemperatura(300, "K");
temp4.convertir("C");
