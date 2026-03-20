// UNIVERSIDAD DE ORIENTE - POO
// ING. WILLIAM JOSE MORALES BERRIOS
// jekssy odeli Bernal Montesinos

// EJERCICIO 1: Calculadora de IMC para un GYM

class IMC {
  constructor(nombre, genero, peso, altura) {
    this.nombre = nombre;
    this.genero = genero;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }

  obtenerCategoria(imc) {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 25)   return "Normal";
    if (imc < 30)   return "Sobrepeso";
    return "Obesidad";
  }

  mostrarResultado() {
    const imc = this.calcularIMC().toFixed(2);
    const categoria = this.obtenerCategoria(parseFloat(imc));
    console.log("--- IMC GYM ---");
    console.log("Nombre : " + this.nombre + " (" + this.genero + ")");
    console.log("Peso   : " + this.peso + " kg | Altura: " + this.altura + " m");
    console.log("IMC    : " + imc + " -> " + categoria);
    console.log("");
  }
}

const cliente1 = new IMC("Carlos Lopez", "hombre", 85, 1.75);
const cliente2 = new IMC("Maria Garcia", "mujer", 60, 1.62);
cliente1.mostrarResultado();
cliente2.mostrarResultado();


