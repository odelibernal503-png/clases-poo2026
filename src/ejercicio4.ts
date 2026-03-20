const readline = require('readline');

abstract class Empleado {
    constructor(protected nombre: string, protected cedula: string) {}
    abstract calcularSalario(): number;
}

class EmpleadoPorHoras extends Empleado {
    constructor(nombre: string, cedula: string, private horas: number, private tarifa: number) {
        super(nombre, cedula);
    }
    calcularSalario(): number {
        return this.horas * this.tarifa;
    }
}

class EmpleadoFijo extends Empleado {
    constructor(nombre: string, cedula: string, private salario: number) {
        super(nombre, cedula);
    }
    calcularSalario(): number {
        return this.salario;
    }
}

class EmpleadoPorComision extends Empleado {
    constructor(nombre: string, cedula: string, private ventas: number, private comision: number) {
        super(nombre, cedula);
    }
    calcularSalario(): number {
        return this.ventas * (this.comision / 100);
    }
}


const empleadO = new EmpleadoPorHoras("Juan", "123", 40, 15);
const emPleado = new EmpleadoFijo("María", "456", 2500);
const EmpleadO = new EmpleadoPorComision("Carlos", "789", 5000, 10);

console.log("------ Sistema de Empleados ------");
console.log("Jeffer (Horas): $" + empleadO.calcularSalario());
console.log("María (Fijo): $" + emPleado.calcularSalario());
console.log("Alexander (Comisión): $" + EmpleadO.calcularSalario());
console.log("Total nómina: $" + (empleadO.calcularSalario() + emPleado.calcularSalario() + EmpleadO.calcularSalario()));
