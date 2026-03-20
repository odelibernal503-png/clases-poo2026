"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
class vehiculo {
    constructor(tipo) {
        this.tipo = tipo;
    }
}
class carro extends vehiculo {
    Mover() {
        console.log("El carro avanza a 40km/h");
    }
}
class Moto extends vehiculo {
    Mover() {
        console.log("La moto avanza a 20km/h");
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("¿Qué vehículo quieres crear? (carro/moto): ", (tipo) => {
    rl.question("¿Qué marca/modelo tiene?: ", (marca) => {
        let vehiculo;
        if (tipo.toLowerCase() === "carro") {
            vehiculo = new carro(marca);
        }
        else if (tipo.toLowerCase() === "moto") {
            vehiculo = new Moto(marca);
        }
        else {
            console.log("Tipo de vehículo no válido");
            rl.close();
            return;
        }
        console.log("\n=== VEHÍCULO CREADO ===");
        console.log("Tipo: " + vehiculo.tipo);
        vehiculo.Mover();
        rl.close();
    });
});
//# sourceMappingURL=ejercicio2.js.map