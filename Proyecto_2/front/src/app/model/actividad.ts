import { Comentario } from "./comentario";
import { Evidencia } from "./evidencia";
import { Profesor } from "./profesor";
import { TEstado } from "./testado";
import { TIndoleActividad } from "./tindoleactividad";
import { TModalidad } from "./tmodalidad";

export class Actividad {
    private id: number;
    private semana: number;
    private tipo: TIndoleActividad;
    private nombre: string;
    private fechaHora: Date;
    private responsables: Array<Profesor>;
    private diasAnunciar: number;
    private diasRecordatorio: Array<Date>;
    private modalidad: TModalidad;
    private link: string;
    private afiche: string;
    private estado: TEstado;
    private evidencia: Evidencia;
    private comentarios: Array<Comentario>;
    private fechaCancelacion: Date;
    private observacion: string;
    private fechaAPublicar: Date;

    constructor(
        id: number,
        semana: number,
        tipo: TIndoleActividad,
        nombre: string,
        fechaHora: Date,
        responsables: Array<Profesor>,
        diasAnunciar: number,
        diasRecordatorio: Array<Date>,
        modalidad: TModalidad,
        link: string,
        afiche: string,
        estado: TEstado,
        evidencia: Evidencia,
        comentarios: Array<Comentario>,
        fechaCancelacion: Date,
        observacion: string,
        fechaAPublicar: Date
    ) {
        this.id = id
        this.semana = semana
        this.tipo = tipo
        this.nombre = nombre
        this.fechaHora = fechaHora
        this.responsables = responsables
        this.diasAnunciar = diasAnunciar
        this.diasRecordatorio = diasRecordatorio
        this.modalidad = modalidad
        this.link = link
        this.afiche = afiche
        this.estado = estado
        this.evidencia = evidencia
        this.comentarios = comentarios
        this.fechaCancelacion = fechaCancelacion
        this.observacion = observacion
        this.fechaAPublicar = fechaAPublicar
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getSemana(): number {
        return this.semana;
    }

    public setSemana(semana: number): void {
        this.semana = semana;
    }

    public getTipo(): TIndoleActividad {
        return this.tipo;
    }

    public setTipo(tipo: TIndoleActividad): void {
        this.tipo = tipo;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getFechaHora(): Date {
        return this.fechaHora;
    }

    public setFechaHora(fechaHora: Date): void {
        this.fechaHora = fechaHora;
    }

    public getResponsables(): Array<Profesor> {
        return this.responsables;
    }

    public setResponsables(responsables: Array<Profesor>): void {
        this.responsables = responsables;
    }

    public getDiasAnunciar(): number {
        return this.diasAnunciar;
    }

    public setDiasAnunciar(diasAnunciar: number): void {
        this.diasAnunciar = diasAnunciar;
    }

    public getDiasRecordatorio(): Array<Date> {
        return this.diasRecordatorio;
    }

    public setDiasRecordatorio(diasRecordatorio: Array<Date>): void {
        this.diasRecordatorio = diasRecordatorio;
    }

    public getModalidad(): TModalidad {
        return this.modalidad;
    }

    public setModalidad(modalidad: TModalidad): void {
        this.modalidad = modalidad;
    }

    public getLink(): string {
        return this.link;
    }

    public setLink(link: string): void {
        this.link = link;
    }

    public getAfiche(): string {
        return this.afiche;
    }

    public setAfiche(afiche: string): void {
        this.afiche = afiche;
    }

    public getEstado(): TEstado {
        return this.estado;
    }

    public setEstado(estado: TEstado): void {
        this.estado = estado;
    }

    public getEvidencia(): Evidencia {
        return this.evidencia;
    }

    public setEvidencia(evidencia: Evidencia): void {
        this.evidencia = evidencia;
    }

    public getComentarios(): Array<Comentario> {
        return this.comentarios;
    }

    public setComentarios(comentarios: Array<Comentario>): void {
        this.comentarios = comentarios;
    }

    public getFechaCancelacion(): Date {
        return this.fechaCancelacion;
    }

    public setFechaCancelacion(fechaCancelacion: Date): void {
        this.fechaCancelacion = fechaCancelacion;
    }

    public getObservacion(): string {
        return this.observacion;
    }

    public setObservacion(observacion: string): void {
        this.observacion = observacion;
    }

    public getFechaAPublicar(): Date {
        return this.fechaAPublicar;
    }

    public setFechaAPublicar(fechaAPublicar: Date): void {
        this.fechaAPublicar = fechaAPublicar;
    }

}