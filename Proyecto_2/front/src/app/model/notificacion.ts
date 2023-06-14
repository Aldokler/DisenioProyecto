export class Notificacion {
    private id: number;
    private fechaHora: string;
    private contenido: string;
    private idEmisor: number;
    private emisorTipo: string;

    constructor(
        id: number,
        fechaHora: string,
        contenido: string,
        idEmisor: number,
        emisorTipo: string,
    ) {
        this.id = id
        this.fechaHora = fechaHora
        this.contenido = contenido
        this.idEmisor = idEmisor
        this.emisorTipo = emisorTipo
    }
    
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getFechaHora(): string {
        return this.fechaHora;
    }

    public setFechaHora(fechaHora: string): void {
        this.fechaHora = fechaHora;
    }

    public getContenido(): string {
        return this.contenido;
    }

    public setContenido(contenido: string): void {
        this.contenido = contenido;
    }

    public getIdEmisor(): number {
        return this.idEmisor;
    }

    public setIdEmisor(idEmisor: number): void {
        this.idEmisor = idEmisor;
    }

    public getmisorTipo(): string {
        return this.emisorTipo;
    }

    public setEmisorTipo(emisorTipo: string): void {
        this.emisorTipo = emisorTipo;
    }
}