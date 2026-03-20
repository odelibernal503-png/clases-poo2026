"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
class Empleado {
    constructor(nombre, cedula) {
        this.nombre = nombre;
        this.cedula = cedula;
    }
}
class EmpleadoPorHoras extends Empleado {
    constructor(nombre, cedula, horas, tarifa) {
        super(nombre, cedula);
        this.horas = horas;
        this.tarifa = tarifa;
    }
    calcularSalario() {
        return this.horas * this.tarifa;
    }
}
class EmpleadoFijo extends Empleado {
    constructor(nombre, cedula, salario) {
        super(nombre, cedula);
        this.salario = salario;
    }
    calcularSalario() {
        return this.salario;
    }
}
class EmpleadoPorComision extends Empleado {
    constructor(nombre, cedula, ventas, comision) {
        super(nombre, cedula);
        this.ventas = ventas;
        this.comision = comision;
    }
    calcularSalario() {
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
//# sourceMappingURL=ejercicio4.js.map