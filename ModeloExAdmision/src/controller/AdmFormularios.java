/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import controller.DAO.SingletonDAO;
import java.util.ArrayList;
import java.util.List;
import model.FormularioSolicitante;
import model.TEstadoSolicitante;

/**
 *
 * @author ersolano
 */
public class AdmFormularios {

    public AdmFormularios() {
    }
   
    public boolean registrarFormulario (DTOFormulario elDTO){
        
        // verifica que el solicitante no haya registrado otro anteriormente
        FormularioSolicitante elForm = SingletonDAO.getInstance().consultarFormulario (elDTO.getIdSolic());
        
        if (elForm == null){
            elForm = new FormularioSolicitante();
            elForm.setIdSolic(elDTO.getIdSolic());
            elForm.setNombreSolic(elDTO.getNombreSolic());
            elForm.setCorreoSolic(elDTO.getCorreoSolic());
            elForm.setCelularSolic(elDTO.getCelularSolic());
            elForm.setColegioSolic(elDTO.getColegioSolic());
            elForm.setDirSolicPCD(elDTO.getDirSolic());
            elForm.setDetalleDirSolic(elDTO.getDetalleDireccion());
            elForm.setCarreraSolic(elDTO.getCarreraSolic());
            
            boolean res= SingletonDAO.getInstance().agregarFormulario(elForm);
            return res;
        }
        return false;
    }
    
    public FormularioSolicitante consultarFormulario (int idSolic){
        return SingletonDAO.getInstance().consultarFormulario(idSolic);
    }
    
    public void definirEstadoAdmisionCandidatos(){
        List<FormularioSolicitante> formularios = SingletonDAO.getInstance().getFormulario(TEstadoSolicitante.CANDIDATO);
        for (int i = 0; i < formularios.size(); i++){
            int nota = formularios.get(i).getDetalleExamen().getPuntajeObtenido();
            int admision = formularios.get(i).getCarreraSolic().getMaxAdmision();
            int puntajeMinimo = formularios.get(i).getCarreraSolic().getPuntajeMinimo();
            if (admision > 0 && nota >= puntajeMinimo){
                SingletonDAO.getInstance().actualizarFormulario(formularios.get(i).getIdSolic(), TEstadoSolicitante.ADMITIDO);
                SingletonDAO.getInstance().actualizarCapacidadCarrera(formularios.get(i).getCarreraSolic().getCodigo(), admision-1);
            } else if (nota >= puntajeMinimo){
                SingletonDAO.getInstance().actualizarFormulario(formularios.get(i).getIdSolic(), TEstadoSolicitante.POSTULANTE);
            } else {
                SingletonDAO.getInstance().actualizarFormulario(formularios.get(i).getIdSolic(), TEstadoSolicitante.RECHAZADO);
            }
        }
    }
}
