import express from "express";
import Funtionary from '../../models/functionary.js'
const funtionaryRoute = express.Router();

funtionaryRoute.route("/funcionario/crear").post(async (req, res)=>{
    try {
        const {nombre, correo, cargo, identificacion, contraseña} = req.body;
        const funtionary = new Funtionary({nombre, correo, cargo, identificacion, contraseña});
        await funtionary.save();
        res.status(200).send('ok');
    } catch (error) {
        res.status(400).console.log(error);
    }
});

export {funtionaryRoute};