package view;
import controller.Controlador;
import java.util.ArrayList;
import java.util.List;
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
    
    public void P9_mostrarResultadosExamenPorCarrera_Solicitante(String codigoCarrera){
        List<FormularioSolicitante> formularios = ctrl.getFormulariosPorCarrera_Solicitante("IC");
        for (FormularioSolicitante formulario : formularios) {
            imprimirFormulario(formulario);
        }
    }
    
    public void imprimirFormulario(FormularioSolicitante formulario){
            System.out.println("INFORMACION SOLICITANTE");
            System.out.println("Identificacion Solicitante = " + formulario.getIdSolic());
            System.out.println("Nombre = " + formulario.getNombreSolic());
            System.out.println(formulario.getDirSolicPCD());
            System.out.println(formulario.getColegioSolic());
            System.out.println("Opcion Carrera = " + formulario.getCarreraSolic().getNombre() +
                    '\n' + "Código = " + formulario.getCarreraSolic().getCodigo() +
                    '\n' + "Puntaje Mínimo = " + formulario.getCarreraSolic().getPuntajeMinimo());
            System.out.println("Estado del Formulario = " + formulario.getEstado());
            System.out.println("Puntaje Obtenido = " + formulario.getDetalleExamen().getPuntajeObtenido() + '\n');
    }
    
    public void ordenarLista(List<FormularioSolicitante> listaOrdenar){
        for (int i = 0; i < listaOrdenar.size()-1; i++) {
            for (int j = 0; j < listaOrdenar.size()-i-1; j++) {
                if (listaOrdenar.get(i).getDetalleExamen().getPuntajeObtenido() < 
                        listaOrdenar.get(j+1).getDetalleExamen().getPuntajeObtenido()) {
                    FormularioSolicitante temp = listaOrdenar.get(j);
                    listaOrdenar.set(j,listaOrdenar.get(j+1));
                    listaOrdenar.set(j+1,temp);
                }
            }
        }
        for (FormularioSolicitante formularioSolicitante : listaOrdenar) {
            imprimirFormulario(formularioSolicitante);
        }
    }
    
    
    public void P10_mostrarResultadosExamenPorCarrera_Estado(String codigoCarrera){
        List<FormularioSolicitante> formularios = ctrl.getFormulariosPorCarrera_Estado(codigoCarrera);
        
        List<FormularioSolicitante> formAdmitidos = new ArrayList<>();
        List<FormularioSolicitante> formCandidatos = new ArrayList<>();
        List<FormularioSolicitante> formRechazados = new ArrayList<>();
        
        for (FormularioSolicitante form : formularios) {
            switch (form.getEstado()) {
                case ADMITIDO:
                    formRechazados.add(form);
                    break;
                case CANDIDATO:
                    formRechazados.add(form);
                    break;
                case RECHAZADO:
                    formRechazados.add(form);
                    break;
                default:
                    System.out.println(form.getEstado());
                    break;
            }
        }
        
        if (formAdmitidos.isEmpty()){
            System.out.println("Formularios Admitidos:" + '\n' + "No se encontraron" + '\n' );
        }
        else{
            System.out.println("Formularios Admitidos:");
            ordenarLista(formAdmitidos);
        }
        
        if (formCandidatos.isEmpty()){
            System.out.println("Formularios Candidatos:" + '\n' + "No se encontraron" + '\n');
        }
        else{
            System.out.println("Formularios Candidatos:");
            ordenarLista(formCandidatos);
        }
        
        if (formRechazados.isEmpty()){
            System.out.println("Formularios Rechazados:" + '\n' + "No se encontraron" + '\n');
        }
        else{
            System.out.println("Formularios Rechazados:");
            ordenarLista(formRechazados);
        }
    }
}