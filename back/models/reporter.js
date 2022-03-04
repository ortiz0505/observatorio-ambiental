import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const reporterSchema = new Schema({
    nombre: String,
    correo: {type: String, unique: true},
    descripcion: String,
    zona_influencia: String,
    estado_usuario: {type: Boolean, default: false},
    motivo_suspension: {type: String, default: '1'}
})

//crear el modelo

const Reporter = mongoose.model('Reporter', reporterSchema);

export default Reporter;