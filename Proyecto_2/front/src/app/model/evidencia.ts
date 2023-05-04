export class Evidencia {
    private id: number;
    private asistencia: Array<string>;
    private link: string;

    public constructor(
        id: number,
        asistencia: Array<string>,
        link: string
    ){
        this.id = id;
        this.asistencia = asistencia;
        this.link = link;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getAsistencia(): Array<string> {
        return this.asistencia;
    }

    public setAsistencia(asistencia: Array<string>): void {
        this.asistencia = asistencia;
    }

    public getLink(): string {
        return this.link;
    }

    public setLink(link: string): void {
        this.link = link;
    }

}