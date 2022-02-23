
import { MapContainer, Marker, TileLayer, Popup} from 'react-leaflet'
import AddMarketToClick from './components/addmarkettoclick/AddMarketToClick';
import './App.css';
import { useEffect, useState } from 'react';
import NewEvent from './components/newevent/NewEvent';
import axios from 'axios';


function App() {

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [events, setEvents] = useState([]);

  useEffect(()=>{
    const eventsData = async () =>{
      const options = {
        method: 'get',
        url: 'http://localhost:4000/',
        headers: {'Content-Type': 'application/json'},
      }

      const respuesta = await axios.request(options);
      setEvents(respuesta.data);
      console.log(respuesta.data);
    };
    eventsData();
  },[])

  const addEvent = (event)=>{
    event.id = events.length + 1;
    setEvents([...events, event])
  }

  return (
    <div className='container'>
      <div className='container_sidebar'>
        <NewEvent addEvent={addEvent} position={position}/>
      </div>
      <div className='container_main'> 
        <MapContainer center={[6.24, -75.58]} zoom={15} scrollWheelZoom={true} doubleClickZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            events.map((event)=>(
              <Marker key={event._id} position={[event.latitud, event.longitud]}>
                <Popup>
                  {event.event}
                </Popup>
              </Marker>
            ))
          }
          <AddMarketToClick position={position} setPosition={setPosition}/>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
