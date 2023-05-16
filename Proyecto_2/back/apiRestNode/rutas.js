const { Profesor } = require('../model/profesor');
const {EquipoGuia} = require('../model/equipoguia');
const {PlanDeTrabajo} = require('../model/plandetrabajo');
const {Actividad} = require('../model/actividad');
const {Administrativo} = require('../model/administrativo');


const router = require('express').Router();
const { json } = require('stream/consumers');
const conexion = require('./config/conexion');

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





// Plan de Trabajo

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
                new Actividad(row.Semana, row.Tipo, row.Nombre, row.FechaHora, row.Responsables, row.DiasAnunciar, row.DiasRecordatorio, row.Modalidad, row.Link, row.Afiche, row.Estado, row.Evidencia, row.Comentarios, row.FechaCancelacion, row.Observacion, row.FechaAPublicar));
                response.json({actividades})
        }
    })
});
/*
// get proxima actividad de un plan ---------------------------------------------
router.get('/plan_trabajo/:pplan', (request, response)=>{
    const {pplan} = request.params;
    const {pfecha} = request.body;
    let sql = "call getNextActividad(?,?);";
    conexion.query(sql, [pplan, pfecha], (error, rows, fields)=>{
        if(error){
            throw error;
        }
        else{
            const actividad = rows[0].map(row => 
                new Actividad(row.Semana, row.Tipo, row.Nombre, row.FechaHora, row.Responsables, row.DiasAnunciar, row.DiasRecordatorio, row.Modalidad, row.Link, row.Afiche, row.Estado, row.Evidencia, row.Comentarios, row.FechaCancelacion, row.Observacion, row.FechaAPublicar));
                response.json({actividad})
        }
    })
});
*/

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
    const {nombre, semana, fechaHora, diasAnunciar, link, tipo, modalidad, planID} = request.body;
    let sql = 'call addActividad (?,?,?,?,?,?,?,?)';
    conexion.query(sql, [nombre, semana, fechaHora, diasAnunciar, link, tipo, modalidad, planID], (error, rows, fields)=>{
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
router.delete('/equipo_guia/:id', (request, response)=>{
    const {idEG} = request.params;
    const {idP} = request.body;
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

// crear profesor-----------------------------------------------------------
router.post('/profesores', (request, response)=>{
    const {ID, Nombre, Apellido1, Apellido2, CorreoElectronico , 
           Celular , Contraseña , Sede , TelefonoOficina, Rol, Foto} = request.body;
    let sql = 'call addProfesor(?,?,?,?,?,?,?,?,?,?,?)';
    conexion.query(sql, [ID, Nombre, Apellido1, Apellido2, CorreoElectronico , 
        Celular , Contraseña , Sede , TelefonoOficina, Rol, Foto], (error, rows, fields)=>{
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
