import express from "express";
const eventRoute = express.Router();
import Event from '../../models/event.js'

eventRoute.route("/evento").get(async (req, res) => {
    try {
        const arrayEventsDB = await Event.find();
        const arrayFinal = [];
        arrayEventsDB.map((event)=>{
            if(event.estado_aprobacion === true){
                arrayFinal.push(event);
            }
        })
        res.status(200).send(arrayFinal);
    } catch (error) {
        res.status(400).send(error);
    }
});

eventRoute.route("/solicitudesr").get(async (req, res) => {
    try {
        const arrayEvents = await Event.find();
        const arrayFinal = [];
        arrayEvents.map((event) => {
            if (event.estado_aprobacion === false && event.estado_evento === true) {
                arrayFinal.push(event);
            }
        });
        res.status(200).send(arrayFinal);
    } catch (error) {
        res.status(400).send(error);
    }
})


eventRoute.route("/evento").post(async (req, res) => {
    try {
        const {
            latitud,
            longitud,
            imagen,
            fecha_fin,
            descripcion,
            zona_influencia,
            ID_reportero,
            ID_funcionario,
            prioridad,
            clasificacion,
            enlace
        } = req.body;
        const event = new Event({
            latitud,
            longitud,
            imagen,
            fecha_fin,
            descripcion,
            zona_influencia,
            ID_reportero,
            ID_funcionario,
            prioridad,
            clasificacion,
            enlace
        });
        await event.save();
        res.status(200).send(event);
    } catch (error) {
        res.status(400).send(error);
    }
});


eventRoute.route('/evento').put(async (req, res) =>{
    const eventData = req.body;
    const id = eventData._id
    try {
        await Event.findByIdAndUpdate(id, {
            estado_aprobacion: true
        });
        res.status(200).send({status: 'ok'});
    } catch (error) {
        res.status(400).send(error);
    }
});

eventRoute.route('/evento').delete(async (req, res) =>{
    const eventData = req.body;
    const id = eventData._id
    try {
        await Event.findByIdAndRemove(id);
        res.status(200).send({status: 'ok'});
    } catch (error) {
        res.status(400).send(error);
    }
});


export {
    eventRoute
};