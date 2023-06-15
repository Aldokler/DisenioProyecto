export class Notificacion {
    private id: number;
    private fechaHora: string;
    private contenido: string;
    private idEmisor: number;
    private emisorTipo: string;
    private emisor: string

    constructor(
        id: number,
        fechaHora: string,
        contenido: string,
        idEmisor: number,
        emisorTipo: string,
        emisor: string
    ) {
        this.id = id
        this.fechaHora = fechaHora
        this.contenido = contenido
        this.idEmisor = idEmisor
        this.emisorTipo = emisorTipo
        this.emisor = emisor
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

    public getEmisor(): string {
        return this.emisor;
    }

    public setEmisor(Emisor: string): void {
        this.emisor = Emisor;
    }

    public getEmisorTipo(): string {
        return this.emisorTipo;
    }

    public setEmisorTipo(emisorTipo: string): void {
        this.emisorTipo = emisorTipo;
    }
}