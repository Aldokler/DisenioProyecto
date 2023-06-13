import { retry } from "rxjs";
import { TSede } from "./tsede";
import { Usuario } from "./usuario";

export class Estudiante extends Usuario {
    private fotografia: any;
    private foto: any;

    public constructor ( 
        id: string,
        nombre: string,
        apellido1: string,
        apellido2: string,
        correoElectronico: string,
        celular: string,
        sede: TSede,
        contraseña: string,
        foto: any
    ){
        super(
            id,
            nombre,
            apellido1,
            apellido2,
            correoElectronico,
            celular,
            sede,
            contraseña,);
            this.foto = foto;
    }

    public getFoto(): any {
        return this.foto;
    }

    public setFoto(foto: any): void{
        this.foto = foto;
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

}