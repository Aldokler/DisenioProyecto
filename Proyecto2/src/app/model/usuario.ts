class Usuario {
    protected id: string;
    protected nombre: string;
    protected apellido1: string;
    protected apellido2: string;
    protected correoElectronico: string;
    protected celular: string;
    protected sede: TSede;
    protected contraseña: string;

    protected constructor ( 
        id: string,
        nombre: string,
        apellido1: string,
        apellido2: string,
        correoElectronico: string,
        celular: string,
        sede: TSede,
        contraseña: string
    ){
        this.id = id;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.correoElectronico = correoElectronico;
        this.celular = celular;
        this.sede = sede;
        this.contraseña = contraseña;
    }

}