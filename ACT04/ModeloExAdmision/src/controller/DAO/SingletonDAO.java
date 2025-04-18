/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller.DAO;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import model.Carrera;
import model.CentroAplicacion;
import model.DatosExamen;
import model.DireccionPCD;
import model.FormularioSolicitante;
import model.Sede;
import model.TEstadoSolicitante;
import model.TGrado;

/**
 *
 * @author ersolano
 */
public class SingletonDAO {

    private static SingletonDAO instance;

    private ArrayList<Carrera> tablaCarreras = new ArrayList();
    private ArrayList<Sede> tablaSedes = new ArrayList();
    private ArrayList<CentroAplicacion> tablaCentros = new ArrayList();
    private ArrayList<DireccionPCD> tablaPCD = new ArrayList();
    private ArrayList<FormularioSolicitante> tablaFormularios = new ArrayList();

    // temporalmente hay una representación de datos que estan en una BD 
    // simulando el acceso a una instancia del modelo de datos persistente
    private SingletonDAO() {
        tablaSedes.add(new Sede("CA", "Cartago"));       //tablaSedes.get(0)
        tablaSedes.add(new Sede("SJ", "San Jose"));      //tablaSedes.get(1)
        //tablaSedes.add(new Sede("LI", "Limon"));         //tablaSedes.get(2)
       // tablaSedes.add(new Sede("SC", "San Carlos"));    //tablaSedes.get(3)
       // tablaSedes.add(new Sede("AL", "Alajuela"));      //tablaSedes.get(4)

        

        // carreras de San Jose
        tablaCarreras.add(new Carrera("IC", "Ingenieria en Computacion", tablaSedes.get(1), TGrado.BACHILLERATO, 10, 200));
        tablaCarreras.add(new Carrera("PI", "Ingenieria en Produccion Industrial", tablaSedes.get(1), TGrado.LICENCIATURA, 10, 200));
        
        //carreras de Cartago
        tablaCarreras.add(new Carrera("IC", "Ingenieria en Computacion", tablaSedes.get(0), TGrado.BACHILLERATO, 11, 250));
        tablaCarreras.add(new Carrera("PI", "Ingenieria en Produccion Industrial", tablaSedes.get(0), TGrado.LICENCIATURA, 11, 250));

        // carreras de Limon
        //tablaCarreras.add(new Carrera("IC", "Ingenieria en Computacion", tablaSedes.get(2), TGrado.BACHILLERATO, 10, 650));
        //tablaCarreras.add(new Carrera("PI", "Ingenieria en Produccion Industrial", tablaSedes.get(2), TGrado.LICENCIATURA, 10 , 520));

        // direcciones PCD
        tablaPCD.add(new DireccionPCD("Cartago", "Central", "Oriental"));       //0
        tablaPCD.add(new DireccionPCD("Cartago", "Central", "Agua Caliente"));  //1
        tablaPCD.add(new DireccionPCD("Cartago", "Paraiso", "Santiago"));       //2
        tablaPCD.add(new DireccionPCD("Cartago", "Paraiso", "Orosi"));          //3
        tablaPCD.add(new DireccionPCD("San José", "Central", "Carmen"));        //4
        tablaPCD.add(new DireccionPCD("San José", "Central", "Hospital"));      //5
        tablaPCD.add(new DireccionPCD("San José", "Central", "Merced"));        //6

        // centros de aplicación de examen
        tablaCentros.add(new CentroAplicacion(100, "Colegio Agua Caliente", tablaPCD.get(1), "Colegio Académico"));
        tablaCentros.add(new CentroAplicacion(200, "TEC Campus Central", tablaPCD.get(0), "Campus Central ITCR"));
        tablaCentros.add(new CentroAplicacion(100, "TEC Campus Local SJ", tablaPCD.get(4), "CTLSJ"));

    }

    public static SingletonDAO getInstance() {
        if (instance == null) {
            instance = new SingletonDAO();
        }
        return instance;
    }

    public List<CentroAplicacion> getCentrosAplicacion() {
        return tablaCentros;
    }

    public List<Carrera> getCarreras() {
        // pendiente: conectar a la persistencia y recuperar las carreras
        return tablaCarreras;
    }

    public List<Sede> getSedes() {
        // pendiente: conectar a la persistencia y recuperar las sedes
        return tablaSedes;
    }

    public FormularioSolicitante consultarFormulario(int idSolic) {
        for (FormularioSolicitante form : tablaFormularios) {
            if (form.getIdSolic() == idSolic) {
                return form;
            }
        }
        return null;
    }

    public List<FormularioSolicitante> getFormulario(TEstadoSolicitante estado) {
        // pendiente: conectar a la persistencia y recuperar los formularios, retornar en orden descendente por nota de admisión
        List<FormularioSolicitante> formularios = new ArrayList();
        for (FormularioSolicitante formulario : tablaFormularios) {
            if (formulario.getEstado() == estado ) {
                formularios.add(formulario);
            }
        }
        Collections.sort(formularios);
        return formularios;
    }

    public List<FormularioSolicitante> getFormularios() {
        // pendiente: conectar a la persistencia y recuperar los formularios
        Collections.sort(tablaFormularios);
        return tablaFormularios;
    }

    public List<FormularioSolicitante> getFormularioCarrera(Carrera carrera) {
        // pendiente: conectar a la persistencia y recuperar las carreras
        List<FormularioSolicitante> formularios = new ArrayList();
        for (FormularioSolicitante formulario : tablaFormularios) {
            if (formulario.getCarreraSolic().getCodigo().equals(carrera.getCodigo()) && formulario.getCarreraSolic().getSede().equals(carrera.getSede())) {
                formularios.add(formulario);
            }
        }
        return formularios;
    }

    public List<Carrera> getCarreras(String codigoSede) {
        List<Carrera> carrerasSede = new ArrayList();
        for (Iterator<Carrera> it = tablaCarreras.iterator(); it.hasNext();) {
            Carrera carrera = it.next();
            if (carrera.getSede().getCodigo().equals(codigoSede)) {
                carrerasSede.add(carrera);
            }
        }
        return carrerasSede;
    }

    public Carrera consultarUnaCarrera(String codigoCarrera, String codigoSede) {
        for (Carrera unaCarrera : tablaCarreras) {
            if (unaCarrera.getCodigo().equals(codigoCarrera) && unaCarrera.getSede().getCodigo().equals(codigoSede)) {
                return unaCarrera;
            }
        }
        return null;
    }

    public boolean editarCarrera(Carrera unaCarrera) {
        for (int i = 0; i < tablaCarreras.size(); i++) {
            Carrera actual = tablaCarreras.get(i);
            if (actual.getCodigo().equals(unaCarrera.getCodigo())
                    && actual.getSede().getCodigo().equals(unaCarrera.getSede().getCodigo())) {
                tablaCarreras.set(i, unaCarrera);
                return true;
            }
        }
        return false;
    }

    public DireccionPCD getPCD(int pos) {
        if (pos >= 0 && pos < tablaPCD.size()) {
            return tablaPCD.get(pos);
        } else {
            return null;
        }
    }

    public boolean agregarFormulario(FormularioSolicitante unFormulario) {
        for (FormularioSolicitante form : tablaFormularios) {
            if (form.getNumero() == unFormulario.getNumero()) {
                return false;
            }
        }
        tablaFormularios.add(unFormulario);
        return true;
    }

    public boolean actualizarCapacidadCarrera(String codigo, String sede, int capacidadAdmision) {
        for (Carrera car : tablaCarreras) {
            if (car.getCodigo().equals(codigo) && car.getSede().getCodigo().equals(sede)) {
                car.setMaxAdmision(capacidadAdmision);
                return true;
            }
        }
        return false;
    }

    public boolean actualizarFormulario(int id, TEstadoSolicitante estado) {
        for (FormularioSolicitante formulario : tablaFormularios) {
            if (formulario.getIdSolic() == id) {
                formulario.setEstado(estado);
                return true;
            }
        }
        return false;
    }

    public boolean actualizarFormulario(int numero, int puntajeObtenido) {
        for (FormularioSolicitante formulario : tablaFormularios) {
            if (formulario.getNumero() == numero) {
                formulario.getDetalleExamen().setPuntajeObtenido(puntajeObtenido);
                return true;
            }
        }
        return false;
    }

    public boolean actualizarFormulario(int numero, Calendar fechaExamen, CentroAplicacion lugar) {
        for (FormularioSolicitante formulario : tablaFormularios) {
            if (formulario.getNumero() == numero) {
                formulario.getDetalleExamen().setCitaExamen(fechaExamen);
                formulario.getDetalleExamen().setLugarExamen(lugar);
                return true;
            }
        }
        return false;
    }

}
