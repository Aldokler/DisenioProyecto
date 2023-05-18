import { Component } from '@angular/core';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Evidencia } from 'src/app/model/evidencia';
import { DomSanitizer } from '@angular/platform-browser';
import { PasarDatosService } from 'src/app/pasar-datos.service';
import { Buffer } from 'buffer';
import { tap } from 'rxjs';

@Component({
  selector: 'app-agregar-modificar-evidencia-plan-de-trabajo',
  templateUrl: './agregar-modificar-evidencia-plan-de-trabajo.component.html',
  styleUrls: ['./agregar-modificar-evidencia-plan-de-trabajo.component.css']
})
export class AgregarModificarEvidenciaPlanDeTrabajoComponent {

  public imagenPrevia: any
  public imageBuffer: any
  public files: any = []

  constructor(
    private controller: ControladorService,
    private sanitizer: DomSanitizer
  ) {}
  public pasarDatos: PasarDatosService = PasarDatosService.getInstance()
  public evidencias : Evidencia[] = [];


  ngOnInit(): void {
    
  }

  agregarEvidencia(link: string){
    console.log(this.pasarDatos.actividadPlanDeTrabajo.getId())
    console.log(link)
    console.log(this.imageBuffer)
    this.controller.subirLink(this.pasarDatos.actividadPlanDeTrabajo.getId(), link).pipe(
      tap(res => {
        if (res){ console.log("si")}
      })
    ).subscribe()
    this.controller.subirAsistencia(this.pasarDatos.actividadPlanDeTrabajo.getId(), this.imageBuffer).pipe(
      tap(res => {
        if (res){ console.log("si")}
      })
    ).subscribe()
  }

  eliminarFotoEvidencia(){

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
