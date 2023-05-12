import { Profesor } from "./profesor";

export class EquipoGuia {
    private id: number;
    private miembros: Array<Profesor>;
    private año: number;
    private semestre: number;

    constructor(id: number, miembros: Array<Profesor>, año: number, semestre: number) {
        this.id = id
        this.miembros = miembros
        this.año = año
        this.semestre = semestre
    }

    public getId(): number {
        return this.id
    }

    public setId(id: number): void {
        this.id = id
    }

    public getMiembros(): Array<Profesor> {
        return this.miembros;
    }

    public setMiembros(miembros: Array<Profesor>): void {
        this.miembros = miembros;
    }

    public getAño(): number {
        return this.año;
    }

    public setAño(año: number): void {
        this.año = año;
    }

    public getSemestre(): number {
        return this.semestre;
    }

    public setSemestre(semestre: number): void {
        this.semestre = semestre;
    }

}