"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const perrO = new perro("Max");
const GatO = new Gato("LUNITA");
perrO.comer();
perrO.hacerSonido();
GatO.comer();
GatO.hacerSonido();
//# sourceMappingURL=index.js.map