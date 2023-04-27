import { Actividad } from "./actividad";
import { EquipoGuia } from "./equipoguia";

export class PlanDeTrabajo {
    private id: number;
    private año: number;
    private semestre: number;
    private itinerarioActividades: Array<Actividad>;
    private creador: EquipoGuia;

    constructor(
        id: number,
        año: number,
        semestre: number,
        itinerarioActividades: Array<Actividad>,
        creador: EquipoGuia
    ) {
        this.id = id
        this.año = año
        this.semestre = semestre
        this.itinerarioActividades = itinerarioActividades
        this.creador = creador
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getAñO(): number {
        return this.año;
    }

    public setAñO(año: number): void {
        this.año = año;
    }

    public getSemestre(): number {
        return this.semestre;
    }

    public setSemestre(semestre: number): void {
        this.semestre = semestre;
    }

    public getItinerarioActividades(): Array<Actividad> {
        return this.itinerarioActividades;
    }

    public setItinerarioActividades(itinerarioActividades: Array<Actividad>): void {
        this.itinerarioActividades = itinerarioActividades;
    }

    public getCreador(): EquipoGuia {
        return this.creador;
    }

    public setCreador(creador: EquipoGuia): void {
        this.creador = creador;
    }

}