import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className="flex justify-center items-center">
      <button className='enviar-event' onClick={() => logout({ returnTo: window.location.href})}>
        Cerrar sesión
      </button>
    </div>
  );
};