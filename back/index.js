import express from "express";
import { eventRoute } from "./views/events/routes.js";
import { funtionaryRoute } from "./views/functionaries/routes.js";
import cors from "cors";
import mongoose from 'mongoose';

const password = 'ihep9XwGpd5WqzBd';
const user = 'observatory-admin';
const uri = `mongodb+srv://${user}:${password}@cluster0.tslab.mongodb.net/observatory?retryWrites=true&w=majority`;

mongoose.connect(uri)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log(e));

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use(eventRoute);
app.use(funtionaryRoute);

app.listen(port, ()=>{
    console.log(`Example app lisening at http://localhost:${port}`);
});