export class Chat {
    private id: number;
    private host: string

    constructor(
        id: number,
        host: string
    ) {
        this.id = id
        this.host = host
    }
    
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getHost(): string {
        return this.host;
    }

    public setHost(host: string): void {
        this.host = host;
    }
}