// EJERCICIO 4: Sanciones Estudiantiles

class Estudiante {
  constructor(nombre) {
    this.nombre = nombre;
    this.totalSancion = 0;
    this.infracciones = [];
  }

  cometeFalta(tipo) {
    const faltasTipo = {
      "llegada tardia":           { descripcion: "Llegada tardia",                    monto: 1  },
      "caminar en pasillos":      { descripcion: "Caminar por los pasillos en clase", monto: 3  },
      "vestimenta inapropiada":   { descripcion: "No andar vestimenta apropiada",     monto: 5  },
      "mal uso de instalaciones": { descripcion: "Mal uso de las instalaciones",      monto: 10 },
    };

    const falta = faltasTipo[tipo.toLowerCase()];

    if (!falta) {
      console.log("Infraccion no reconocida: " + tipo);
      return;
    }

    this.totalSancion += falta.monto;
    this.infracciones.push(falta.descripcion);

    console.log("--- Sancion Estudiantil ---");
    console.log("Estudiante     : " + this.nombre);
    console.log("Infraccion     : " + falta.descripcion);
    console.log("Monto falta    : $" + falta.monto + ".00");
    console.log("Total acumulado: $" + this.totalSancion + ".00");
    console.log("");
  }
}

const est1 = new Estudiante("Jose Hernandez");
est1.cometeFalta("llegada tardia");
est1.cometeFalta("vestimenta inapropiada");

const est2 = new Estudiante("Ana Perez");
est2.cometeFalta("caminar en pasillos");
est2.cometeFalta("mal uso de instalaciones");