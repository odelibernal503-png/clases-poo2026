const readline = require('readline');

abstract class Notificacion {
    constructor(protected destinatario: string, protected mensaje: string) {}
    abstract enviar(): void;
}

class NotificacionEmail extends Notificacion {
    constructor(destinatario: string, mensaje: string, private asunto: string) {
        super(destinatario, mensaje);
    }
    enviar(): void {
        console.log("Email enviado a " + this.destinatario);
        console.log("Asunto: " + this.asunto);
        console.log("Mensaje: " + this.mensaje);
    }
}

class NotificacionSMS extends Notificacion {
    enviar(): void {
        console.log("SMS enviado a " + this.destinatario);
        console.log("Mensaje: " + this.mensaje.slice(0, 160) + (this.mensaje.length > 160 ? "..." : ""));
    }
}

class NotificacionWhatsApp extends Notificacion {
    enviar(): void {
        console.log("WhatsApp enviado a " + this.destinatario);
        console.log("Mensaje: " + this.mensaje);
    }
}

class GestorNotificaciones {
    private notificaciones: Notificacion[] = [];

    agregar(notificacion: Notificacion): void {
        this.notificaciones.push(notificacion);
    }

    enviarTodas(): void {
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
