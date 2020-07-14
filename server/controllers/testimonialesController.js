const Testimonial = require("../models/Testimoniales");
exports.mostrarTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render("testimoniales", {
        pagina: 'Testimoniales',
        testimoniales
    });
}
exports.agregarTestimonial = async (req, res) => {
    //validar campos
    let {
        nombre,
        correo,
        mensaje
    } = req.body;

    let errores = [];
    if (!nombre) {
        errores.push({
            'mensaje': 'Agrega tu nombre'
        });
    }
    if (!correo) {
        errores.push({
            'mensaje': 'Agrega tu correo'
        });
    }
    if (!mensaje) {
        errores.push({
            'mensaje': 'Agrega tu mensaje'
        });
    }
    //reviso por errores

    if (errores.length > 0) {
        const testimoniales = await Testimonial.findAll()
        res.render("testimoniales", {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: "Testimoniales",
            testimoniales,

        });
    } else {
        //almaceno en BD
        await Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        res.redirect('testimoniales');
    }
}