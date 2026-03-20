const readline = require('readline');

abstract class vehiculo{
    tipo: string;
    constructor(tipo: string){
        this.tipo = tipo;
    }

    abstract Mover(): void;
}
class carro extends vehiculo {
    Mover(): void {
        console.log("El carro avanza a 40km/h");
    }
}

class Moto extends vehiculo {
    Mover(): void {
        console.log("La moto avanza a 20km/h");
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Qué vehículo quieres crear? (carro/moto): ", (tipo: string) => {
    rl.question("¿Qué marca/modelo tiene?: ", (marca: string) => {
        let vehiculo: vehiculo;

        if (tipo.toLowerCase() === "carro") {
            vehiculo = new carro(marca);
        } else if (tipo.toLowerCase() === "moto") {
            vehiculo = new Moto(marca);
        } else {
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

