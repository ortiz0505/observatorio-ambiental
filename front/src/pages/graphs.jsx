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
    const eOp = [];
    const eCl = [];
    const zonas = [];
    const diaseventos = [];

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

    const actualizarGrafica = async (e) =>{
         
        for (let i = zI.length; i > 0; i--) {
            zI.pop();
        }
        for (let i = zF.length; i > 0; i--) {
            zF.pop();
        }
        for (let i = zD.length; i > 0; i--) {
            zD.pop();
        }
        console.log(zI.length)
    }

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
        if(event.estado_evento === true){
            eOp.push("abierto")
        }
        if(event.estado_evento === false){
            eCl.push("cerrado")
            if(event.clasificacion==="DENUNCIA"){
                const fecha_inicio = event.fecha_inicio.split('T')
                const tiempo_inicio = new Date(fecha_inicio[0])
                const fecha_fin = event.fecha_fin.split('T')
                const tiempo_fin = new Date(fecha_fin[0])
                diaseventos.push((tiempo_fin.getTime()-tiempo_inicio.getTime())/(1000*60*60*24))
            }
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

    function ArrayAvg(myArray) {
        var i = 0, summ = 0, ArrayLen = myArray.length;
        while (i < ArrayLen) {
            summ = summ + myArray[i++];
    }
        return summ / ArrayLen;
    }

    const seriesz = [zI.length, zF.length, zD.length]; //our data
    const optionsz = { labels: ["Informativo", "Formativo", "denuncia"] };

    const seriesp = [pA.length, pM.length, pB.length]; //our data
    const optionsp = { labels: ["Alta", "Media", "Baja"] };
    
    const seriesc = [cJ.length, cA.length, cS.length]; //our data
    const optionsc = { labels: ["Jurídico", "Ambiental", "Social"] };

    const seriesopcl = [eOp.length, eCl.length]; //our data
    const optionsopcl = { labels: ["Abierto", "Cerrado"] };

    const seriesec = [ArrayAvg(diaseventos)]; //70 percent
    const optionsec = {
    labels: ["Tiempo en dias"], //label of this diagram
    };
    return (
    <div className='divppl'>
        {isAuthenticated ? (
            <div className="w-9/12 flex flex-col justify-center">
                <div className='rounded-xl bg-gray-200 shadow-md p-5 m-4 grid place-content-center'>
                    <label htmlFor='zona_influencia'>
                        <span className="labelsppl">Seleccione una zona de influencia</span>
                        <select className="inputs-text-ppl" name='zona_influencia' onChange={actualizarGrafica} type='text' required>
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
                    <ReactApexChart options={optionsp} series={seriesp} type="donut" width="500" />
                </div>
                <div className='rounded-xl bg-gray-200 shadow-md p-5 m-4 grid place-content-center'>
                    <span className="text-center text-green-900 text-2xl my-2 font-bold uppercase">Categorias por Evento</span>
                    <ReactApexChart options={optionsc} series={seriesc} type="pie" width="500" />
                </div>
                <div className='rounded-xl bg-gray-200 shadow-md p-5 m-4 grid place-content-center'>
                    <span className="text-center text-green-900 text-2xl my-2 font-bold uppercase">Eventos abiertos/cerrados</span>
                    <ReactApexChart options={optionsopcl} series={seriesopcl} type="donut" width="500" />
                </div>
                <div className='rounded-xl bg-gray-200 shadow-md p-5 m-4 grid place-content-center'>
                    <span className="text-center text-green-900 text-2xl my-2 font-bold uppercase">Tiempo promedio entre la apertura y cierre de evento cuando son de denuncia</span>
                    <ReactApexChart type="radialBar" series={seriesec} options={optionsec} width="500" />
                </div>
            </div>
            ) : (
            <Notauth />
        )}
    </div>
    );

}

export default graphs