const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'usuario',
    password: 'usuario',
    database: 'TECsystem'
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