const { Profesor } = require('../model/profesor');
const {EquipoGuia} = require('../model/equipoguia');

const router = require('express').Router();
const { json } = require('stream/consumers');
const conexion = require('./config/conexion');


// Equipo Guía
//get equipos +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.get('/equipo_guia', (request, response)=>{
    let sql = "call getEquiposGuia()";
    conexion.query(sql, (error, rows, fields)=>{
        if(error){
            throw error;
        }
        else{
            const equipos = rows[0].map(row => 
                new EquipoGuia(row.Año, row.Semestre));
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
            throw error;
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
        }
        else{
            response.json({status: 'equipo agregado' })
        }
    })
});

// agregar profesores guía al equipo ++++++++++++++++++++++++++++++++++++++++
router.post('/equipo_guia/profesor', (request, response)=>{
    const {IDEquipoGuia, IDProfesor} = request.body;
    let sql = 'call addEquipoGuiaXProfesor(?,?)';
    conexion.query(sql, [IDEquipoGuia, IDProfesor], (error, rows, fields)=>{
        if(error){
            console.log(error);
        }
        else{
            response.json({status: 'miembro agregado' })
        }
    })
});
// definir coordinador ++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.put('/equipo_guia/:id', (request, response)=>{
    const {id} = request.params;
    let sql = "UPDATE profesor SET Rol = 'Coordinador' where ID = ?;";
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            console.log(error);
        }
        else{
            response.json({status: 'Profesor coordinador' })
        }
    })
});


//sacar profesor del equipo +++++++++++++++++++++++++++++++++++++++++++++++++
router.delete('/equipo_guia/:id', (request, response)=>{
    const {id} = request.params;
    const {IDProfesor} = request.body;
    let sql = "call sacarProfesor(?,?);";
    conexion.query(sql, [IDProfesor, id], (error, rows, fields)=>{
        if(error){
            throw error;
        }
        else{
            response.json({status: 'Profesor eliminado del equipo' })
        }
    })
});


// gestion profesores
//get profesores ---------------------------------------------------------
router.get('/profesores', (request, response)=>{
    let sql = "call getProfesores()";
    conexion.query(sql, (error, rows, fields)=>{
        if(error){
            throw error;
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
            throw error;
        }
        else{
            const profesor = rows[0].map(row => 
                new Profesor(row.ID, row.Nombre, row.Apellido1, row.Apellido2, row.CorreoElectronico, row.Celular, row.Sede, row.Contraseña, row.TelefonoOficina, row.Fotografia, row.Rol ));
                response.json({profesor})
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
            throw error;
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
        }
        else{
            response.json({status: 'Profesor modificado' })
        }
    })
});
module.exports= router;
