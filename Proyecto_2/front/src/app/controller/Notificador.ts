export abstract class Notificador {
    abstract notificar(destinatario: string, asunto: string, contenido: string): void
}