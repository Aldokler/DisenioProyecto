import { Notificador } from "./Notificador";
import { transporter } from "../../../../back/apiRestNode/config/mailer";

export class NotificadorCorreo extends Notificador {

    override async notificar(emisor: String, destino: String, mensaje: String): Promise<void> {
        try {
            // send mail with defined transport object
        await transporter.sendMail({
            from: '"Fred Foo 👻" <comunicador.proyecto@gmail.com>', // sender address
            to: destino, // list of receivers
            subject: "Hello ✔", // Subject line
            text: mensaje // plain text body
            //html: "<b>Hello world?</b>", // html body
  });
        } catch (error) {
            
        }
    }

}

