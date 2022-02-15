import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tracingSchema = new Schema({
    fecha: Date,
    ID_evento: String,
    tipo_seguimiento: String,
    descripcion: String,
    imangen: String,
    categoria: String,
    observaciones_recomendaciones: String,
    ID_funcionario: String,
    enlace: String
})

//crear el modelo

const Tracing = mongoose.model('Tracingy', tracingSchema);

export default Tracing;