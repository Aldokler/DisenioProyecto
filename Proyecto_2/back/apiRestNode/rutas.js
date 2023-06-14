const { Profesor } = require('../model/profesor');
const {EquipoGuia} = require('../model/equipoguia');
const {PlanDeTrabajo} = require('../model/plandetrabajo');
const {Actividad} = require('../model/actividad');
const {Administrativo} = require('../model/administrativo');
const {Comentario} = require('../model/comentario');
const {Estudiante} = require('../model/estudiante');
const fs = require('fs');
const nodemailer = require('nodemailer');

const router = require('express').Router();
const { json } = require('stream/consumers');
const conexion = require('./config/conexion');
const bodyParser = require('body-parser');
const { response } = require('express');
const moment = require('moment-timezone');

const transporter = nodemailer.createTransport({
    service: 'Gmail', // Puedes utilizar otro proveedor de correo
    auth: {
      user: 'comunicador.proyecto@gmail.com',
      pass: 'jqmxozrbixxukugq'
    }
  });


// Ruta para enviar el correo electrónico
router.post('/enviar-correo', (req, res) => {
    const { destinatario, asunto, contenido } = req.body;
  
    // Configura los detalles del correo electrónico
    const mailOptions = {
      from: 'comunicador.proyecto@gmail.com',
      to: destinatario,
      subject: asunto,
      text: contenido
    };
  
    // Envía el correo electrónico
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log('Error al enviar el correo:', error);
        res.status(500).json({ error: 'Error al enviar el correo' });
      } else {
        console.log('Correo enviado:', info.response);
        res.status(200).json({ message: '0' });
      }
    });
  });

//-------------------------------------------------------------------------------------------------------------
//*************************************************************************************************************
//-------------------------------------------------------------------------------------------------------------

// subir link -----------------------------------------------------------
router.post('/equipo_guia/actividad/link/:id', (request, response)=>{
    const {id} = request.params;
    const {link} = request.body;  
    let sql = 'call subirLink(?,?)';
    conexion.query(sql, [id, link], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: '0' })
            
        
        }
    })
});

// get asistencia -----------------------------------------------------------
router.get('/equipo_guia/actividad/asistencia/:id', (request, response)=>{
    const {id} = request.params;
    let sql = 'call getAsistencia(?)';
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const asistencias = rows[0].map(row => 
                new Comentario(row.ID, row.Mensaje, row.Emisor, row.FechaHora, row.ComentarioOriginal, row.ActividadID)); // cambiar a tipo evidencia
                response.json({asistencias})
        }
    })
});

// subir asistencia -----------------------------------------------------------
router.post('/equipo_guia/actividad/asistencia/:id', (request, response)=>{
    const{id} = request.params;
    const {Foto} = request.body;
    const fotobin = Buffer.from(Foto.data);
    console.log(fotobin)      
    let sql = 'call subirAsistencia(?,?)';
    conexion.query(sql, [id,fotobin], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: '0' })
        
        }
    })
});

//eliminar asistencia -----------------------------------------------
router.delete('/equipo_guia/actividad/asistencia/:id', (request, response)=>{
    const {id} = request.params;
    let sql = "call eliminarAsistencia(?);";
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: 'Asistencia eliminada' })
        }
    })
});

//-------------------------------------------------------------------------------------------------------------
//*************************************************************************************************************
//-------------------------------------------------------------------------------------------------------------

// Ingresar
// login ---------------------------------------------
// devuelve un bool, 0 si los datos son incorrectos, 1 login correcto
router.get('/login', (request, response)=>{
    const {user, pass} = request.query;
    let sql = "call login(?,?)";
    conexion.query(sql, [user, pass],(error, rows, fields)=>{
        if(error){
            console.log(error);response.json({status: '-1' });
        }
        else{
            response.json(rows[0][0])
        }
    })
});

// ver correo de usuario ---------------------------------------------
// devuelve un bool, 0 si los datos son incorrectos, 1 login correcto
router.get('/recuperacion/:correo', (request, response)=>{
    const {correo} = request.params;
    let sql = "call check_user(?)";
    conexion.query(sql, [correo],(error, rows, fields)=>{
        if(error){
            console.log(error);response.json({status: '-1' });
        }
        else{
            response.json(rows[0][0])
        }
    })
});


// cambiar contraseña
router.put('/usuario', (request, response)=>{
    const {correo, password} = request.query;
    let sql = 'call cambiarContraseña(?,?)';
    conexion.query(sql, [correo, password], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: '0' })
        }
    })
});


// coordinador---------------------------------------------
// devuelve un bool, 0 si los datos son incorrectos, 1 login correcto
router.get('/coordinador/:id', (request, response)=>{
    const {id} = request.params;
    let sql = "call check_coordinador(?)";
    conexion.query(sql, [id],(error, rows, fields)=>{
        if(error){
            console.log(error);response.json({status: '-1' });
        }
        else{
            response.json(rows[0][0])
        }
    })
});

// coordinador---------------------------------------------
// devuelve un bool, 0 si los datos son incorrectos, 1 login correcto
router.get('/coordinadorE/:id/:equipo', (request, response)=>{
    const {id, equipo} = request.params;
    let sql = "call check_coordinador_Equipo(?,?)";
    conexion.query(sql, [id,equipo],(error, rows, fields)=>{
        if(error){
            console.log(error);response.json({status: '-1' });
        }
        else{
            response.json(rows[0][0])
        }
    })
});

//-------------------------------------------------------------------------------------------------------------
//*************************************************************************************************************
//-------------------------------------------------------------------------------------------------------------

// Plan de Trabajo
// ver comentarios principales +++++++++++++++++++
router.get('/equipo_guia/actividad/comentarios/:id', (request, response)=>{
    const {id} = request.params;
    let sql = "call getComentariosO(?);";
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const comentarios = rows[0].map(row => 
                new Comentario(row.ID, row.Mensaje, row.Emisor, row.FechaHora, row.ComentarioOriginal, row.ActividadID));
                response.json({comentarios})
        }
    })
});

// ver respuestas a un comentario +++++++++++++++++++
router.get('/equipo_guia/actividad/comentariosR/:id', (request, response)=>{
    const {id} = request.params;
    let sql = "call getComentariosR(?);";
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const comentarios = rows[0].map(row => 
                new Comentario(row.ID,row.Mensaje, row.Emisor, row.FechaHora, row.ComentarioOriginal, row.ActividadID));
                response.json({comentarios})
        }
    })
});

// comentar actividad ---------------------------------------------***
router.post('/equipo_guia/actividad/comentarios/', (request, response)=>{
    const {Mensaje, FechaHora, Emisor, ActividadID} = request.body;
    let sql = 'call addComentario (?,?,?,?)';
    conexion.query(sql, [Mensaje, FechaHora, Emisor, ActividadID], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: '0' })
        }
    })
});

// responder comentario de actividad ---------------------------------------------***
router.post('/equipo_guia/actividad/comentariosR/', (request, response)=>{
    const {Mensaje, FechaHora, Emisor, ActividadID, ComentarioOriginal} = request.body;
    let sql = 'call addReply (?,?,?,?,?)';
    conexion.query(sql, [Mensaje, FechaHora, Emisor, ActividadID, ComentarioOriginal], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: '0' })
        }
    })
});


// crear plan de trabajo ---------------------------------------------***
router.post('/plan_trabajo', (request, response)=>{
    const {año, semestre, creador} = request.body;
    let sql = 'call addPlan (?,?,?)';
    conexion.query(sql, [año, semestre, creador], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: '0' })
        }
    })
});


// get planes ---------------------------------------------***
router.get('/plan_trabajo', (request, response)=>{
    let sql = "call getPlanes()";
    conexion.query(sql, (error, rows, fields)=>{
        if(error){
            console.log(error);response.json({status: '-1' });
        }
        else{
            const planes = rows[0].map(row => 
                new PlanDeTrabajo(row.ID, row.Año, row.Semestre, [], row.Creador));
                response.json({planes})
        }
    })
});


// get actividades de un plan ---------------------------------------------***
router.get('/plan_trabajo/:id', (request, response)=>{
    const {id} = request.params;
    let sql = "call getActividadesofPlan(?);";
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const actividades = rows[0].map(row => 
                new Actividad(row.ID, row.Semana, row.Tipo, row.Nombre, row.FechaHora, row.Responsables, row.DiasAnunciar, row.DiasRecordatorio, row.Modalidad, row.Link, row.Afiche, row.Estado, row.Evidencia, row.Comentarios, row.FechaCancelacion, row.Observacion, row.FechaAPublicar));
                response.json({actividades})
        }
    })
});


// get actividades de un plan por estado ---------------------------------------------***
router.get('/plan_trabajo/:id/:estado', (request, response)=>{
    const {id,estado} = request.params;
    let sql = "call getActividadesByPlanyEstado(?,?);";
    conexion.query(sql, [id,estado], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const actividades = rows[0].map(row => 
                new Actividad(row.ID, row.Semana, row.Tipo, row.Nombre, row.FechaHora, row.Responsables, row.DiasAnunciar, row.DiasRecordatorio, row.Modalidad, row.Link, row.Afiche, row.Estado, row.Evidencia, row.Comentarios, row.FechaCancelacion, row.Observacion, row.FechaAPublicar));
                response.json({actividades})
        }
    })
});




// get proxima actividad de un plan ---------------------------------------------
router.get('/plan_trabajo_next/:pplan/:pfecha', (request, response)=>{
    const {pplan, pfecha} = request.params;
    let sql = "call getNextActividad(?,?);";
    conexion.query(sql, [pplan, pfecha], (error, rows, fields)=>{
        if(error){
            throw error;
        }
        else{
            const actividad = rows[0].map(row => 
                new Actividad(row.id,row.Semana, row.Tipo, row.Nombre, row.FechaHora, row.Responsables, row.DiasAnunciar, row.DiasRecordatorio, row.Modalidad, row.Link, row.Afiche, row.Estado, row.Evidencia, row.Comentarios, row.FechaCancelacion, row.Observacion, row.FechaAPublicar));
                response.json({actividad})
        }
    })
});


// get actividad by ID ---------------------------------------------***
router.get('/plan_trabajo/actividad/:id', (request, response)=>{
    const {id} = request.params;
    let sql = "select * from actividad where ID = ?;";
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const actividad = rows.map(row => 
                new Actividad(row.Semana, row.Tipo, row.Nombre, row.FechaHora, row.Responsables, row.DiasAnunciar, row.DiasRecordatorio, row.Modalidad, row.Link, row.Afiche, row.Estado, row.Evidencia, row.Comentarios, row.FechaCancelacion, row.Observacion, row.FechaAPublicar));
                response.json({actividad})
        }
    })
});



// crear actividad de plan de trabajo ---------------------------------------------***
router.post('/plan_trabajo/actividad', (request, response)=>{
    const {nombre, semana, fechaHora, diasAnunciar, link, tipo, modalidad, planID, fechaPublicar} = request.body;
    let sql = 'call addActividad (?,?,?,?,?,?,?,?,?)';
    console.log(fechaHora)
    conexion.query(sql, [nombre, semana, fechaHora, diasAnunciar, link, tipo, modalidad, planID,fechaPublicar], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: '0' })
        }
    })
});

// modificar actividad ---------------------------------------------------
router.put('/plan_trabajo/actividad/:id', (request, response)=>{
    const {id} = request.params;
    const {nombre,semana,fechaHora,diasAnunciar,link,tipo,modalidad,estado} = request.body;
    let sql = 'call updateActividad(?,?,?,?,?,?,?,?,?)';
    conexion.query(sql, [id,nombre,semana,fechaHora,diasAnunciar,link,tipo,modalidad,estado], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: '0' })
        }
    })
});


// agregar observacion ---------------------------------------------------
router.put('/plan_trabajo/actividad/cancelar/:id', (request, response)=>{
    const {id} = request.params;
    const {observacion} = request.body;
    let sql = 'UPDATE actividad SET Observacion = ? where ID = ?;';
    conexion.query(sql, [observacion, id], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: 'Actividad modificada'})
        }
    })
});

//-------------------------------------------------------------------------------------------------------------
//*************************************************************************************************************
//-------------------------------------------------------------------------------------------------------------

// Equipo Guía
//get equipos +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.get('/equipo_guia', (request, response)=>{
    let sql = "call getEquiposGuia()";
    conexion.query(sql, (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const equipos = rows[0].map(row => 
                new EquipoGuia(row.ID,[],row.Año, row.Semestre));
                response.json({equipos})
        }
    })
});


// Consultar conformación del equipo de profesores guía +++++++++++++++++++
router.get('/equipo_guia/:id', (request, response)=>{
    const {id} = request.params;
    let sql = "call consultarEquipoGuia(?);";
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const profesor = rows[0].map(row => 
                new Profesor(row.ID, row.Nombre, row.Apellido1, row.Apellido2, row.CorreoElectronico, row.Celular, row.Sede, row.Contraseña, row.TelefonoOficina, row.Fotografia, row.Rol ));
                response.json({profesor})
        }
    })
});

// crear equipo de profesores guía +++++++++++++++++++++++++++++++++++++++++
router.post('/equipo_guia', (request, response)=>{
    const {año, semestre} = request.body;
    let sql = 'call addEquipoGuía(?,?)';
    conexion.query(sql, [año, semestre], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: '0' })
        }
    })
});

// agregar profesores guía al equipo ++++++++++++++++++++++++++++++++++++++++
router.post('/equipo_guia/profesor', (request, response)=>{
    const {idEG, idP} = request.body;
    let sql = 'call addEquipoGuiaXProfesor(?,?)';
    conexion.query(sql, [idEG, idP], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: '0' })
        }
    })
});
// definir coordinador ++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.put('/equipo_guia/defCor', (request, response)=>{
    const {IDEquipoGuia, IDProfesor} = request.body;
    let sql = 'call defEquipoGuiaCoordinador(?,?)';
    conexion.query(sql, [IDEquipoGuia, IDProfesor], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: '0' })
        }
    })
});


//sacar profesor del equipo +++++++++++++++++++++++++++++++++++++++++++++++++
router.delete('/equipo_guia/:idEG', (request, response)=>{
    const {idEG} = request.params;
    const {idP} = request.query;
    let sql = "call sacarProfesor(?,?);";
    conexion.query(sql, [idP, idEG], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: '0' })
        }
    })
});


//get ID de equipo +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.get('/equipo_guia_id/:annio/:semestre', (request, response)=>{
    const {annio, semestre} = request.params;
    let sql = "call getEquipoGuiaByYearSemester(?,?);";
    conexion.query(sql, [annio, semestre], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const id = rows[0]
            response.json(id)
        }
    })
});

//-------------------------------------------------------------------------------------------------------------
//*************************************************************************************************************
//-------------------------------------------------------------------------------------------------------------

// gestion profesores
//get profesores ---------------------------------------------------------
router.get('/profesores', (request, response)=>{
    let sql = "call getProfesores()";
    conexion.query(sql, (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const profesores = rows[0].map(row => 
                new Profesor(row.ID, row.Nombre, row.Apellido1, row.Apellido2, row.CorreoElectronico, row.Celular, row.Sede, row.Contraseña, row.TelefonoOficina, row.Fotografia, row.Rol ));
                //profesores.forEach(profesor => console.log(profesor.getSede()));
                response.json({profesores})
        }
    })
});


//get profesor por ID -----------------------------------------------------
router.get('/profesores/:id', (request, response)=>{
    console.log()
    const {id} = request.params;
    let sql = "call getProfesoresByID(?);";
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const profesor = rows[0].map(row => 
                new Profesor(row.ID, row.Nombre, row.Apellido1, row.Apellido2, row.CorreoElectronico, row.Celular, row.Sede, row.Contraseña, row.TelefonoOficina, row.Fotografia, row.Rol ));
                response.json({profesor})
        }
    })
});


//get administrativo por ID -----------------------------------------------------
router.get('/administrativo/:id', (request, response)=>{
    console.log()
    const {id} = request.params;
    let sql = "call getAdmByID(?);";
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const administrativo = rows[0].map(row => 
                new Administrativo(row.ID, row.Nombre, row.Apellido1, row.Apellido2, row.CorreoElectronico, row.Celular, row.Sede, row.Contraseña, row.TelefonoOficina));
                response.json({administrativo})
        }
    })
});
module.exports= router;

function readImage(Image){
    const bitmap = fs.readFileSync(Image);
    const buf = new Buffer(bitmap);
    return buf;
}



const output = 'output.png';

// crear profesor-----------------------------------------------------------
router.post('/profesores', (request, response)=>{
    const {ID, Nombre, Apellido1, Apellido2, CorreoElectronico , 
           Celular , Contraseña , Sede , TelefonoOficina, Rol, Foto} = request.body;
    const fotobin = Buffer.from(Foto.data);      
    let sql = 'call addProfesor(?,?,?,?,?,?,?,?,?,?,?)';
    conexion.query(sql, [ID, Nombre, Apellido1, Apellido2, CorreoElectronico , 
        Celular , Contraseña , Sede , TelefonoOficina, Rol, fotobin], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: 'Profesor agregado' })
        }
    })
});

//eliminar profesor por ID -----------------------------------------------
router.delete('/profesores/:id', (request, response)=>{
    console.log()
    const {id} = request.params;
    let sql = "call deleteProfesor(?);";
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: 'Profesor eliminado' })
        }
    })
});
module.exports= router;


// modificar profesor ---------------------------------------------------
router.put('/profesores/:id', (request, response)=>{
    const {id} = request.params;
    const {Nombre, Apellido1, Apellido2, CorreoElectronico , 
           Celular , Contraseña , Sede , TelefonoOficina, Foto, Rol} = request.body;
    let sql = 'call updateProfesor(?,?,?,?,?,?,?,?,?,?,?)';
    conexion.query(sql, [id,Nombre, Apellido1, Apellido2, CorreoElectronico , 
        Celular , Contraseña , Sede , TelefonoOficina, Foto, Rol], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: 'Profesor modificado' })
        }
    })
});
module.exports= router;

//-------------------------------------------------------------------------------------------------------------
//*************************************************************************************************************
//-------------------------------------------------------------------------------------------------------------

// crear estudiante-----------------------------------------------------------
router.post('/estudiantes', (request, response)=>{
    const {ID, Nombre, Apellido1, Apellido2, CorreoElectronico , 
           Celular , Contraseña , Sede} = request.body;
    let sql = 'call addEstudiante(?,?,?,?,?,?,?,?)';
    conexion.query(sql, [ID, Nombre, Apellido1, Apellido2, CorreoElectronico , 
        Celular , Contraseña , Sede], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: '0' })
        }
    })
});

//get estudiantes ---------------------------------------------------------
router.get('/estudiantes/:Sort', (request, response)=>{
    const {Sort} = request.params;
    let sql = "";
    switch (Sort) {
        case '1':
            sql = "call getEstudiantesAlfa()";
            break;
        case '2':
            sql = "call getEstudiantesCarne()";
            break;
        case '3':
            sql = "call getEstudiantesSede()";
            break;
    }
    conexion.query(sql, (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const estudiantes = rows[0].map(row => 
                new Estudiante(row.ID, row.Nombre, row.Apellido1, row.Apellido2, row.CorreoElectronico, row.Celular, row.Sede, ""));
                response.json({estudiantes})
        }
    })
});


//la wea que pidió Bryan (get estudiantes por sede de un profesor) -----------------------------------------------------
router.get('/estudiantesPorSede/:id', (request, response)=>{
    const {id} = request.params;
    let sql = "call getEstudiantesByProfesorSede(?);";
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const estudiantes = rows[0].map(row => 
                new Estudiante(row.ID, row.Nombre, row.Apellido1, row.Apellido2, row.CorreoElectronico, row.Celular, row.Sede, ""));
                response.json({estudiantes})
        }
    })
});

//get estudiante por ID -----------------------------------------------------
router.get('/estudiante/:id', (request, response)=>{
    const {id} = request.params;
    let sql = "call getEstudianteByID(?);";
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            response.json({status: '-1' });
        }
        else{
            const estudiante = rows[0].map(row => 
                new Estudiante(row.ID, row.Nombre, row.Apellido1, row.Apellido2, row.CorreoElectronico, row.Celular, row.Sede, row.Contraseña,row.Fotografia ));
                response.json({estudiante})
        }
    })
});

//get estudiante por correo -----------------------------------------------------
router.get('/estudiantec/:correo', (request, response)=>{
    const {correo} = request.params;
    let sql = "call getEstudianteByCorreo(?);";
    conexion.query(sql, [correo], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const estudiante = rows[0].map(row => 
                new Estudiante(row.ID, row.Nombre, row.Apellido1, row.Apellido2, row.CorreoElectronico, row.Celular, row.Sede, row.Contraseña,row.Fotografia ));
                response.json({estudiante})
        }
    })
});


// modificar estudiante ---------------------------------------------------
router.put('/estudiante/:id', (request, response)=>{
    const {id} = request.params;
    const {Celular , Foto,} = request.body;
    const fotobin = Buffer.from(Foto.data);   
    let sql = 'call updateEstudiante(?,?,?)';
    conexion.query(sql, [id, Celular , fotobin], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: 'Estudiante modificado' })
        }
    })
});

module.exports= router;


//-------------------------------------------------------------------------------------------------------------
//*************************************************************************************************************
//-------------------------------------------------------------------------------------------------------------

// gestion notificaciones
// crear notificacion-----------------------------------------------------------
router.post('/notificacion', (request, response)=>{
    const {Emisor, FechaHora, Contenido} = request.body;    
    let sql = 'call addNotificacion(?,?,?)';
    conexion.query(sql, [Emisor, FechaHora, Contenido], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: 'Notificacion agregada' })
        }
    })
});


// modificar notificacion-----**----------------------------------------------
router.put('notificacion/update', (request, response)=>{
    const {id, Emisor, FechaHora, Contenido} = request.body;
    let sql = 'call updateNotificacion(?,?,?,?)';
    conexion.query(sql, [id, Emisor, FechaHora, Contenido], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: '0' })
        }
    })
});


// delete notificacion----**-----------------------------------------------
router.delete('/notificacion/delete', (request, response)=>{
    console.log()
    const {id} = request.body;
    let sql = "call deleteNotificacion(?);";
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: 'Notificacion eliminada' })
        }
    })
});

// crear notificador-----------------------------------------------------------
router.post('/notificador/:ID', (request, response)=>{
    const {UserID, Tipo} = request.body;    
    let sql = 'call addNotificador(?)';
    conexion.query(sql, [UserID, Tipo], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: 'Notificador agregado' })
        }
    })
});

// delete notificador-----**----------------------------------------------
router.delete('/notificador/delete', (request, response)=>{
    console.log()
    const {id} = request.body;
    let sql = "call deleteNotificador(?);";
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: 'Notificacion eliminada' })
        }
    })
});


// get actividades a notificar--------**-------------------------------------------
router.get('/actividadesANotificar', (request, response)=>{
    let sql = "call getActividadesANotificar();";
    conexion.query(sql, (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const lista = rows[0].map(row => row.ID)
            response.json({lista})
        }
    })
});


// get usuarios a notificar por actividad---------------------------------------------------
router.get('/usuariosANotificar/:id', (request, response)=>{
    const {NotifId, Tipo} = request.params;
    let sql = "call getUsuariosANotificar(?,?);";
    conexion.query(sql, [NotifId, Tipo], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const lista = rows[0].map(row => row.IDUsuario)
            response.json({lista})
        }
    })
});


// get usuarios a notificar por actividad---------------------------------------------------
router.get('/profesoresANotificar/:id', (request, response)=>{
    const {NotifId, Tipo} = request.params;
    let sql = "call getProfesoresANotificar(?,?);";
    conexion.query(sql, [NotifId, Tipo], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const lista = rows[0].map(row => row.IDUsuario)
            response.json({lista})
        }
    })
});

    


// notificar actividad---------------------------------------------------
router.post('/Notificar/:notificacion/:usuario', (request, response)=>{
    const {notificacion, usuario} = request.params;
    let sql = "call sendNotificacion(?,?);";
    conexion.query(sql, [notificacion, usuario], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: 'Notificacion' })
        }
    })
});

module.exports= router;


//get buzón por usuario ID -----------------------------------------------------
/*router.get('/profesores/:id', (request, response)=>{
    console.log()
    const {id} = request.params;
    let sql = "call getProfesoresByID(?);";
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            const profesor = rows[0].map(row => 
                new Profesor(row.ID, row.Nombre, row.Apellido1, row.Apellido2, row.CorreoElectronico, row.Celular, row.Sede, row.Contraseña, row.TelefonoOficina, row.Fotografia, row.Rol ));
                response.json({profesor})
        }
    })
});*/

router.put('/suscribir', (request, response)=>{
    const {UserId, NotificadorID, Tipo} = request.body;
    let sql = 'call suscribirUsuario(?,?,?)';
    conexion.query(sql, [UserId, NotificadorID, Tipo], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: '0' })
        }
    })
});

router.delete('/cancelarSubscripcion', (request, response)=>{
    console.log()
    const {UserId, NotificadorID, Tipo} = request.body;
    let sql = "call cancelarSubscripcionUsuario(?,?,?);";
    conexion.query(sql, [UserId, NotificadorID, Tipo], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: 'Notificacion eliminada' })
        }
    })
});


// update dia recordatorio by actividad-----**----------------------------------------------
router.put('notificacion/update', (request, response)=>{
    const {id} = request.body;
    let sql = 'call updateRecordatorioActividad(?)';
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            console.log(error);
            response.json({status: '-1' });
        }
        else{
            response.json({status: '0' })
        }
    })
});