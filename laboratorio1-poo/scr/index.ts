import { persona } from "./ejercicio1/persona";
import { Producto } from "./ejercicio2/producto";
import { PersonaEdad } from "./ejercicio3/PersonaEdad";

// EJERCICIO 1
const persona1 = new persona(
    "Jekssy",
    "Bernal",
    "74308570",
    "odelibernal503@gmail.com",
    "ID001"
);

console.log("=== EJERCICIO 1 ===");
console.log("Nombre:", persona1.nombre);
console.log("Apellido:", persona1.apellido);
console.log("Teléfono:", persona1.telefono);
console.log("Correo:", persona1.correo);

// EJERCICIO 2
const producto1 = new Producto("Laptop", 800, 2);

console.log("\n=== EJERCICIO 2 ===");
producto1.calcularTotal(10); // 10% de descuento

// ===================
// EJERCICIO 3
// ===================
const personaEdad = new PersonaEdad(new Date("2005-06-15"));

console.log("\n=== EJERCICIO 3 ===");
console.log("Edad:", personaEdad.calcularEdad());
console.log("Estado:", personaEdad.obtenerEstado());