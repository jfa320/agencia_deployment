const express = require("express");
const router = express.Router();
//controllers

const nosotrosController = require("../controllers/nosotrosController");
const homeController = require("../controllers/homeController");
const viajesController = require("../controllers/viajesController");
const testimonialesController = require("../controllers/testimonialesController");

//exporto rutas
module.exports = function () {
    router.get('/', homeController.consultasHomepage);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes', viajesController.mostrarViajes);
    router.get('/viajes/:id', viajesController.mostrarViaje);

    //para get hace esto en la misma url
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    //para post - cuando lleno el form
    router.post('/testimoniales', testimonialesController.agregarTestimonial);
    return router;
}