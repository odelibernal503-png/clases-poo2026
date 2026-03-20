"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
class animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    comer() {
        console.log(this.nombre + ": Esta comiendo");
    }
}
class Gato extends animal {
    hacerSonido() {
        console.log("MIAU");
    }
}
class perro extends animal {
    hacerSonido() {
        console.log("GUAU");
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("¿Qué animal quieres crear? (gato/perro): ", (tipo) => {
    rl.question("¿Qué nombre le quieres dar?: ", (nombre) => {
        let animal;
        if (tipo.toLowerCase() === "gato") {
            animal = new Gato(nombre);
        }
        else if (tipo.toLowerCase() === "perro") {
            animal = new perro(nombre);
        }
        else {
            console.log("Tipo de animal no válido");
            rl.close();
            return;
        }
        console.log("\n=== ACCIONES DEL ANIMAL ===");
        animal.comer();
        animal.hacerSonido();
        rl.close();
    });
});
//# sourceMappingURL=ejercicio1.js.map