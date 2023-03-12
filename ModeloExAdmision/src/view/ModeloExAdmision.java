/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package view;

import controller.Controlador;
import controller.DAO.SingletonDAO;
import controller.DTOFormulario;
import controller.IParametros;
import java.util.ArrayList;
import java.util.List;
import model.Carrera;
import model.Configuracion;
import model.DireccionPCD;
import model.FormularioSolicitante;

/**
 *
 * @author ersolano
 */
public class ModeloExAdmision {

    /**
     * @param args the command line arguments
     */
    
    public static Controlador elCtrl = new Controlador();
    
    public static void demoCarreras(){
        System.out.println("Visualizar todas las carreras de la institucion");
        System.out.println(elCtrl.getCarreras());
        
        String unaSede = "SJ";
        String unaCarrera = "IC";
        int nuevoPuntajeCarrera= 600;
        int nuevaAdmisionCarrera = 100;
        
        System.out.println("Modificar puntaje de admision a " + 
                            nuevoPuntajeCarrera +" de una carrera particular " + 
                           unaSede+"-"+unaCarrera );
        boolean resultado = elCtrl.editarPuntajeMinimoAdmision(unaCarrera, unaSede, nuevoPuntajeCarrera);
        System.out.println( resultado ? "Puntaje minimo modificado" : "No encontro la carrera para cambio de puntaje");
                
        System.out.println("Modificar capacidad de admision a " +
                            nuevaAdmisionCarrera +" de una carrera particular " + 
                           unaSede+"-"+unaCarrera );
        resultado = elCtrl.editarCapacidadAdmision(unaCarrera, unaSede, nuevaAdmisionCarrera);
        System.out.println( resultado ? "Puntaje minimo modificado" : "No encontro la carrera para cambio de capacidad de admision");

        System.out.println("visualizar las carreras de la sede "+ unaSede);
        System.out.println(elCtrl.getCarrerasPorSede(unaSede));
        
    }
    
    public static void demoConfiguracion(){
        int nuevoPuntaje = 900;
         System.out.println("Obteniendo Puntaje General de Admisión actual" +
                            elCtrl.getPuntajeGeneralAdmision()); 
         
         System.out.println("Editando Puntaje General de Admisión ");
        elCtrl.editarPuntajeGeneralAdmision( nuevoPuntaje );
        
        System.out.println("Obteniendo Puntaje General de Admisión " +
                            elCtrl.getPuntajeGeneralAdmision());        
        
        System.out.println("Obteniendo parámetros de forma generica"); 
        System.out.println(Configuracion.getInstance().getParam(IParametros.MAXIMO_PUNTAJE, Integer.class));
        System.out.println(Configuracion.getInstance().getParam(IParametros.ADMIN_USR, String.class));
        System.out.println(Configuracion.getInstance().getParam(IParametros.ADMIN_PWD, String.class));
        System.out.println(Configuracion.getInstance().getParam("INTENTOS", Integer.class));
        System.out.println(Configuracion.getInstance().getParam("CONSECUTIVO_FORM", Integer.class));
        
        System.out.println("Guardando Configuración...");
        elCtrl.guardarConfiguracion();
       Configuracion.getInstance().guardarProperties();
    }
    public static void demoCitas(){
        elCtrl.generarCitas();
        List<Carrera> listaCar = elCtrl.getCarreras();
        List<FormularioSolicitante> ListForms  = new ArrayList<FormularioSolicitante>();
        for (Object object : listaCar) {
            ListForms.addAll(elCtrl.getFormulariosPorCarrera_Estado("IC"));
        }
        for (FormularioSolicitante ListForm : ListForms) {
            System.out.println(ListForm.getNumero() +  
                    ListForm.getNombreSolic() + ListForm.getDetalleExamen().getCitaExamen().getTime() + 
                    ListForm.getDetalleExamen().getLugarExamen());
        }
    }
    public static void main(String[] args) {
        FrGestionExAdmision viewExamen = new FrGestionExAdmision(elCtrl);
        FrFormulario viewForm = new FrFormulario(elCtrl);
        FrCarreras viewCarreras = new FrCarreras(elCtrl);
        
        System.out.println("En demoConfiguracion");
        demoConfiguracion();
    
        System.out.println("En demoCarreras");
        demoCarreras();
       
        System.out.println("Citas");
        demoCitas();
        
        System.out.println("Aplicando examen...");
        
        viewExamen.P6_simularAplicacionExamen();
        
        System.out.println("Definiendo estado de los solicitantes...");
        
        viewExamen.P7_definirSituacionSolicitantePostExamen();
        
        viewForm.P8_verCondicionSolicitud(1000);
        
        System.out.println('\n' + "Mostrando resultado por carrera de los solicitantes...");
        viewCarreras.P9_mostrarResultadosExamenPorCarrera_Solicitante("IC");
    
        System.out.println("Mostrando resultado por estado de carrera de los solicitantes 2 ...");
        viewCarreras.P10_mostrarResultadosExamenPorCarrera_Estado("IC");
        
     }
    
}
