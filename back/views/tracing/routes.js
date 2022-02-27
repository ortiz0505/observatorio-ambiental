import express from "express";
import Tracing from "../../models/tracing.js"

const tracingRoute = express.Router();

tracingRoute.route("/seguimiento").get(async (req, res) => {
    try {
        const seguimiento = await Tracing.find();
        res.status(200).send(seguimiento)
    } catch (error) {
        res.status(400).send(error)
    }
});

tracingRoute.route("/seguimiento/:id").get(async (req, res) => {
    try {
        const id = String (req.params.id)
        const tracing = await Tracing.find({
            ID_evento: id,   
        })
        res.status(200).send(tracing)
    } catch (error) {
        res.status(400).send(error);
    }
})

tracingRoute.route("/seguimiento").post(async (req, res) => {
    try {
        const {
            ID_evento,
            tipo_seguimiento,
            descripcion,
            imagen,
            categoria,
            observaciones_recomendaciones,
            ID_funcionario,
            enlace
        } = req.body;
        const tracing = new Tracing({
            ID_evento,
            tipo_seguimiento,
            descripcion,
            imagen,
            categoria,
            observaciones_recomendaciones,
            ID_funcionario,
            enlace
        })
        await tracing.save();
        res.status(200).send(tracing);
    } catch (error) {
        res.status(400).send(error);
    }
})

export {
    tracingRoute
};