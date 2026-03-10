export class Producto {
    nombre: string;
    precio: number;
    cantidad: number;

    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularTotal(descuento: number): void {
        const subtotal = this.precio * this.cantidad;
        const montoDescuento = subtotal * (descuento / 100);
        const iva = subtotal * 0.13;
        const total = subtotal - montoDescuento + iva;

        console.log("****Cantidad de producto:", this.cantidad, "*****");
        console.log("****Precio: $", this.precio, "*****");
        console.log("****Descuento: $", montoDescuento, "****");
        console.log("****Iva: $", iva, "****");
        console.log("****Total a pagar: $", total, "*****");
    }
}