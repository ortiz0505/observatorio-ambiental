import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../components/Login";
import { LogoutButton } from "../components/Logout";
import { Profile } from "../components/profile";

import {Link} from 'react-router-dom';

const login = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isAuthenticated } = useAuth0();

  return (
    <div className="flex h-screen justify-center items-center">
          {isAuthenticated ? (
            <div className="flex flex-row items-center">
              <div>
                <Profile />
                <LogoutButton />
              </div>
              <div className="flex flex-col m-5">
                <Link to='/funcionario' className='enviar-event m-2 w-full text-center'>Funcionario</Link>
                <Link to='/reportero' className='enviar-event m-2 w-full text-center'>Reportero</Link>
              </div>
            </div>

          ) : (
            <div className="text-center">
              <div className="m-5">
                <span className="block">Bienvenido a "nombre app"</span>
                ¿quieres ingresar a nuestra plataforma?
              </div>
              <LoginButton />
            </div>
          )}
    </div>
  );
};

export default login;

