class EquipoGuia {
    private miembros: Array<Profesor>;
    private año: number;
    private semestre: number;

    constructor(miembros: Array<Profesor>, año: number, semestre: number) {
        this.miembros = miembros
        this.año = año
        this.semestre = semestre
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