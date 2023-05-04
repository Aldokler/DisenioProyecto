import { CreatorNotificador } from "./CreatorNotificador";
import { Notificador } from "./Notificador";
import { NotificadorCorreo } from "./NotificadorCorreo";

export class CreatorNotificadorCorreo extends CreatorNotificador {
    override crearNotificador(): Notificador{
        return new NotificadorCorreo();
    }
}