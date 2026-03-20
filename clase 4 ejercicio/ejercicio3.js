// EJERCICIO 3: Registro de Notas

class Nota {
  constructor(titulo, detalle) {
    this.titulo = titulo;
    this.detalle = detalle;
  }

  contarPalabras() {
    return this.detalle.trim().split(/\s+/).length;
  }

  guardar() {
    const palabras = this.contarPalabras();
    console.log("--- Nota Guardada ---");
    console.log("Titulo  : " + this.titulo);
    console.log("Detalle : " + this.detalle);
    console.log("Palabras en el detalle: " + palabras);
    console.log("");
  }
}

const nota1 = new Nota(
  "Lista de compras",
  "Comprar leche pan huevos mantequilla cafe y azucar en el supermercado"
);

const nota2 = new Nota(
  "Recordatorio reunion",
  "Asistir a la reunion del equipo el lunes a las nueve de la manana"
);

nota1.guardar();
nota2.guardar();