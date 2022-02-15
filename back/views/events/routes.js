import express from "express";
const eventRoute = express.Router();
import Event from '../../models/event.js'

eventRoute.route("/evento/leer").get(async (req, res)=>{
    try {
        const arrayEventsDB = await Event.find();
        res.status(200).send(arrayEventsDB);
    } catch (error) {
        console.log(error);
    }
});

eventRoute.route("/evento/crear").post(async (req, res)=>{
    try {
        const {
            latitud, longitud, imagen, fecha_fin, descripcion, zona_influencia,
            ID_reportero, ID_funcionario, prioridad, estado_aprobacion, estado_evento,
            clasificacion, enlace
        } = req.body;
        const event = new Event(
            {
                latitud, longitud, imagen, fecha_fin, descripcion, zona_influencia,
                ID_reportero, ID_funcionario, prioridad, estado_aprobacion, estado_evento,
                clasificacion, enlace
            }
        );
        await event.save();
        res.status(200).send(event);
    } catch (error) {
        res.status.console.log(error);
    }
});

export {eventRoute};