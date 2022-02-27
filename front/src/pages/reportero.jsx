import React from 'react';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const reportero = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isAuthenticated } = useAuth0();

  return (
      <div>
          {isAuthenticated ? (
            <div className='grid place-items-center my-20'>
                <div>Hola, Usuario</div>
                <div className='my-20'>
                <Link to='/reportero/rreportero'>
                <div>
                    <button className="w-96 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Ver Reportes
                    </button>
                </div>
                </Link>
                <Link to='/evento/crear'>
                <div>
                    <button className="w-96 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Reportar nueva zona de influencia
                    </button>
                </div>
                </Link>
                </div>
            </div>
        ) : (
            <div>Tienes que autenticarte para ingresar aqui</div>
        )}
      </div>
      
  );
};

export default reportero;
