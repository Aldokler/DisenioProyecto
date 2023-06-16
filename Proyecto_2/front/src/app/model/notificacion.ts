export class Notificacion {
    private id: number;
    private fechaHora: string;
    private contenido: string;
    private idEmisor: number;
    private emisorTipo: string;
    private emisor: string
    private estado:number
    private nombre: string

    constructor(
        id: number,
        fechaHora: string,
        contenido: string,
        idEmisor: number,
        emisorTipo: string,
        emisor: string,
        estado: number,
        nombre: string
    ) {
        this.id = id
        this.fechaHora = fechaHora
        this.contenido = contenido
        this.idEmisor = idEmisor
        this.emisorTipo = emisorTipo
        this.emisor = emisor
        this.estado = estado
        this.nombre = nombre
    }
    
    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
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


    public getEstado(): number {
        return this.estado;
    }

    public setEstado(estado: number): void {
        this.estado = estado;
    }
}