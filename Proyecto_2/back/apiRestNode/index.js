require('./config/conexion');
 express = require('express')
const port = (process.env.port || 3000)
const bodyParser = require('body-parser');

// express
const app = express()

//Payload
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

//admitir
app.use(express.json())

//configurar
app.set('port',port)


//rutas
app.use('/api', require('./rutas'))




//inicializar express
app.listen(app.get('port'),(error)=>{
    if(error)
    {console.log('error al iniciar el servidor: '+error)}
    else{
        console.log('servidor iniciado en el puerto: '+ port)
    }
})

