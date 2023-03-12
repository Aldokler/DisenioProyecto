/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package view;

import controller.Controlador;

/**
 *
 * @author xdavi
 */
public class FrGestionExAdmision {
    
    private Controlador ctrl;

    public FrGestionExAdmision(Controlador ctrl) {
        this.ctrl = ctrl;
    }
    
    public void P5_definirCitasYNotificar(){
        ctrl.generarCitas();
    }
    
    public void P6_simularAplicacionExamen(){
        ctrl.simulaciónAplicacionExamen();
        System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    }
    
    public void P7_definirSituacionSolicitantePostExamen(){
        ctrl.definirSituacionCandidatos();
    }
}
