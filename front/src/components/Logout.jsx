import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className='navoptions cursor-pointer' role="menuitem" tabindex="-1" id="menu-item-2" onClick={() => logout({ returnTo: window.location.href})}>
        Cerrar sesión
    </div>
  );
};