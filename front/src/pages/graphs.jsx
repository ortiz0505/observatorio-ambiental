import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Notauth from '../components/404';

    const pA = [];
    const pM = [];
    const pB = [];
    const zI = [];
    const zF = [];
    const zD = [];
    const cJ = [];
    const cA = [];
    const cS = [];
    const zonas = [];

const graphs = () => {

      // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isAuthenticated } = useAuth0();
    const [events, setEvents] = useState([]);
    useEffect(() => {
        
        const eventsData = async () => {
        const options = {
            method: "get",
            url: "http://localhost:4000/evento",
        };
        const response = await axios.request(options);
        setEvents(response.data);
        };
        eventsData();
    }, []);

    events.map((event) => {
        console.log(event)
        if(!zonas.includes(event.zona_influencia)){
            zonas.push(event.zona_influencia);    
        }
        if(event.prioridad==="ALTA"){
            pA.push(event.prioridad)
        }
        if(event.prioridad==="MEDIA"){
            pM.push(event.prioridad)
        }
        if(event.prioridad==="BAJA"){
            pB.push(event.prioridad)
        }
        if(event.zona_influencia==="ITAGUI" && event.clasificacion==="INFORMATIVO"){
            zI.push(event.zona_influencia)
        }
        if(event.zona_influencia==="ITAGUI" && event.clasificacion==="FORMATIVO"){
            zF.push(event.zona_influencia)
        }
        if(event.zona_influencia==="ITAGUI" && event.clasificacion==="DENUNCIA"){
            zD.push(event.zona_influencia)
        }
    });

    useEffect(() => {
      const tracingData = async () => {
        const options = {
          method: "get",
          url: `http://localhost:4000/seguimiento/6226b3e53c137cafc500a5af`,
        };
        const response = await axios.request(options);
        setEvents(response.data);
      };
      tracingData();
    }, []);

    events.map((Tracing) => {
        console.log(Tracing)
        if(Tracing.categoria==="JURIDICO"){
            cJ.push(Tracing.categoria);
        }
        if(Tracing.categoria==="AMBIENTAL"){
            cA.push(Tracing.categoria);
        }
        if(Tracing.categoria==="SOCIAL"){
            cS.push(Tracing.categoria);
        }
    });

    const seriesz = [zI.length, zF.length, zD.length]; //our data
    const optionsz = { labels: ["Informativo", "Formativo", "denuncia"] };

    const seriesp = [pA.length, pM.length, pB.length]; //our data
    const optionsp = { labels: ["Alta", "Media", "Baja"] };
    
    const seriesc = [cJ.length, cA.length, cS.length]; //our data
    const optionsc = { labels: ["Jurídico", "Ambiental", "Social"] };

    return (
    <div className='divppl'>
        {isAuthenticated ? (
            <div className="w-9/12 flex flex-col justify-center">
                <div className='rounded-xl bg-gray-200 shadow-md p-5 m-4 grid place-content-center'>
                    <label htmlFor='zona_influencia'>
                        <span className="labelsppl">Seleccione una zona de influencia</span>
                        <select className="inputs-text-ppl" name='zona_influencia' type='text' required>
                        <option value="">Selecciona una opción...</option>
                        {zonas.map((zona) => {
                            return (
                            <option key={zona} value={zona}>{zona}</option>
                            );
                        })} 
                        </select>
                    </label>
                    <span className="text-center text-green-900 text-2xl my-2 font-bold uppercase">Clasificacion por Zona</span>
                    <ReactApexChart options={optionsz} series={seriesz} type="pie" width="500" />
                </div>
                <div className='rounded-xl bg-gray-200 shadow-md p-5 m-4 grid place-content-center'>
                    <span className="text-center text-green-900 text-2xl my-2 font-bold uppercase"># eventos por prioridad</span>
                    <ReactApexChart options={optionsp} series={seriesp} type="pie" width="500" />
                </div>
                <div className='rounded-xl bg-gray-200 shadow-md p-5 m-4 grid place-content-center'>
                    <span className="text-center text-green-900 text-2xl my-2 font-bold uppercase">Categorias por Evento</span>
                    <ReactApexChart options={optionsc} series={seriesc} type="pie" width="500" />
                </div>
            </div>
            ) : (
            <Notauth />
        )}
    </div>
    );

}

export default graphs