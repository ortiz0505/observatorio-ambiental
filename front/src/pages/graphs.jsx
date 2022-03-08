import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

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
    
    var pA = 0;
    var pM = 0;
    var pB = 0;

    events.map((event) => {
        console.log(event)
        if(event.prioridad==="ALTA"){
            pA = pA + 1;
        }
        if(event.prioridad==="MEDIA"){
            pM = pM + 1;
        }
        if(event.prioridad==="BAJA"){
            pB = pB + 1;
        }
    });

    const series = [pA, pM, pB]; //our data
    const options = { labels: ["Alta", "Media", "Baja"] };

    return (
    <div className='divppl'>
            <div className='containers-index grid place-content-center'>
                <span className="text-center text-green-900 text-2xl my-2 font-bold uppercase"># eventos por prioridad</span>
                <ReactApexChart options={options} series={series} type="pie" width="500" />
            </div>
    </div>
    );

}

export default graphs