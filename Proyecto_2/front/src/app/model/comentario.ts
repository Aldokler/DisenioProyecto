import { Profesor } from "./profesor";

export class Comentario {
    private id: number
    private mensaje: string;
    private emisor: Profesor;
    private fechaHora: Date;
    private comentarioOriginal: number;
    private actividadId: number;

    constructor(
        id: number,
        mensaje: string,
        emisor: Profesor,
        fechaHora: Date,
        comentarioOriginal: number,
        actividadId: number
    ) {
        this.id = id
        this.mensaje = mensaje
        this.emisor = emisor
        this.fechaHora = fechaHora
        this.comentarioOriginal = comentarioOriginal
        this.actividadId = actividadId
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getMensaje(): string {
        return this.mensaje;
    }

    public setMensaje(mensaje: string): void {
        this.mensaje = mensaje;
    }

    public getEmisor(): Profesor {
        return this.emisor;
    }

    public setEmisor(emisor: Profesor): void {
        this.emisor = emisor;
    }

    public getFechaHora(): Date {
        return this.fechaHora;
    }

    public setFechaHora(fechaHora: Date): void {
        this.fechaHora = fechaHora;
    }

    public getComentarioOriginal(): number {
        return this.comentarioOriginal;
    }

    public setComentarioOriginal(comentarioOriginal: number): void {
        this.comentarioOriginal = comentarioOriginal;
    }

    public getActividadId(): number {
        return this.actividadId;
    }

    public setActividadId(actividadId: number): void {
        this.actividadId = actividadId;
    }

}