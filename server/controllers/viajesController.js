const Viaje = require("../models/Viajes");
exports.mostrarViajes = async (req, res) => {
    const viajes = await Viaje.findAll() //metodo para SELECT * en sequelize
    res.render("viajes", {
        pagina: 'Próximos Viajes',
        viajes //objetc literal enhancements. Es igual a viajes=viajes
    });
}
exports.mostrarViaje = async (req, res) => { //:id funciona como un comodin para cualquier id
    const viaje = await Viaje.findByPk(req.params.id)
    res.render('viaje', {
        viaje
    });
}