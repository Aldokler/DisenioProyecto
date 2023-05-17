import { Profesor } from "./profesor";

export class Comentario {
    private id: number
    private mensaje: string;
    private emisor: Profesor;
    private fechaHora: Date;
    private comentarioOriginal: Comentario;

    constructor(
        id: number,
        mensaje: string,
        emisor: Profesor,
        fechaHora: Date,
        comentarioOriginal: Comentario
    ) {
        this.id = id
        this.mensaje = mensaje
        this.emisor = emisor
        this.fechaHora = fechaHora
        this.comentarioOriginal = comentarioOriginal
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

    public getComentarioOriginal(): Comentario {
        return this.comentarioOriginal;
    }

    public setComentarioOriginal(comentarioOriginal: Comentario): void {
        this.comentarioOriginal = comentarioOriginal;
    }

}