import React, { useEffect, useState } from "react";
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Notauth from '../components/404';
import Pgraph from "../components/Pgraph";
import GraphByZone from "../components/GraphByZone";

const graphs = () => {

    const { isAuthenticated } = useAuth0();
    const [events, setEvents] = useState([]);
    const [tracingData, setTracingData] = useState([]);
    const [zones, setZones] = useState([]);
    const [priorities, setPriorities] = useState([]);
    const [categories, setCategories] = useState([]);
    const [status, setStatus] = useState([]);
    const [diasEventos, setDiasEventos] = useState([]);

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

    useEffect(() => {
      if(events.length > 0){

        const mappedZones = events.map(event => event.zona_influencia)
        const reducedZones = mappedZones.reduce((acc, curr) => {
            if(acc.includes(curr)) return acc;
            return [...acc, curr];
        }, [])
        setZones(reducedZones);

        const mappedPriorities = events.map(event => event.prioridad)
        const reducedPriorities = mappedPriorities.reduce((acc, curr) => {
            if(curr==="ALTA") acc[0] = acc[0] + 1;
            if(curr==="MEDIA") acc[1] = acc[1] + 1;
            if(curr==="BAJA") acc[2] = acc[2] + 1;
            return acc;
        }, [0, 0, 0])
        setPriorities(reducedPriorities)
        
        const mappedStatus = events.map(event => ([event.estado_evento, event.clasificacion, event.fecha_inicio, event.fecha_fin]))
        const reducedStatus = mappedStatus.reduce((acc, curr) => {
            if(curr[0]===true) acc[0] = acc[0] + 1;
            if(curr[0]===false){
                acc[1] = acc[1] + 1;
                if(curr[1]==="DENUNCIA"){
                    const fecha_inicio = curr[2].split('T');
                    const tiempo_inicio = new Date(fecha_inicio[0]);
                    const fecha_fin = curr[3].split('T');
                    const tiempo_fin = new Date(fecha_fin[0]);
                    acc[2] = acc[2] + (tiempo_fin.getTime()-tiempo_inicio.getTime())/(1000*60*60*24);
                    acc[3] = acc[3] + 1 
                }
            } 
            return acc;
        }, [0, 0, 0, 0])
        setStatus(reducedStatus.slice(0,2));
        setDiasEventos(reducedStatus.slice(2,4));
      }
    }, [events.length])

    useEffect(() => {
      const tracingData = async () => {
        const options = {
          method: "get",
          url: `http://localhost:4000/seguimiento/6226b3e53c137cafc500a5af`,
        };
        const response = await axios.request(options);
        setTracingData(response.data);
      };
      tracingData();
    }, []);

    useEffect(() => {
        if(tracingData.length > 0){
          const mappedCategories = tracingData.map(tracing => tracing.categoria)
          const reducedCategories = mappedCategories.reduce((acc, curr) => {
              if(curr==="JURIDICO") acc[0] = acc[0] + 1;
              if(curr==="AMBIENTAL") acc[1] = acc[1] + 1;
              if(curr==="SOCIAL") acc[2] = acc[2] + 1;
              return acc;
          }, [0, 0, 0])
          setCategories(reducedCategories)
        }
      }, [tracingData.length])

    const zoneOptions = { labels: ["Informativo", "Formativo", "denuncia"] };
    const optionsp = { labels: ["Alta", "Media", "Baja"] };
    const optionsc = { labels: ["Jurídico", "Ambiental", "Social"] };
    const optionsopcl = { labels: ["Abierto", "Cerrado"] };
    const seriesec = [diasEventos[0]/diasEventos[1]];
    const optionsec = {labels: ["Tiempo en dias"]};


    return (
    <div className='divppl'>
        {isAuthenticated ? (
            <div className="w-9/12 flex flex-col justify-center">
                <GraphByZone
                    zones={zones}
                    options={zoneOptions}
                    data={events}
                />
                
                <div className='rounded-xl bg-gray-200 shadow-md p-5 m-4 grid place-content-center'>
                    <Pgraph 
                        name="Categorías por Evento"
                        options={optionsc}
                        series={categories}
                        type="donut"
                    />
                </div>
                <div className='rounded-xl bg-gray-200 shadow-md p-5 m-4 grid place-content-center'>
                    <Pgraph 
                        name="# eventos por prioridad"
                        options={optionsp}
                        series={priorities}
                    />
                </div>
                <div className='rounded-xl bg-gray-200 shadow-md p-5 m-4 grid place-content-center'>
                    <Pgraph 
                        name="Eventos Abiertos/Cerrados"
                        options={optionsopcl}
                        series={status}
                        type="donut"
                    />
                </div>
                <div className='rounded-xl bg-gray-200 shadow-md p-5 m-4 grid place-content-center'>
                    <Pgraph 
                        name="Tiempo promedio entre la apertura y cierre de evento cuando son de denuncia"
                        options={optionsec}
                        series={seriesec}
                        type="radialBar"
                    />
                </div>
            </div>
            ) : (
            <Notauth />
        )}
    </div>
    );

}

export default graphs