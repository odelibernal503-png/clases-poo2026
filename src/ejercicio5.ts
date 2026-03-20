const readline = require('readline');

abstract class Pago {
    constructor(protected monto: number, protected concepto: string) {}
    abstract procesarPago(): void;
}

class PagoEnEfectivo extends Pago {
    procesarPago(): void {
        console.log(`Efectivo: ${this.concepto} - $${this.monto}`);
    }
}

class PagoConTarjeta extends Pago {
    constructor(monto: number, concepto: string, private tarjeta: string) {
        super(monto, concepto);
    }
    procesarPago(): void {
        console.log(`Tarjeta: ${this.concepto} - $${this.monto} (****${this.tarjeta})`);
    }
}

class PagoTransferencia extends Pago {
    constructor(monto: number, concepto: string, private banco: string) {
        super(monto, concepto);
    }
    procesarPago(): void {
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
