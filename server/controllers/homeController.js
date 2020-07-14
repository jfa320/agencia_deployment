const Viaje = require("../models/Viajes");
const Testimonial = require("../models/Testimoniales");
exports.consultasHomepage = async (req, res) => {
    //con promises
    // //paso dos promises
    // const promises = [];

    // promises.push(Viaje.findAll({
    //     limit: 3 //mando limite de 3 resultados
    // }))
    // promises.push(Testimonial.findAll({
    //     limit: 3
    // }))

    // //paso promises y ejecuto
    // const resultado = Promise.all(promises);

    // resultado.then(resultado => res.render("index", {
    //         pagina: 'Próximos Viajes',
    //         clase: "home",
    //         viajes: resultado[0],
    //         testimoniales: resultado[1]
    //     }))
    //     .catch(error => console.log(error));

    //con async await
    const viajes = await Viaje.findAll({
        limit: 3 //mando limite de 3 resultados
    });
    const testimoniales = await Testimonial.findAll({
        limit: 3
    })

    res.render("index", {
        pagina: 'Próximos Viajes',
        clase: "home",
        viajes,
        testimoniales
    })


}