"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
class Figura {
}
class Rectangulo extends Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    area() {
        const area = this.base * this.altura;
        console.log(area);
        return area;
    }
}
class Circulo extends Figura {
    constructor(radio, pi = Math.PI) {
        super();
        this.radio = radio;
        this.pi = pi;
    }
    area() {
        const area = this.pi * this.radio * this.radio;
        console.log(area);
        return area;
    }
}
class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    area() {
        const area = this.lado * this.lado;
        console.log(area);
        return area;
    }
}
console.log(" ------ Cálculo de áreas ------ ");
console.log("Rectángulo (base: 5, altura: 4)");
const rect = new Rectangulo(5, 4);
rect.area();
console.log("\nCírculo (radio: 3)");
const circ = new Circulo(3);
circ.area();
console.log("\nCuadrado (lado: 5)");
const cuad = new Cuadrado(5);
cuad.area();
//# sourceMappingURL=ejercicio3.js.map