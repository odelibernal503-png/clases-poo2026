"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
class Pago {
    constructor(monto, concepto) {
        this.monto = monto;
        this.concepto = concepto;
    }
}
class PagoEnEfectivo extends Pago {
    procesarPago() {
        console.log(`Efectivo: ${this.concepto} - $${this.monto}`);
    }
}
class PagoConTarjeta extends Pago {
    constructor(monto, concepto, tarjeta) {
        super(monto, concepto);
        this.tarjeta = tarjeta;
    }
    procesarPago() {
        console.log(`Tarjeta: ${this.concepto} - $${this.monto} (****${this.tarjeta})`);
    }
}
class PagoTransferencia extends Pago {
    constructor(monto, concepto, banco) {
        super(monto, concepto);
        this.banco = banco;
    }
    procesarPago() {
        console.log(`Transferencia: ${this.concepto} - $${this.monto} (${this.banco})`);
    }
}
// Prueba
console.log("=== Sistema de Pagos ===");
const pagO = new PagoEnEfectivo(100, "Compra");
const pago = new PagoConTarjeta(250, "Online", "45323");
const PagO = new PagoTransferencia(500, "Servicios", "Banco Agricola");
pagO.procesarPago();
pago.procesarPago();
PagO.procesarPago();
const total = 100 + 250 + 500;
console.log(`Total: $${total}`);
//# sourceMappingURL=ejercicio5.js.map