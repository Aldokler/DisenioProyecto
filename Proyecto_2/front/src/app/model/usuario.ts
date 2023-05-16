import { TSede } from "./tsede";

export abstract class Usuario {
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

    abstract getId(): string;

    abstract setId(id: string): void ;

    abstract getNombre(): string;

    abstract setNombre(nombre: string): void ;

    abstract getApellido1(): string ;

    abstract setApellido1(apellido1: string): void ;

    abstract getApellido2(): string ;

    abstract setApellido2(apellido2: string): void ;

    abstract getCorreoElectronico(): string ;

    abstract setCorreoElectronico(correoElectronico: string): void ;

    abstract getCelular(): string;

    abstract setCelular(celular: string): void;

    abstract getSede(): TSede;

    abstract setSede(sede: TSede): void ;

    abstract getContraseñA(): string;

    abstract setContraseñA(contraseña: string): void;

}