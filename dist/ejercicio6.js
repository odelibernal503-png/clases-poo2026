"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
class Notificacion {
    constructor(destinatario, mensaje) {
        this.destinatario = destinatario;
        this.mensaje = mensaje;
    }
}
class NotificacionEmail extends Notificacion {
    constructor(destinatario, mensaje, asunto) {
        super(destinatario, mensaje);
        this.asunto = asunto;
    }
    enviar() {
        console.log("Email enviado a " + this.destinatario);
        console.log("Asunto: " + this.asunto);
        console.log("Mensaje: " + this.mensaje);
    }
}
class NotificacionSMS extends Notificacion {
    enviar() {
        console.log("SMS enviado a " + this.destinatario);
        console.log("Mensaje: " + this.mensaje.slice(0, 160) + (this.mensaje.length > 160 ? "..." : ""));
    }
}
class NotificacionWhatsApp extends Notificacion {
    enviar() {
        console.log("WhatsApp enviado a " + this.destinatario);
        console.log("Mensaje: " + this.mensaje);
    }
}
class GestorNotificaciones {
    constructor() {
        this.notificaciones = [];
    }
    agregar(notificacion) {
        this.notificaciones.push(notificacion);
    }
    enviarTodas() {
        console.log("=== ENVÍO DE NOTIFICACIONES ===");
        this.notificaciones.forEach(n => n.enviar());
        console.log("Total enviadas: " + this.notificaciones.length);
    }
}
const gestor = new GestorNotificaciones();
gestor.agregar(new NotificacionEmail("Pocho955@email.com", "Bienvenido", "Registro exitoso"));
gestor.agregar(new NotificacionSMS("+1234567890", "Su código de verificación es: 123456"));
gestor.agregar(new NotificacionWhatsApp("+0987654321", "Hola! Tu pedido está listo para recoger"));
gestor.enviarTodas();
//# sourceMappingURL=ejercicio6.js.map