import { Component } from '@angular/core';
import { Profesor } from 'src/app/model/profesor';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { TRol } from 'src/app/model/trol';
import { TSede } from 'src/app/model/tsede';
import { DomSanitizer } from '@angular/platform-browser';
import { Buffer } from 'buffer';

@Component({
  selector: 'app-registrar-profesor-guia',
  templateUrl: './registrar-profesor-guia.component.html',
  styleUrls: ['./registrar-profesor-guia.component.css']
})
export class RegistrarProfesorGuiaComponent {

  public imagenPrevia: any
  public imageBuffer: any
  public files: any = []


  constructor(
    private controller: ControladorService,
    private sanitizer: DomSanitizer
  ) { }


  public rolProfesor: TRol = TRol.GUIA;
  nombreArchivo:String = "";

  registrarProfesor(
    codigoCampus: String, correoElectronico: string, telefonoCelular: string, nombreProfesor: string, telefonoOficina: string, fotoProfesor: string, primerApellido: string, segundoApellido: string) {
    const codigoCampusEnum: TSede = TSede[codigoCampus as keyof typeof TSede];
    const profesor: Profesor = new Profesor("LI-616",nombreProfesor,primerApellido,segundoApellido,correoElectronico,telefonoCelular,codigoCampusEnum,"1234",telefonoOficina,this.imageBuffer,this.rolProfesor);
    console.log(profesor);
    this.controller.addProfesor(profesor).pipe(
      tap(res => {
        if (res) {
          console.log("hola")
          console.log(this.imageBuffer);
        }
      })
    ).subscribe()
  }

  handleFileInput(event: any): any {
    const imagen = event.target.files[0];
    if (imagen.type.includes('image')) {
      this.files.push(imagen)
      this.blobFile(imagen).then((res: any) => {
        this.imagenPrevia = res.base;
        //console.log(res.base)
      })
      this.bufferFile(imagen).then((res: any) => {
        this.imageBuffer = res.buffer
        //console.log(res.buffer)
      })
    }
  }

  bufferFile = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsArrayBuffer($event);
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const uint8Array = new Uint8Array(arrayBuffer);
        const buffer = Buffer.from(uint8Array);

        resolve({
          blob: $event,
          image,
          buffer
        });
      };
      reader.onerror = error => {
        resolve({
          blob: $event,
          image,
          base: null
        });
      };
      return null;
    } catch (e) {
      return null;
    }
  })

  blobFile = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          blob: $event,
          image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          blob: $event,
          image,
          base: null
        });
      };
      return null;
    } catch (e) {
      return null;
    }
  })
}
