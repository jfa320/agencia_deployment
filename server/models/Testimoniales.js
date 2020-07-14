const Sequelize = require("sequelize");
const db = require("../config/database");

const Testimonial = db.define('testimoniales', {
    nombre: { //los nombres deben ser exactamente iguales a los de la BD
        type: Sequelize.STRING
    },
    correo: { //los nombres deben ser exactamente iguales a los de la BD
        type: Sequelize.STRING
    },
    mensaje: { //los nombres deben ser exactamente iguales a los de la BD
        type: Sequelize.STRING
    },
})

module.exports = Testimonial;