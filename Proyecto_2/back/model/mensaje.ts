export class Mensaje {
    private id: number;
    private emisor: string;
    private fechaHora: string;
    private contenido: string;
    private chatID: number;

    constructor(
        id: number,
        emisor: string,
        fechaHora: string,
        contenido: string,
        chatID: number
    ) {
        this.id = id
        this.emisor = emisor
        this.fechaHora = fechaHora
        this.contenido = contenido
        this.chatID = chatID
    }
    
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getEmisor(): string {
        return this.emisor;
    }

    public setEmisor(emisor: string): void {
        this.emisor = emisor;
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


    public getChatID(): number {
        return this.id;
    }

    public setChatID(id: number): void {
        this.id = id;
    }
}