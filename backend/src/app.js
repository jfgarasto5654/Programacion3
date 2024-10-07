const express = require ('express')
const cors = require ('cors')
const app = express();

//en esta parte especificaremos la configuracion
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(cors())
app.use(express.json())


//rutas
app.get('/',(req, res) => {
        res.send('bienvenido a mi api rest full');
})

//ruta para mostrar api de usuarios 
app.use('/api/usuarios', require('./routes/usuario'))


module.exports = app;


