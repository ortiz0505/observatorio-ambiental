import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from '../components/Navbar';

const gestiondereporteros = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isAuthenticated } = useAuth0();

  return (
    <div className='divppl'>
        <Navbar />
          {isAuthenticated ? (
              <div className='grid place-items-center my-20'>
              <div>
                  <button className="w-96 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Reportar reportero
                  </button>
              </div>
              <div>
                  <button className="w-96 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Eliminar sanción
                  </button>
              </div>
            </div>
        ) : (
            <div>Tienes que autenticarte para ingresar aqui</div>
        )}
      </div>
      
  );
};

export default gestiondereporteros;
