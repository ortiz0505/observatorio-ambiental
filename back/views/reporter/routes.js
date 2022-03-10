import express from "express";
import Reporter from "../../models/reporter.js"

const reporterRoute = express.Router();

reporterRoute.route("/reportero").get(async (req, res) => {
    try {
        const reporters = await Reporter.find();
        res.status(200).send(reporters)
    } catch (error) {
        res.status(400).send(error)
    }
});

reporterRoute.route("/reportero").post(async (req, res) => {
    try {
        const {
            nombre,
            correo,
            descripcion,
            zona_influencia
        } = req.body;
        const reporter = new Reporter({
            nombre,
            correo,
            descripcion,
            zona_influencia
        })
        await reporter.save();
        res.status(200).send(reporter);
    } catch (error) {
        res.status(400).send(error);
    }
})

reporterRoute.route('/reportero/:email').get(async (req, res) => {
    try {
        const ArrayReporter = await Reporter.find();
        let finded = false;
        let id;
        let estado_usuario;
        let zona_influencia;
        const email = req.params.email;
        ArrayReporter.map((reporter) => {
            if (email === reporter.correo && finded !== true) {
                finded = true,
                id = reporter._id,
                zona_influencia = reporter.zona_influencia,
                estado_usuario = reporter.estado_usuario
            }
        })
        res.status(200).send({ finded, id, estado_usuario, zona_influencia });
    } catch (error) {
        res.status(400).send(error);
    }
})

reporterRoute.route('/reportero/:id').put(async (req, res) => {
    try {
        const id = req.params.id
        let status = false
        let motivo = req.body.motivo
        if (req.body.estado === true) {
            status = false
        } else status = true
        await Reporter.findByIdAndUpdate(id, {
            estado_usuario: status,
            motivo_suspension: motivo
        });
        res.status(200).send({
            status: 'ok'
        });
    } catch (error) {
        res.status(400).send(error);
    }
});

export {
    reporterRoute
};