/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controller;

import controller.DAO.SingletonDAO;
import java.util.List;
import model.CentroAplicacion;

/**
 *
 * @author Sharon
 */
public class AdmCentrosAplicacion {

    public AdmCentrosAplicacion() {
    }
    
    public List<CentroAplicacion> getCentrosAplicacion(){
        return SingletonDAO.getInstance().getCentrosAplicacion();
    }
}
