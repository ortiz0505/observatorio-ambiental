import React, { useState } from "react";
import Logo from "../assets/geoantioquia-logo-txt.png";

import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../components/Login";
import { LogoutButton } from "../components/Logout";
import { Profile } from "../components/profile";

import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user, isAuthenticated } = useAuth0();
  const [showOptions, setShowOptions] = useState(false);
  const [isFuntionary, setisFuntionary] = useState(false);
  const [isReporter, setIsReporter] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
    const findFunt = async () => {
      const options = {
        method: "get",
        url: `http://localhost:4000/funcionario/${user.email}`,
      };
      const res = await axios.request(options);
      setisFuntionary(res.data);
    };
    const findReport = async () => {
      const options = {
        method: "get",
        url: `http://localhost:4000/reportero/${user.email}`,
      };
      const res = await axios.request(options);
      setIsReporter(res.data);
    };
    findReport();
    findFunt();
  };

  return (
    <nav className="flex justify-between p-4 bg-black w-full">
      {isAuthenticated && user.email === 'melissa.vf0217@gmail.com'?
      <Link to='../funcionario/crear'>
        <button className="buttonsppl">Crear Funcionario</button>
      </Link>
        :
        <></>
      }
      <div>
        <Link to="/">
          <img
            className="w-32 items-center"
            src={Logo}
            alt="geoantioquia-logo"
          />
        </Link>
      </div>
      <div>
        {isAuthenticated ? (
          <div className="flex flex-row items-center">
            <div className="relative inline-block text-left items-center">
              <div
                onClick={handleClick}
                className="flex flex-row items-center cursor-pointer"
              >
                <img
                  src={user.picture}
                  alt={user.name}
                  type="button"
                  className="w-14 rounded-full border-solid border-2 border-black hover:border-green-900"
                  id="menu-button"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {showOptions && (
                <div
                  className="navoptionframe"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <Profile />
                    {
                        isFuntionary.finded ? (
                    <Link to="/funcionario" className="navoptions">
                      Funcionario
                    </Link>
                        ) : null
                    }
                    {
                        (isReporter.finded && isReporter.estado_usuario)? (
                    <Link to="/reportero" className="navoptions">
                      Reportero
                    </Link>
                        ): null
                    }
                    <LogoutButton />
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center mx-8">
            <LoginButton />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
