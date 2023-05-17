import { Observable, map } from "rxjs";
import { Actividad } from "../model/actividad";
import { Comentario } from "../model/comentario";
import { Evidencia } from "../model/evidencia";
import { ApiService } from "./DAO/SERVICES/api.service";
import { TIndoleActividad } from "../model/tindoleactividad";
import { TModalidad } from "../model/tmodalidad";
import { TEstado } from "../model/testado";
import { Profesor } from "../model/profesor";

export class AdminActividad{

    constructor(private DAO: ApiService){}
    
    public getActividad(id: number): Observable<Actividad>{
        return this.DAO.getActividad(id).pipe(
            map((data: any) => {
                console.log(data.actividad[0])
                const json = data.actividad[0];
                if (json == undefined){
                    return new Actividad(0, 0, TIndoleActividad.TECNICO, '', new Date, [], 0, [], TModalidad.PRESENCIAL, '', '', TEstado.PLANEADA, new Evidencia(0, [], ''), [], new Date, '', new Date)
                } else {
                    return new Actividad(
                        json.id,
                        json.semana,
                        json.tipo,
                        json.nombre,
                        json.fechaHora,
                        [],
                        json.diasAnunciar,
                        [],
                        json.modalidad,
                        json.link,
                        json.afiche,
                        json.estado,
                        json.evidencia,
                        [],
                        json.fechaCancelacion,
                        json.observacion,
                        json.fechaAPublicar
                    )
                }
            })
        );
    }
    public crearActividad(nombre: string, semana: number, fechaHora: Date, diasAnunciar: number, link: string, tipo: TIndoleActividad, modalidad: TModalidad, planID: number): Observable<boolean>{
        return this.DAO.addActividad(nombre, semana, fechaHora, diasAnunciar, link, tipo, modalidad, planID).pipe(
            map((data: any) => {
                return data.status == '0'
            })
        )
    }

    public comentarActividad(mensaje: string, emisor: string, fechaHora: Date,actividadId: number){
        return this.DAO.addComentario(mensaje, emisor, fechaHora, actividadId).pipe(
            map((data: any) => {
                return data.status == '0'
            })
        )
    }

    public modificarDatosActividad(id: number, nombre: string, semana: number, fechaHora: Date, diasAnunciar: number, link: string, tipo: TIndoleActividad, modalidad: TModalidad, estado: TEstado): Observable<boolean>{
        return this.DAO.modificarActividad(id, nombre, semana, fechaHora, diasAnunciar, link, tipo, modalidad, estado).pipe(
            map((data: any) => {
                return data.status == '0'
            })
        )
    }
    public agregarObservacion(id: number, observacion: string){
        return this.DAO.addObservacion(id, observacion).pipe(
            map((data: any) => {
                return data.status == '0'
            })
        )
    }

    public getComentarios(id: number): Observable<Comentario[]>{
      return this.DAO.getComentarios(id).pipe(
        map((data: any) => {
            const json = data.comentarios;
            return json.map((json: any) => {
                return new Comentario(
                    json.id,
                    json.mensaje,
                    json.emisor,
                    json.fechaHora,
                    json.comentarioOriginals,
                    json.actividadId
                )
            });
        })
      )
    }

    public getReplies(id: number): Observable<Comentario[]>{
      return this.DAO.getReplies(id).pipe(
        map((data: any) => {
            const json = data.comentarios;
            return json.map((json: any) => {
                return new Comentario(
                    json.id,
                    json.mensaje,
                    json.emisor,
                    json.fechaHora,
                    json.comentarioOriginals,
                    json.actividadId
                )
            });
        })
      )
    }

//-----------------------------------------------------------------------------------------------------------------------

    public subirEvidencia(evidencia: Evidencia): boolean{
        return true
    }
    public modificarEvidencia(id: number): boolean{
        return true
    }
    
    public responderComentario(comentario: Comentario){}
}