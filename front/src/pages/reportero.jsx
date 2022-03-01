import React from 'react';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from '../components/Navbar';

const reportero = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isAuthenticated } = useAuth0();

  return (
      <div className='divppl'>
          <Navbar />
          {isAuthenticated ? (
            <div>
                <div className='my-20'>
                <Link to='/reportero/rreportero'>
                <div>
                    <button className="inputsppls">
                        Ver Reportes
                    </button>
                </div>
                </Link>
                <Link to='/evento/crear'>
                <div>
                    <button className="inputsppls">
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
