import { Injectable } from '@angular/core';
import * as nodemailer from 'nodemailer';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  async sendEmail(to: string, subject: string, message: string) {
    // Configura el objeto de transporte SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'comunicador.proyecto@gmail.com',
        pass: 'jqmxozrbixxukugq'
      }
    });

    // Configura el contenido del correo electrónico
    const mailOptions = {
      from: 'comunicador.proyecto@gmail.com',
      to: to,
      subject: subject,
      text: message
    };

    // Envía el correo electrónico
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.messageId);
  }

}
