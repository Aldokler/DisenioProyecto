import { Profesor } from "./profesor";

export class EquipoGuia {
    private id: number;
    private miembros: Array<Profesor>;
    private año: number;
    private semestre: number;
    private coordinador: Profesor

    constructor(id: number, miembros: Array<Profesor>, año: number, semestre: number, coordinador: Profesor) {
        this.id = id
        this.miembros = miembros
        this.año = año
        this.semestre = semestre
        this.coordinador = coordinador
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

    public getCoordinador(): Profesor {
        return this.coordinador;
    }

    public setCoordinador(coordinador: Profesor): void {
        this.coordinador = coordinador;
    }

}