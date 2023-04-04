import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const NavBar = () => {
  const { navSup, navMid, navMid2, navBottom } = useContext(AuthContext);
  return (
    <header className="Header">
      <div className="Header-global">
        <div className="Header-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="Header-menu"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <NavLink to="/" className="Header-logo">
            <img
              src="/src/assets/logo-black.png"
              alt="Logo Og's"
              
            />
          </NavLink>
        </div>
        <nav className="Header-nav Nav">
          <ul className="Nav-ul">
            <div className="Nav-sup Nav-container">
              {navSup.map((ele) => (
                <NavLink key={ele.id} to={ele.to} className="Nav-enlace">
                  {" "}
                  {ele.title}{" "}
                </NavLink>
              ))}
            </div>
            <div className="Nav-mid Nav-container">
              {navMid.map((ele) => (
                <NavLink key={ele.id} to={ele.to} className="Nav-enlace">
                  {" "}
                  {ele.title}{" "}
                </NavLink>
              ))}
            </div>
            <div className="Nav-separate">
              <div className="Nav-mid2 Nav-container">
                {navMid2.map((ele) => (
                  <NavLink key={ele.id} to={ele.to} className="Nav-enlace">
                    {" "}
                    {ele.title}{" "}
                  </NavLink>
                ))}
              </div>
              <div className="Nav-bottom Nav-container">
                {navBottom.map((ele) => (
                  <NavLink key={ele.id} to={ele.to} className="Nav-enlace">
                    {" "}
                    {ele.title}{" "}
                  </NavLink>
                ))}
              </div>
            </div>
          </ul>
        </nav>
        <div className="Header-container">
          <NavLink to="contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="Header-icons"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
          </NavLink>
          <NavLink to="shop">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="Header-icons"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
