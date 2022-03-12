import React, { useMemo, useState } from 'react'
import Pgraph from './Pgraph';

export default function GraphByZone({zones, options, data}) {
    const [selectedZone, setSelectedZone] = useState(zones[0]);


    const handleSelect = event => setSelectedZone(event.target.value);

    const filteredData = useMemo(() => data.filter((item) => item.zona_influencia === selectedZone), [data, selectedZone])
    
    const reducedData = useMemo(() => filteredData.reduce((acc, curr) => {
        if(curr.clasificacion==="INFORMATIVO") acc[0] = acc[0] + 1;
        if(curr.clasificacion==="FORMATIVO") acc[1] = acc[1] + 1;
        if(curr.clasificacion==="DENUNCIA") acc[2] = acc[2] + 1
        return acc
    }, [0, 0, 0]), [filteredData])

    return (
        <div className='rounded-xl bg-gray-200 shadow-md p-5 m-4 grid place-content-center'>
            <label htmlFor='zona_influencia'>
                <span className="labelsppl">Seleccione una zona de influencia</span>
                <select value={selectedZone} onChange={handleSelect} className="inputs-text-ppl" name='zona_influencia' type='text' required>
                    <option value="" disabled>Selecciona una opción...</option>
                    {zones.map((zona) => {
                        return (
                        <option key={zona} value={zona}>{zona}</option>
                        );
                    })} 
                </select>
            </label>
            <Pgraph 
                name="Clasificacion por Zona"
                options={options}
                series={reducedData}
            />
        </div>
  )
}
