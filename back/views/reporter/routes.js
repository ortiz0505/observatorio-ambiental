import express from "express";
import Reporter from "../../models/reporter.js"

const reporterRoute = express.Router();

reporterRoute.route("/reportero").get(async (req, res) => {
    try {
        const reporters = await Reporter.find();
        res.status(200).send(reporters)
    } catch (error) {
        res.status(400).send(error)
    }
});

reporterRoute.route("/reportero").post(async (req, res) => {
    try {
        const {
            nombre,
            correo,
            descripcion,
            zona_influencia
        } = req.body;
        const reporter = new Reporter({
            nombre,
            correo,
            descripcion,
            zona_influencia
        })
        await reporter.save();
        res.status(200).send(reporter);
    } catch (error) {
        res.status(400).send(error);
    }
})

reporterRoute.route('/reportero/:email').get(async (req, res) => {
    try {
        const ArrayReporter = await Reporter.find();
        let finded = false;
        const email = req.params.email;
        ArrayReporter.map((reporter) => {
            if (email === reporter.correo && finded !== true) {
                finded = true
            }
        })
        res.status(200).send(finded);
    } catch (error) {
        res.status(400).send(error);
    }
})

export {
    reporterRoute
};