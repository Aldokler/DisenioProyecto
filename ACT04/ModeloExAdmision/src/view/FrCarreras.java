package view;

import controller.Controlador;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import model.Carrera;
import model.FormularioSolicitante;
import static model.TEstadoSolicitante.ADMITIDO;
import static model.TEstadoSolicitante.CANDIDATO;
import static model.TEstadoSolicitante.RECHAZADO;

/**
 *
 * @author bryan
 */
public class FrCarreras {

    private Controlador ctrl;

    public FrCarreras(Controlador ctrl) {
        this.ctrl = ctrl;
    }

    public void P9_mostrarResultadosExamenPorCarrera_Solicitante(Carrera carrera) {
        List<FormularioSolicitante> formularios = ctrl.getFormulariosPorCarrera_Solicitante(carrera);

        Collections.sort(formularios, new Comparator<FormularioSolicitante>() {
            @Override
            public int compare(FormularioSolicitante p1, FormularioSolicitante p2) {
                return new Integer(p1.getIdSolic()).compareTo(new Integer(p2.getIdSolic()));
            }
        });
        for (FormularioSolicitante formulario : formularios) {
            imprimirFormulario(formulario);
        }
    }

    public void imprimirFormulario(FormularioSolicitante formulario) {
        System.out.println("INFORMACION SOLICITANTE");
        System.out.println("Identificacion Solicitante = " + formulario.getIdSolic());
        System.out.println("Nombre = " + formulario.getNombreSolic());
        System.out.println(formulario.getDirSolicPCD());
        System.out.println("Colegio: "+ formulario.getColegioSolic());
        System.out.println("Opcion Carrera = " + formulario.getCarreraSolic().getNombre() + " - " + formulario.getCarreraSolic().getSede().getNombre()
                + '\n' + "Código = " + formulario.getCarreraSolic().getCodigo()
                + '\n' + "Puntaje Mínimo = " + formulario.getCarreraSolic().getPuntajeMinimo());
        System.out.println("Estado del Formulario = " + formulario.getEstado());
        System.out.println("Puntaje Obtenido = " + formulario.getDetalleExamen().getPuntajeObtenido() + '\n');
    }

   

    public void ordenarLista(List<FormularioSolicitante> listaOrdenar) {
        Comparator<FormularioSolicitante> comparador = Comparator
        .comparing((FormularioSolicitante p) -> p.getDetalleExamen().getPuntajeObtenido())
        .reversed();
    Collections.sort(listaOrdenar, comparador);
        for (FormularioSolicitante formularioSolicitante : listaOrdenar) {
            imprimirFormulario(formularioSolicitante);
        }
    }


    public void oordenarLista(List<FormularioSolicitante> listaOrdenar) {
        for (int i = 0; i < listaOrdenar.size() - 1; i++) {
            for (int j = 0; j < listaOrdenar.size() - i - 1; j++) {
                if (listaOrdenar.get(i).getDetalleExamen().getPuntajeObtenido()
                        < listaOrdenar.get(j + 1).getDetalleExamen().getPuntajeObtenido()) {
                    FormularioSolicitante temp = listaOrdenar.get(j);
                    listaOrdenar.set(j, listaOrdenar.get(j + 1));
                    listaOrdenar.set(j + 1, temp);
                }
            }
        }
        for (FormularioSolicitante formularioSolicitante : listaOrdenar) {
            imprimirFormulario(formularioSolicitante);
        }
    }

    public void P10_mostrarResultadosExamenPorCarrera_Estado(Carrera carrera) {
        List<FormularioSolicitante> formularios = ctrl.getFormulariosPorCarrera_Estado(carrera);

        List<FormularioSolicitante> formAdmitidos = new ArrayList<>();
        List<FormularioSolicitante> formPostulantes = new ArrayList<>();
        List<FormularioSolicitante> formRechazados = new ArrayList<>();

        for (FormularioSolicitante form : formularios) {
            switch (form.getEstado()) {
                case ADMITIDO:
                    formAdmitidos.add(form);
                    break;
                case POSTULANTE:
                    formPostulantes.add(form);
                    break;
                case RECHAZADO:
                    formRechazados.add(form);
                    break;
                default:
                    //System.out.println(form.getEstado());
                    break;
            }
        }
        int a = (formAdmitidos.size() + formPostulantes.size() + formRechazados.size());
      

        if (formAdmitidos.isEmpty()) {
            System.out.println('\n' + "Formularios Admitidos:" + '\n' + "No se encontraron" + '\n');
        } else {
            System.out.println('\n'+"Formularios Admitidos:" + '\n');
            ordenarLista(formAdmitidos);
        }

        if (formPostulantes.isEmpty()) {
            System.out.println('\n'+"Formularios Postulantes:" + '\n' + "No se encontraron" + '\n');
        } else {
            System.out.println('\n'+"Formularios Postulantes:"+ '\n');
            ordenarLista(formPostulantes);
        }

        if (formRechazados.isEmpty()) {
            System.out.println('\n'+"Formularios Rechazados:" + '\n' + "No se encontraron" + '\n');
        } else {
            System.out.println('\n'+"Formularios Rechazados:"+'\n');
            ordenarLista(formRechazados);
        }
    }
}
