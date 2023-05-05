const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'persistencia.mysql.database.azure.com',
    user: 'David',
    password: 'Adm!n123',
    database: 'proyectodisenio'
    })
  
  connection.connect((err) =>{
    if(err){
        console.log('Error de conexión :' + err)
    }
    else{
        console.log('Conexión a base establecida')
    }
  })
  
  

  module.exports= connection;