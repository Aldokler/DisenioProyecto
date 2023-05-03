import { Actividad } from "src/app/model/actividad";
import { Estudiante } from "src/app/model/estudiante";
import { Profesor } from "src/app/model/profesor";

export class SingletonDAO{
    private static instance: SingletonDAO;

    private constructor(){}

    public static getInstance(): SingletonDAO {
        if (!SingletonDAO.instance) {
            SingletonDAO.instance = new SingletonDAO();
        }
        
        return SingletonDAO.instance;
    }

    public getEstudiantes():  Estudiante[]{
        return []
    }
    public getActividades(): Actividad[]{
        return []
    }
    public getProfesores(): Profesor[]{
        return []
    }
}