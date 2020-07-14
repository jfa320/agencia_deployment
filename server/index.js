//importo express
const express = require("express");
const path = require("path");
const routes = require("./routes");
const configs = require("./config");
const bodyParser = require("body-parser");

require("dotenv").config({
    path: "variables.env"
});

//configuro express
const app = express();
//habilitar pug
app.set('view engine', 'pug');
//añadir vistas
app.set('views', path.join(__dirname, './views'));

//cargar carpeta estatica
app.use(express.static('public'));

//validar si estoy en desarrollo o produccion -- cambiar enviroment (desarrollo o produccion) desde la consola 
const config = configs[app.get('env')];
//creo var para el sitio web
app.locals.titulo = config.nombreSitio;

//muestra el año actual y la ruta actual
app.use((req, res, next) => {
    //creo fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear(); //un local es una variable global del proyecto
    res.locals.ruta = req.path;
    return next(); //sigue ejecutando la siguiente funcion
});

//uso el body parser - para poder leer body de un req
app.use(bodyParser.urlencoded({
    extended: true
}));
//cargar rutas
app.use('/', routes());

//puerto y host para la app
const host = process.env.HOST || '0.0.0.0'; //con esos 0 Heroku asigna una correcta
const port = process.env.PORT || 3000; //Heroku lo asigna sino 3000

app.listen(port, host, () => {
    console.log('El servidor está funcionando');
}); //nro de puerto