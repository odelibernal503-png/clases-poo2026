// Jekssy Odeli Bernal Montesinos
// U20250299

export class persona {
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  private codIdentificacion: string;

  constructor(
    nombre: string,
    apellido: string,
    telefono: string,
    correo: string,
    codIdentificacion: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.correo = correo;
    this.codIdentificacion = codIdentificacion;
  }
}