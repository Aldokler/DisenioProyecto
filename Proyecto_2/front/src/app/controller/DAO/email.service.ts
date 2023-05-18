import { Injectable } from '@angular/core';
import * as nodemailer from 'nodemailer';
import { transporter } from "../../../../../back/apiRestNode/config/mailer";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  async sendEmail(to: string, subject: string, message: string) {
    try {
      // send mail with defined transport object
  await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
});
  } catch (error) {
      
  }

  
  }
}
