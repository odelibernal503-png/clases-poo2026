const readline = require('readline');

abstract class Producto {
    constructor(protected nombre: string, protected precioBase: number) {}
    abstract calcularPrecioFinal(): number;
    abstract mostrarInformacion(): void;
}

class Electronico extends Producto {
    calcularPrecioFinal(): number {
        return this.precioBase * 1.15 * 1.12;
    }

    mostrarInformacion(): void {
        console.log("Electrónico: " + this.nombre);
        console.log("Precio base: $" + this.precioBase);
        console.log("Precio final: $" + this.calcularPrecioFinal().toFixed(2));
    }
}

class Ropa extends Producto {
    calcularPrecioFinal(): number {
        const descuento = this.precioBase * 0.1;
        return (this.precioBase - descuento) * 1.12;
    }

    mostrarInformacion(): void {
        console.log("Ropa: " + this.nombre);
        console.log("Precio base: $" + this.precioBase);
        console.log("Precio final: $" + this.calcularPrecioFinal().toFixed(2));
    }
}

class Alimento extends Producto {
    calcularPrecioFinal(): number {
        return this.precioBase * 1.12;
    }

    mostrarInformacion(): void {
        console.log("Alimento: " + this.nombre);
        console.log("Precio base: $" + this.precioBase);
        console.log("Precio final: $" + this.calcularPrecioFinal().toFixed(2));
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Tipo de producto (electronico/ropa/alimento): ", (tipo: string) => {
    rl.question("Nombre del producto: ", (nombre: string) => {
        rl.question("Precio base: ", (precioStr: string) => {
            const precio = parseFloat(precioStr);

            if (isNaN(precio) || precio <= 0) {
                console.log("Precio inválido");
                rl.close();
                return;
            }

            let producto: Producto;

            if (tipo.toLowerCase() === "electronico") {
                producto = new Electronico(nombre, precio);
            } else if (tipo.toLowerCase() === "ropa") {
                producto = new Ropa(nombre, precio);
            } else if (tipo.toLowerCase() === "alimento") {
                producto = new Alimento(nombre, precio);
            } else {
                console.log("Tipo de producto no válido");
                rl.close();
                return;
            }

            console.log("=== INFORMACIÓN DEL PRODUCTO ===");
            producto.mostrarInformacion();

            rl.close();
        });
    });
});
