/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package view;

import controller.Controlador;
import model.FormularioSolicitante;
import model.TEstadoSolicitante;

/**
 *
 * @author xdavi
 */
public class FrFormulario {

    private Controlador ctrl;

    public FrFormulario(Controlador ctrl) {
        this.ctrl = ctrl;
    }

    public void P4_registrarFormulario() {
    }

    public void P8_verCondicionSolicitud(int idSolicitante) {
        FormularioSolicitante form = ctrl.getFormulario(idSolicitante);

        if (form.getEstado() == TEstadoSolicitante.SOLICITANTE || form.getEstado() == TEstadoSolicitante.CANDIDATO) {
            System.out.println("Aún no se encuentra disponible");
        } else if (form.getEstado() == TEstadoSolicitante.AUSENTE) {
            System.out.print("El solicitante se encuentra en estado Ausente, no se presentó a la prueba ");
        } else {
            System.out.print("El solicitante se encuentra en estado de ");
            System.out.print(form.getEstado().toString());
            System.out.print(".\n");
            System.out.print("Nota obtenida en el examen de admisión: ");
            System.out.print(form.getDetalleExamen().getPuntajeObtenido());
            System.out.print(".\n");
        }

    }
}
