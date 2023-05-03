import { Actividad } from "../model/actividad";
import { Comentario } from "../model/comentario";
import { Evidencia } from "../model/evidencia";

export class AdminActividad{
    public crearActividad(actividad: Actividad): boolean{
        return true
    }
    public modificarDatosActividad(actividad: Actividad): boolean{
        return true
    }
    public subirEvidencia(evidencia: Evidencia): boolean{
        return true
    }
    public modificarEvidencia(id: number): boolean{
        return true
    }
    public comentarActividad(comentario: Comentario){}
    public responderComentario(comentario: Comentario){}
    public agregarObservacion(observacion: String, fecha: Date){}
}