import express from "express";
import mongoose from "mongoose";
const eventRoute = express.Router();
import Event from '../../models/event.js'

eventRoute.route("/evento").get(async (req, res) => {
    try {
        const arrayEventsDB = await Event.find();
        const arrayFinal = [];
        arrayEventsDB.map((event) => {
            if (event.estado_aprobacion === true /*&& event.estado_evento === true*/) {
                arrayFinal.push(event);
            }
        })
        res.status(200).send(arrayFinal);
    } catch (error) {
        res.status(400).send(error);
    }
});


eventRoute.route('/evento/:id').get(async (req, res) => {
    try {
        const id = mongoose.Types.ObjectId(req.params.id);
        const event = await Event.findById(id);
        res.status(200).send(event);
    } catch (error) {
        res.status(400).send(error);
    }
})

eventRoute.route("/evento/zona/:zona_influencia").get(async (req, res)=>{
    try {
        const arrayEventsDB = await Event.find();
        const arrayFinal = [];
        const zona = req.params.zona_influencia;
        arrayEventsDB.map((event)=>{
            if(zona === event.zona_influencia){
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


eventRoute.route('/evento').put(async (req, res) => {
    const eventData = req.body;
    const id = eventData._id
    try {
        await Event.findByIdAndUpdate(id, {
            estado_aprobacion: true
        });
        res.status(200).send({
            status: 'ok'
        });
    } catch (error) {
        res.status(400).send(error);
    }
});

eventRoute.route('/evento').delete(async (req, res) => {
    const eventData = req.body;
    const id = eventData._id
    try {
        await Event.findByIdAndRemove(id);
        res.status(200).send({
            status: 'ok'
        });
    } catch (error) {
        res.status(400).send(error);
    }
});

eventRoute.route('/evento/:id').patch(async (req, res) => {
    try {
        const event = await Event.findById(mongoose.Types.ObjectId(req.params.id))
        Object.assign(event, req.body);
        event.save();
        res.status(200).send({
            data: event
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

eventRoute.route('/evento/:id').put(async (req, res) => {
    try {
        const id = req.params.id
        let status = false
        if (req.body.status === 'abierto') {
            status = false
        } else status = true
        await Event.findByIdAndUpdate(id, {
            estado_evento: status,
            fecha_fin: Date.now()
        });
        res.status(200).send({
            status: 'ok'
        });
    } catch (error) {
        res.status(400).send(error);
    }
});


export {
    eventRoute
};