const readline = require('readline');

abstract class animal{
    nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }
    comer(): void{
        console.log(this.nombre + ": Esta comiendo");
    }
    abstract hacerSonido(): void;
}

class Gato extends animal{
    hacerSonido(): void {
        console.log("MIAU");
    }
}

class perro extends animal{
    hacerSonido(): void {
        console.log("GUAU")
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Qué animal quieres crear? (gato/perro): ", (tipo: string) => {
    rl.question("¿Qué nombre le quieres dar?: ", (nombre: string) => {
        let animal: animal;

        if (tipo.toLowerCase() === "gato") {
            animal = new Gato(nombre);
        } else if (tipo.toLowerCase() === "perro") {
            animal = new perro(nombre);
        } else {
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
