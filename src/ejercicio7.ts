const readline = require('readline');

abstract class Transporte {
    constructor(protected distancia: number) {}
    abstract calcularCosto(): number;
}

class Taxi extends Transporte {
    calcularCosto(): number {
        return 5 + this.distancia * 2;
    }
}

class Autobus extends Transporte {
    calcularCosto(): number {
        return this.distancia * 3;
    }
}

class Uber extends Transporte {
    calcularCosto(): number {
        return 3 + this.distancia * 1.5;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Transporte (taxi/autobus/uber): ", (tipo: string) => {
    rl.question("Distancia (km): ", (dist: string) => {
        const distancia = parseFloat(dist);
        if (isNaN(distancia)) return rl.close();

        let transporte: Transporte;
        if (tipo === "taxi") transporte = new Taxi(distancia);
        else if (tipo === "autobus") transporte = new Autobus(distancia);
        else if (tipo === "uber") transporte = new Uber(distancia);
        else return rl.close();

        console.log("Costo: $" + transporte.calcularCosto());
        rl.close();
    });
});
