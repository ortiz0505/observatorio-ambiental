
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    latitud: String,
    longitud: String,
    imagen: String,
    fecha_inicio: {type: Date, default: Date.now},
    fecha_fin: Date,
    descripcion: String,
    zona_influencia: String,
    ID_reportero: String,
    ID_funcionario: String,
    prioridad: String,
    estado_aprobacion: {type: Boolean, default: false},
    estado_evento: {type: Boolean, default: true},
    clasificacion: String,
    enlace: String
})

//crear el modelo

const Event = mongoose.model('Event', eventSchema);

export default Event;