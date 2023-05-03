export abstract class Notificador {
    abstract notificar(emisor: String, destino: String, mensaje: String): boolean
}