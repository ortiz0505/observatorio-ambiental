import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const funtionarySchema = new Schema({
    nombre: String,
    correo: String,
    cargo: String,
    identificacion: String,
    contraseña: String
})

//crear el modelo

const Funtionary = mongoose.model('Funtionary', funtionarySchema);

export default Funtionary;