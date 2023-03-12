/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controller;

import controller.DAO.SingletonDAO;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;
import model.CentroAplicacion;
import model.FormularioSolicitante;

/**
 *
 * @author Sharon
 */
public class GeneradorCitas {

    // rango de fechas en las que se generan las citas
    private Calendar fechaInicio = Calendar.getInstance();
    private Calendar fechaFinal = Calendar.getInstance();
    
    private List<CentroAplicacion> tablaCentrosAplicacion;
    private AdmFormularios AdmFormularios = new AdmFormularios();
     UtilitarioComunicacion comunicacion = new UtilitarioComunicacion();

    public GeneradorCitas() {
        fechaInicio.set(2023, Calendar.SEPTEMBER, 1); // desde el 2 de setiembre de 2023
        fechaFinal.set(2023, Calendar.SEPTEMBER, 12); // 12 de setiembre de 2023
    }

    public GeneradorCitas(Calendar fechaInicio, Calendar fechaFinal) {
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;

    }

    public void GenerarCitas() {
        asignarCitasASolicitantes();
        notificarFormularios();
    }

    private CentroAplicacion asignarCentro() {
        Random random = new Random();
        int index = random.nextInt(tablaCentrosAplicacion.size()-1);
        return tablaCentrosAplicacion.get(index);
    }

    private Calendar generarFecha() {

        long rango = Math.abs(fechaInicio.getTimeInMillis() - fechaFinal.getTimeInMillis()) / (24 * 60 * 60 * 1000);
        Random random = new Random();
        int tiempoRandom = random.nextInt((int) rango) + 1;

        Calendar fechaCita = Calendar.getInstance();
        fechaCita.setTime(fechaInicio.getTime());
        fechaCita.add(Calendar.DATE, tiempoRandom);

        fechaCita.set(Calendar.HOUR_OF_DAY, 7);
        fechaCita.set(Calendar.MINUTE, 30);
        fechaCita.set(Calendar.SECOND, 0);

        return fechaCita;
    }

    public void asignarCitasASolicitantes() {
        List<FormularioSolicitante> formularios = AdmFormularios.getFormularios();
        for (FormularioSolicitante formulario : formularios) {
            AdmFormularios.registrarCitaAplicacionExamen(formulario.getNumero(), generarFecha(), asignarCentro());
        }
    }

    public void notificarFormularios() {
        List<FormularioSolicitante> formularioSolicitantes = AdmFormularios.getFormularios();
        for (FormularioSolicitante formulario : formularioSolicitantes) {
            String destinatario = formulario.getCorreoSolic();
            String emisor = "tec.ac.cr";
            String asunto = "Saludos " + formulario.getNombreSolic() + " se le informa los detalles de su cita de aplicacion del examen";
            comunicacion.enviarCorreo(emisor, destinatario, asunto);
        }
    }

}
