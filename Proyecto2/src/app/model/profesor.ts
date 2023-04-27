class Profesor extends Usuario {
    private telefonoOficina: string;
    private fotografia: string;
    private rol: TRol;

    public constructor ( 
        id: string,
        nombre: string,
        apellido1: string,
        apellido2: string,
        correoElectronico: string,
        celular: string,
        sede: TSede,
        contraseña: string,
        telefonoOficina: string,
        fotografia: string,
        rol: TRol
    ){
        super(
            id,
            nombre,
            apellido1,
            apellido2,
            correoElectronico,
            celular,
            sede,
            contraseña);
        this.telefonoOficina = telefonoOficina;
        this.fotografia = fotografia;
        this.rol = rol;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido1(): string {
        return this.apellido1;
    }

    public setApellido1(apellido1: string): void {
        this.apellido1 = apellido1;
    }

    public getApellido2(): string {
        return this.apellido2;
    }

    public setApellido2(apellido2: string): void {
        this.apellido2 = apellido2;
    }

    public getCorreoElectronico(): string {
        return this.correoElectronico;
    }

    public setCorreoElectronico(correoElectronico: string): void {
        this.correoElectronico = correoElectronico;
    }

    public getCelular(): string {
        return this.celular;
    }

    public setCelular(celular: string): void {
        this.celular = celular;
    }

    public getSede(): TSede {
        return this.sede;
    }

    public setSede(sede: TSede): void {
        this.sede = sede;
    }

    public getContraseñA(): string {
        return this.contraseña;
    }

    public setContraseñA(contraseña: string): void {
        this.contraseña = contraseña;
    }

    public getTelefonoOficina(): string {
        return this.telefonoOficina;
    }

    public setTelefonoOficina(telefonoOficina: string): void {
        this.telefonoOficina = telefonoOficina;
    }

    public getFotografia(): string {
        return this.fotografia;
    }

    public setFotografia(fotografia: string): void {
        this.fotografia = fotografia;
    }

    public getRol(): TRol {
        return this.rol;
    }

    public setRol(rol: TRol): void {
        this.rol = rol;
    }


}