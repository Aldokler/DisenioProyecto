/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import controller.DAO.SingletonDAO;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import model.Carrera;
import model.Configuracion;
import model.FormularioSolicitante;
import model.Sede;

/**
 *
 * @author ersolano
 */
public class Controlador {

    private AdmConfiguracion admConfig = new AdmConfiguracion();
    private AdmCarreras admCarreras = new AdmCarreras();
    private AdmFormularios admFormularios = new AdmFormularios();
    private GeneradorCitas generadorCitas = new GeneradorCitas();

    public Controlador() {
    }

    public boolean editarPuntajeGeneralAdmision(int nuevoValor) {
        return admConfig.editarPuntajeAdmision(nuevoValor);
    }

    public int getPuntajeGeneralAdmision() {
        return admConfig.getPuntajeAdmision();
    }

    public boolean guardarConfiguracion() {
        return admConfig.guardarConfiguracion();
    }

    public List<Carrera> getCarreras() {
        return admCarreras.getCarreras();
    }

    public List<Carrera> getCarrerasPorSede(String sede) {
        return admCarreras.getCarreras(sede);
    }

    public boolean editarCapacidadAdmision(String codigoCarrera, String codigoSede, int capacidad) {
        return admCarreras.editarCarrera(codigoCarrera, codigoSede, capacidad);
    }

    public boolean editarPuntajeMinimoAdmision(String codigoCarrera, String codigoSede, int puntaje) {
        return admCarreras.editarCarrera(puntaje, codigoCarrera, codigoSede);
    }

    public boolean registrarFormulario(DTOFormulario elDTO) {
        // se hace cualquier otra operación que se pudiera requerir 
        return admFormularios.registrarFormulario(elDTO);
    }

    public FormularioSolicitante getFormulario(int idSolic) {
        return admFormularios.consultarFormulario(idSolic);
    }

    public boolean generarCitas() {
        return generadorCitas.GenerarCitas();
    }

    public void simulaciónAplicacionExamen() {
        admFormularios.simularApliacionExamen();
    }

    public void definirSituacionCandidatos() {
        admFormularios.definirEstadoAdmisionCandidatos();
    }

    public List<FormularioSolicitante> getFormulariosPorCarrera_Solicitante(Carrera carrera) {
        return admFormularios.getDesgloseCandidatosPorSolicitante(carrera);
    }

    public List<FormularioSolicitante> getFormulariosPorCarrera_Estado(Carrera carrera) {
        return admFormularios.getDesgloseCandidatosPorCarrera(carrera);
    }

    public List<Sede> getSedes() {
    // función solo para prueba momentanea de fucniones, 
    //se debbería hacer un administrador de sedes con este función
      return SingletonDAO.getInstance().getSedes();
    }

}

//    public Object getParam(String param, Class elTipo) {
//        if (Integer.class.equals(elTipo)) {
//            return Configuracion.getInstance().getParam(param, Integer.class);
//        }
//        if (String.class.equals(elTipo)) {
//            return Configuracion.getInstance().getParam(param, String.class);
//        }
//        if (Double.class.equals(elTipo)) {
//            return Configuracion.getInstance().getParam(param, Double.class);
//        }
//        return null;
//
//    }
