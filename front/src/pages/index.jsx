import React from 'react';
import {Link} from 'react-router-dom';
import Slider from '../components/carousel';
import Footer from '../components/Footer';

const Index = () => {  
  return(
    <div className='divppl'>
      <div className='flex flex-row containers-index'>
        <Slider/>
        <div className='flex flex-col w-2/5 my-2 box-content p-5'>
          <a href='#quesomos' className='flex flex-row rounded-lg h-1/5 m-2 transition ease-in-out delay-150 bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-900 duration-75'>
            <div className='w-1/5 m-5'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="white">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <div className='w-4/5 flex h-full'>
                <span className='m-auto text-center font-semibold text-white'>
                  ¿Qué es GeoAntioquia?
                </span>
            </div>
          </a>
          <Link to='mapageneral' className='flex flex-row rounded-lg h-1/5 m-2 transition ease-in-out delay-150 bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-900 duration-75'>
            <div className='w-1/5 m-5'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="white">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className='w-4/5 flex h-full'>
                <span className='m-auto text-center font-semibold text-white'>
                  Ver mapa general
                </span>
            </div>
          </Link>
          <Link to='/pvreportero' className='flex flex-row rounded-lg h-1/5 m-2 transition ease-in-out delay-150 bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-900 duration-75'>
            <div className='w-1/5 m-5'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="white">
                <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className='w-4/5 flex h-full'>
                <span className='m-auto text-center font-semibold text-white'>
                  ¿Quieres hacer parte de nuestro equipo?
                </span>
            </div>
          </Link>          
        </div>
      </div>
      <div id='quesomos' className='containers-index'>
        <span className='block text-green-900 text-2xl my-2 font-bold'>¿Qué es GeoAntioquia?</span>
        <span className="inline-block">
          Bienvenido al observatorio ambiental GeoAntioquia, una herramienta automatizada que proporciona funciones  de  reporte y observación de los fenómenos que afectan el medio ambiente. Cuenta con la facilidad para que usuarios puedan tomar esa tarea de reportar o registrar los eventos que puedan ayudar a una mejor gestión del territorio antioqueño e informar a la comunidad sobre los riesgos ambientales.
        </span>
      </div>
      <div className='containers-index'>Nulla non velit eget urna lacinia auctor. Vivamus finibus sit amet ligula eu sagittis. Sed nec rhoncus mi, et molestie turpis. Fusce eu lobortis tortor, vel dignissim nibh. Fusce varius ligula vitae urna imperdiet, nec ultricies diam tristique. In malesuada tristique facilisis. Nulla sagittis dignissim tellus ut ultricies. Sed quis orci sit amet diam tempus laoreet.</div>
      <div className='containers-index'>Cras nulla diam, ultrices eu elit quis, ornare luctus ante. Etiam quam libero, egestas sit amet tellus eu, suscipit egestas massa. Sed rhoncus nulla ut dui dictum, sed vulputate lacus dapibus. Maecenas tempor vitae augue eu dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non porta nisi, a convallis ex. Aliquam rutrum tortor sed nisl porta, ut pellentesque augue tempor. Donec est lorem, feugiat sed odio id, varius malesuada arcu. Fusce venenatis, sem quis scelerisque ullamcorper, erat eros elementum nunc, eget feugiat elit nisl non ante. Nullam facilisis metus ipsum, eget pulvinar sapien consectetur at. Donec sollicitudin euismod elementum. Nunc egestas magna sed erat condimentum, ut bibendum massa lacinia. Nulla dignissim arcu maximus neque eleifend pharetra. Proin augue magna, sollicitudin eu diam non, iaculis laoreet est.</div>
      <Footer/>
    </div>
  );
};

export default Index;
