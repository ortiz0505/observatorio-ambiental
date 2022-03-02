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
        res.status(400).send(error);
    }
});

funtionaryRoute.route("/funcionario/:email").get(async (req, res)=>{
    try {
        const ArrayFuntionary = await Funtionary.find();
        const finded = false;
        const email = req.params;
        ArrayFuntionary.map((funtionary)=>{
            if(email === funtionary.email){
                finded = true
            }  
            res.status(200).send(finded);
        })
    } catch (error) {
        res.status(400).send(error);
    }
});

export {funtionaryRoute};