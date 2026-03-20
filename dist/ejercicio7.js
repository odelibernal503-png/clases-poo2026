"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
class Transporte {
    constructor(distancia) {
        this.distancia = distancia;
    }
}
class Taxi extends Transporte {
    calcularCosto() {
        return 5 + this.distancia * 2;
    }
}
class Autobus extends Transporte {
    calcularCosto() {
        return this.distancia * 3;
    }
}
class Uber extends Transporte {
    calcularCosto() {
        return 3 + this.distancia * 1.5;
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Transporte (taxi/autobus/uber): ", (tipo) => {
    rl.question("Distancia (km): ", (dist) => {
        const distancia = parseFloat(dist);
        if (isNaN(distancia))
            return rl.close();
        let transporte;
        if (tipo === "taxi")
            transporte = new Taxi(distancia);
        else if (tipo === "autobus")
            transporte = new Autobus(distancia);
        else if (tipo === "uber")
            transporte = new Uber(distancia);
        else
            return rl.close();
        console.log("Costo: $" + transporte.calcularCosto());
        rl.close();
    });
});
//# sourceMappingURL=ejercicio7.js.map