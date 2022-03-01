import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Notauthenticated = () => {
  return (
    <div className='w-full grid place-items-center'>
        <div>
            <span className='block'>Necesitas autenticarte para ver esta pagina</span>
            <Link to='/'>Volver a la pagina principal</Link>
        </div>
    </div>
  )
}

export default Notauthenticated;
