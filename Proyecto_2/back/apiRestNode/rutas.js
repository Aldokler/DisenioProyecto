const router = require('express').Router();
const { json } = require('stream/consumers');
const conexion = require('./config/conexion');

// gestion profesores
//get profesores
router.get('/profesores', (request, response)=>{
    let sql = "call getProfesores ()";
    conexion.query(sql, (error, rows, fields)=>{
        if(error){
            throw error;
        }
        else{
            response.json(rows)
        }
    })
});


//get profesor por ID
router.get('/profesores/:id', (request, response)=>{
    console.log()
    const {id} = request.params;
    let sql = "call getProfesoresByID(?);";
    conexion.query(sql, [id], (error, rows, fields)=>{
        if(error){
            throw error;
        }
        else{
            response.json(rows)
        }
    })
});
module.exports= router;

// crear profesor
router.post('/profesores', (request, response)=>{
    const {ID, Nombre, Apellido1, Apellido2, CorreoElectronico , 
           Celular , Contraseña , Sede , TelefonoOficina, Rol, Foto} = request.body;
    let sql = 'call addProfesor (?,?,?,?,?,?,?,?,?,?,?)';
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

//eliminar profesor por ID
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


// modificar profesor
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
            response.json({status: 'Profesor agregado' })
        }
    })
});
module.exports= router;
