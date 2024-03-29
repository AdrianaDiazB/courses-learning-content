import React from "react";
import { NavLink } from "react-router-dom";
import "./css.css";
export const Navbar = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <>
      <div className="bgnavbar nav__banner ">
        <div className="container d-flex justify-content-between align-items-center">
          <NavLink to="/" className="navbar-brand ">
            <img
              className="logo"
              src="https://res.cloudinary.com/dzcke9fzx/image/upload/v1702512428/ANALISIS/logo2_ixql9m.png"
              alt=""
            />
          </NavLink>
          
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bgnavbar sticky-top ">
        <div className="container d-flex justify-content-center">
          <button
            className="navbar-toggler d-xl-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav my-2 gap-2 gap-xl-4 ">
              <li className="nav-item">
                <NavLink
                  style={{ color: "#4D6066", fontSize:"25px" }}
                  to="/"
                  className="nav-link"
                  aria-current="page"
                >
                  Inicio
                  <div className="line"></div>
                </NavLink>
              </li>
              <li className="nav-item mb-1">
                <NavLink
                  style={{ color: " #4D6066", fontSize:"25px" }}
                  to="/nosotros"
                  className="nav-link"
                >
                  Sobre Nosotros
                  <div className="line"></div>
                </NavLink>
              </li>
              <li className="nav-item mb-1">
                <NavLink
                  style={{ color: " #4D6066", fontSize:"25px" }}
                  to="/cursos/general"
                  className="nav-link"
                >
                  Modulos Educativos
                  <div className="line"></div>
                </NavLink>
              </li>

              <li className="nav-item mb-1">
                <NavLink
                  style={{ color: " #4D6066", fontSize:"25px"  }}
                  to="/register"
                  className="nav-link"
                  target={"_blank"}
                  onClick={clearLocalStorage}
                >
                  Inscripciones
                  <div className="line"></div>
                </NavLink>
              </li>
              

              <li className="nav-item mb-1">
              </li>
              <li className="nav-item"> 
              </li>

              <li className="nav-item dropdown ">
                <a
                  style={{ color: "#4D6066", fontSize: "25px" }}
                  href="https://learningcontent.xeted.com/login/index.php"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={clearLocalStorage}
                >
                  Aula Virtual
                  <div className="line"></div>
                </a>
                <div
                  className="dropdown-menu ml-2"
                  aria-labelledby="dropdownId"
                >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
