require('./config/conexion');
 express = require('express')
const port = (process.env.port || 3000)
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
// express
const app = express()

//Payload
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const corsOptions = {
  origin: 'http://localhost:4200/recuperacion', // Reemplaza con la URL de tu aplicación Angular
  optionsSuccessStatus: 200 // Algunos navegadores requieren que se especifique el código de estado de éxito explícitamente
};

// Aplica el middleware de CORS
app.use(cors(corsOptions));


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

