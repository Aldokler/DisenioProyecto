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
import java.text.SimpleDateFormat;
import java.time.YearMonth;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Random;
import model.Carrera;
import model.Configuracion;
import model.DireccionPCD;
import model.FormularioSolicitante;
import model.Sede;

/**
 *
 * @author ersolano
 */
public class ModeloExAdmision {

    /**
     * @param args the command line arguments
     */
    public static Controlador elCtrl = new Controlador();

    public static void demoCarreras() {
        System.out.println("Visualizar todas las carreras de la institucion");
        System.out.println(elCtrl.getCarreras());

        String unaSede = "SJ";
        String unaCarrera = "IC";
        int nuevoPuntajeCarrera = 600;
        int nuevaAdmisionCarrera = 100;

        System.out.println("Modificar puntaje de admision a "
                + nuevoPuntajeCarrera + " de una carrera particular "
                + unaSede + "-" + unaCarrera);
        boolean resultado = elCtrl.editarPuntajeMinimoAdmision(unaCarrera, unaSede, nuevoPuntajeCarrera);
        System.out.println(resultado ? "Puntaje minimo modificado" : "No encontro la carrera para cambio de puntaje");

        System.out.println("Modificar capacidad de admision a "
                + nuevaAdmisionCarrera + " de una carrera particular "
                + unaSede + "-" + unaCarrera);
        resultado = elCtrl.editarCapacidadAdmision(unaCarrera, unaSede, nuevaAdmisionCarrera);
        System.out.println(resultado ? "Puntaje minimo modificado" : "No encontro la carrera para cambio de capacidad de admision");

        System.out.println("visualizar las carreras de la sede " + unaSede);
        System.out.println(elCtrl.getCarrerasPorSede(unaSede));

    }

    public static void demoConfiguracion() {
        int nuevoPuntaje = 900;
        System.out.println("Obteniendo Puntaje General de Admisión actual"
                + elCtrl.getPuntajeGeneralAdmision());

        System.out.println("Editando Puntaje General de Admisión ");
        elCtrl.editarPuntajeGeneralAdmision(nuevoPuntaje);

        System.out.println("Obteniendo Puntaje General de Admisión "
                + elCtrl.getPuntajeGeneralAdmision());

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

    public static void genFormularios() { // generacion aleatoria de formularios para pruebas

        Random rand = new Random();

        List<Carrera> listaCar = elCtrl.getCarreras();
        List<Sede> listaSedes = elCtrl.getSedes();

        String[] nombres = {"Maria", "Jose", "Luis", "Ana", "Carlos", "Juan", "Jorge", "Victor", "Gerardo", "Rafael", "Mario", "Oscar", "Manuel", "Carmen", "Miguel", "Francisco", "Rosa", "Marco", "Laura", "Marta", "Flor", "Ronald", "Alvaro", "Alexander", "William", "Andrea", "Marvin", "Adriana", "Eduardo", "Olga", "Karla", "Elizabeth", "David", "Daniel", "Jonathan", "Karen", "Silvia", "Sandra", "Sonia", "Ricardo", "Katherine", "Luz", "Edgar", "Edwin", "Mauricio", "Fernando", "Esteban", "Javier", "Michael", "Jesus", "Roberto", "Walter", "Andres", "Diego", "Alejandro", "Sergio", "Guillermo", "Jessica", "Julio", "Evelyn", "Adrian", "Henry", "Pablo", "Shirley", "Johnny", "Christian", "Gustavo", "Alejandra", "Rodrigo", "Carolina", "Roger", "Rodolfo", "Margarita", "Freddy", "Ligia", "Marcos", "Allan", "Roxana", "Virginia", "Gabriela", "Maritza", "Patricia", "Erick", "Blanca", "Isabel", "Diana", "Wendy", "Cesar", "Pedro", "Marjorie", "Cindy", "Karol", "Roy", "Jenny", "Cristian", "Tatiana", "Alberto", "Bryan", "Miriam", "Marlene", "Grettel", "Yamileth", "Antonio", "Alexis", "Natalia", "Monica", "Mayra", "Kevin", "Orlando", "Daniela", "Josue", "Melissa", "Giovanni", "Yesenia", "Jacqueline", "Jennifer", "Rolando", "Johanna", "Marcela", "German", "Kenneth", "Stephanie", "Rebeca", "Kimberly", "Jeannette", "Ramon", "Angie", "Franklin", "Hilda", "Gabriel", "Hector", "Nelson", "Damaris", "Ingrid", "Vilma", "Marianela", "Martin", "Cecilia", "Hazel", "Rosibel", "Raquel", "Maribel", "Enrique", "Viviana", "Leonardo", "Angela", "Juana", "Rigoberto", "Ruth", "Omar", "Nuria", "Hugo", "Fabian", "Angel", "Alfredo", "Lidia", "Marlon", "Nancy", "Jairo", "Teresa", "Erika", "Sara", "Norma", "Gladys", "Alicia", "Lilliam", "Gilberto", "Steven", "Maureen", "Nidia", "Giselle", "Flora", "Paola", "Felix", "Grace", "Lorena", "Yolanda", "Veronica", "Alba", "Melvin", "Eliecer", "Mariana", "Daisy", "Eric", "Irene", "Susana", "Jean", "Vera", "Karina", "Mercedes", "Vanessa", "Rita", "Mariela", "Gilbert", "Jimmy", "Rocio", "Paula", "Hernan", "Mayela", "Ronny", "Jeffry", "Jaime", "Jason", "Anthony", "Cristina", "Raul", "Andrey", "Danilo", "Ivan", "Gloria", "Claudio", "Ileana", "Douglas", "Iris", "Dennis", "Ericka", "Denis", "Lucia", "Alexandra", "Marisol", "Hellen", "Priscilla", "Alfonso", "Danny", "Fabio", "Teresita", "Mireya", "Marilyn", "Dora", "Emilce", "Santos", "Johan", "Dayana", "Elena", "Fanny", "Cynthia", "Alex", "Claudia", "Joselyn", "Zaida", "Yadira", "Leonel", "Wilber", "Pamela", "Doris", "Armando", "Leticia", "Julia", "Arturo", "Angelica", "Martha", "Alonso", "Carol", "Dagoberto", "Elias", "Irma", "Maricela", "Fabiola", "Guido", "Aracelly", "Elsa", "Dinorah", "Edith", "Aida", "Noemy", "Efrain", "Adolfo", "Wilson", "Vivian", "Beatriz", "Emilia", "Nelly", "Isaac", "Clara", "Anabelle", "Christopher", "Cinthya", "Victoria", "Sofia", "Eladio", "Luisa", "Leidy", "Sharon", "Leda", "Haydee", "Bernardo", "Arnoldo", "Didier", "Brayán", "Bryan", "Humberto", "Norman", "Catalina", "Maikol", "Graciela", "Asdrubal", "Gonzalo", "Ernesto", "Ruben", "Gerardina", "Santiago"};
        String[] apellidos = {"Rodriguez", "Vargas", "Jimenez", "Mora", "Rojas", "Gonzalez", "Sanchez", "Hernandez", "Ramirez", "Castro", "Lopez", "Araya", "Solano", "Alvarado", "Chaves", "Perez", "Morales", "Campos", "Quesada", "Gomez", "Arias", "Zuñiga", "Quiros", "Fernandez", "Salazar", "Villalobos", "Brenes", "Gutierrez", "Garcia", "Alfaro", "Vega", "Aguilar", "Calderon", "Valverde", "Chavarria", "Alvarez", "Castillo", "Salas", "Espinoza", "Martinez", "Solis", "Murillo", "Soto", "Chacon", "Cordero", "Mendez", "Herrera", "Monge", "Montero", "Barrantes", "Segura", "Madrigal", "Diaz", "Marin", "Porras", "Fallas", "Navarro", "Rivera", "Torres", "Fonseca", "Nuñez", "Calvo", "Delgado", "Ruiz", "Hidalgo", "Arce", "Obando", "Zamora", "Molina", "Muñoz", "Cruz", "Vasquez", "Bonilla", "Picado", "Miranda", "Gamboa", "Badilla", "Umaña", "Mena", "Esquivel", "Corrales", "Flores", "Camacho", "Arroyo", "Chinchilla", "Guzman", "Granados", "Cerdas", "Acuña", "Cascante", "Abarca", "Elizondo", "Barquero", "Arguedas", "Bolaños", "Ortiz", "Blanco", "Carvajal", "Leon", "Duran", "Cortes", "Ureña", "Aguero", "Cespedes", "Villegas", "Romero", "Bermudez", "Serrano", "Barboza", "Artavia", "Sandi", "Venegas", "Angulo", "Mata", "Alpizar", "Matarrita", "Sequeira", "Montoya", "Ugalde", "Vindas", "Sibaja", "Reyes", "Ortega", "Arrieta", "Viquez", "Varela", "Rosales", "Moya", "Sandoval", "Benavides", "Mendoza", "Orozco", "Garro", "Garita", "Carrillo", "Guevara", "Morera", "Duarte", "Coto", "Masis", "Guerrero", "Retana", "Azofeifa", "Cordoba", "Loria", "Padilla", "Paniagua", "Fuentes", "Cambronero", "Leiva", "Sanabria", "Trejos", "Avila", "Ulate", "Carranza", "Piedra", "Guillen", "Oviedo", "Cubillo", "Cubero", "Naranjo", "Ulloa", "Matamoros", "Carmona", "Solorzano", "Mesen", "Carballo", "Lobo", "Baltodano", "Robles", "Mejias", "Contreras", "Amador", "Pereira", "Bustos", "Madriz", "Ramos", "Sancho", "Valerio", "Suarez", "Leiton", "Acosta", "Lara", "Saborio", "Aguirre", "Saenz", "Rios", "Briceño", "Marchena", "Villarreal", "Medina", "Lizano", "Meza", "Peña", "Godinez", "Moreno", "Cedeño", "Roman", "Jara", "Melendez", "Mejia", "Ledezma", "Zumbado", "Loaiza", "Barahona", "Prado", "Mayorga", "Arguello", "Rivas", "Bejarano", "Centeno", "Berrocal", "Zeledon", "Tenorio", "Conejo", "Pacheco", "Moraga", "Pizarro", "Montenegro", "Villalta", "Bogantes", "Fajardo", "Guido", "Aleman", "Guadamuz", "Portuguez", "Juarez", "Palma", "Santamaria", "Cardenas", "Anchia", "Parra", "Ocampo", "Barrientos", "Chaverri", "Acevedo", "Ovares", "Canales", "Montiel", "Corella", "Montes", "Castrillo", "Estrada", "Luna", "Ballestero", "Moreira", "Figueroa", "Cabezas", "Urbina", "Leal", "Obregon", "Peraza", "Jarquin", "Valerin", "Vallejos", "Ceciliano", "Palacios", "Prendas", "Bravo", "Siles", "Peralta", "Maroto", "Meneses", "Redondo", "Ordoñez", "Solera", "Corea", "Viales", "Hurtado", "Leandro", "Beita", "Arauz", "Aragon", "Coronado", "Barrios", "Astua", "Jaen", "Sojo", "Sosa", "Avendaño", "Navarrete", "Cabrera", "Davila", "Altamirano", "Silva", "Cervantes", "Borbon", "Velasquez", "Brown", "Najera", "Enriquez", "Otarola", "Cisneros", "Chevez", "Bustamante", "Huertas", "Medrano", "Valenciano", "Tencio", "Pineda", "Pastor", "Ojeda", "Suzuki", "Ferrer", "Iglesias", "Oda", "Miyamoto", "Stark", "Wayne", "Banner", "Parker", "Turing", "Babbage", "Tesla", "Pendragon", "Nightingale", "Edison"};
        String[] colegios = {"CTP", "Liceo Costa Rica", "Liceo Hatillo", "Cientifico...", "Otro liceo"};

        int n = rand.nextInt(50, 1001);
        System.out.println("Cantidad total de formularios " + n);
        for (int i = 0; i < n; i++) {
            int id = rand.nextInt(100000000, 999999999);
            if (i == 0) {
                id = 118560169;
            }
            String nombre = nombres[rand.nextInt(nombres.length - 1)] + " " + apellidos[rand.nextInt(apellidos.length - 1)];
            String correo = nombre + "@gmail.com";
            String telefono = Integer.toString(rand.nextInt(10000000, 100000000)).getClass().getName();
            String colegio = colegios[rand.nextInt(colegios.length - 1)];
            DireccionPCD dirSolic = new DireccionPCD("San José", "Desamparados", "San Antonio");
            String detalleDireccion = "Casa numero 777";
            String carrera = listaCar.get(rand.nextInt(listaCar.size() - 1)).getCodigo();
            String sede = listaSedes.get(rand.nextInt(listaSedes.size())).getCodigo();

            DTOFormulario formulario = new DTOFormulario(id, nombre, correo, telefono, colegio, dirSolic, detalleDireccion, carrera, sede);
            elCtrl.registrarFormulario(formulario);
        }

    }

    public static void demoCitas() {
        elCtrl.generarCitas();
        List<Carrera> carreras = elCtrl.getCarreras();
        List<FormularioSolicitante> ListForms = new ArrayList<FormularioSolicitante>();
        List<String> carrerasConsultadas = new ArrayList<String>();
        for (Carrera carrera : carreras) {
            if (!carrerasConsultadas.contains(carrera.getCodigo())) {
                ListForms.addAll(elCtrl.getFormulariosPorCarrera_Estado(carrera.getCodigo()));
                carrerasConsultadas.add(carrera.getCodigo());
            }

        }

        System.out.println('\n' + "Citas generadas" + '\n');
        for (FormularioSolicitante formulario : ListForms) {
            System.out.println("Formulario: " + formulario.getNumero()
                    + ", Solicitante: " + formulario.getNombreSolic()
                    + ", Cita: " + formulario.getDetalleExamen().getCitaExamen().getTime()
                    + " - " + formulario.getDetalleExamen().getLugarExamen().getNombre());
        }
    }

    public static void main(String[] args) {
        FrGestionExAdmision viewExamen = new FrGestionExAdmision(elCtrl);
        FrFormulario viewForm = new FrFormulario(elCtrl);
        FrCarreras viewCarreras = new FrCarreras(elCtrl);

        genFormularios();

        //System.out.println("En demoConfiguracion");
        demoConfiguracion();

        //System.out.println("En demoCarreras");
        demoCarreras();
        System.out.println('\n' + "------------------------------------------");
        System.out.println('\n' + "Prueba funciones Tarea");
        System.out.println('\n' + "------------------------------------------");
        System.out.println('\n' + "Generar Citas");
        demoCitas();

        System.out.println('\n' + "Aplicando examen..." + '\n');
        viewExamen.P6_simularAplicacionExamen();

        System.out.println("Definiendo estado de los solicitantes..." + '\n');
        viewExamen.P7_definirSituacionSolicitantePostExamen();

        System.out.println("Ver estado de solicitud de solicitante con id: 118560169" + '\n');
        viewForm.P8_verCondicionSolicitud(118560169);

        System.out.println('\n' + "------------------------------------------");
        System.out.println('\n' + "Mostrando resultado por carrera ordenado por solicitantes..." + '\n');
        List<Carrera> carreras = elCtrl.getCarreras();
        List<String> carrerasConsultadas = new ArrayList<String>();
        for (Carrera carrera : carreras) {
            if (!carrerasConsultadas.contains(carrera.getCodigo())) {
                carrerasConsultadas.add(carrera.getCodigo());
                System.out.println("Carrera: " + carrera.getNombre() + '\n');
                viewCarreras.P9_mostrarResultadosExamenPorCarrera_Solicitante(carrera.getCodigo());
                System.out.println('\n' + "------------------------------------------");
            }
        }
        System.out.println('\n' + "------------------------------------------");
        System.out.println('\n' + "Mostrando resultado por carrera ordenado por estado y nota descendiente ..." + '\n');
        carrerasConsultadas.clear();
        for (Carrera carrera : carreras) {
            if (!carrerasConsultadas.contains(carrera.getCodigo())) {
                carrerasConsultadas.add(carrera.getCodigo());
                System.out.println("Carrera: " + carrera.getNombre() + '\n');
                viewCarreras.P10_mostrarResultadosExamenPorCarrera_Estado(carrera.getCodigo());
                System.out.println('\n' + "------------------------------------------");
            }

        }

    }

}
