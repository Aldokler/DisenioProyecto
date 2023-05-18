import { Notificador } from "./Notificador";
import * as nodemailer from 'nodemailer';

export class NotificadorCorreo extends Notificador {
    override notificar(emisor: String, destino: String, mensaje: String): boolean {

        //TODO

        return true;
    }
}