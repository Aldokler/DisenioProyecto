import { Notificador } from "./Notificador";

export class NotificadorCorreo extends Notificador {
    override notificar(emisor: String, destino: String, mensaje: String): boolean {

        //TODO

        return true;
    }
}