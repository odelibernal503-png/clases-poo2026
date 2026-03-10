export class PersonaEdad {
    fechaNacimiento: Date;

    constructor(fechaNacimiento: Date) {
        this.fechaNacimiento = fechaNacimiento;
    }

    calcularEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();

        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }

        return edad;
    }

    obtenerEstado(): string {
        const edad = this.calcularEdad();

        if (edad >= 0 && edad <= 2) return "Bebé";
        if (edad > 2 && edad <= 10) return "Niño/Niña";
        if (edad > 10 && edad <= 14) return "Pre-adolescente";
        if (edad > 14 && edad <= 17) return "Adolescente";
        if (edad >= 18 && edad <= 30) return "Joven";
        if (edad > 30 && edad <= 50) return "Adulto";
        return "Adulto mayor";
    }
}