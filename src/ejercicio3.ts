const readline = require('readline');

abstract class Figura {
    abstract area(): number;
}

class Rectangulo extends Figura {
    constructor(private base: number, private altura: number) {
        super();
    }

    area(): number {
        const area = this.base * this.altura;
        console.log(area);
        return area;
    }
}

class Circulo extends Figura {
    constructor(private radio: number, private pi: number = Math.PI) {
        super();
    }

    area(): number {
        const area = this.pi * this.radio * this.radio;
        console.log(area);
        return area;
    }
}

class Cuadrado extends Figura {
    constructor(private lado: number) {
        super();
    }

    area(): number {
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


