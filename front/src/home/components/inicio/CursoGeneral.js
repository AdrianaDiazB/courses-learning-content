import React from "react";
import { NavLink } from "react-router-dom";

const CursoGeneral = ({ img, title, icon }) => {
  return (
    <div class="d-flex col-12 col-md-6 col-lg-3 card img3 cursoGeneral">
      <img className="img-fluid imgCurso" src={img} alt="" />

      <div className="contenedorCurso d-flex justify-content-between align-items-center">
        <div class="card_icon">
          <img className="img-fluid" src={icon} alt="" />
        </div>
        <NavLink to="/cursos/1" className="nav-link">
          <div class="card_title title-white  ">
            <p>{title}</p>
            <h3></h3>
          </div>
        </NavLink>
        <div className="card_but">
          <NavLink to={`/cursos/1`} className="nav-link ">
            <button
              type="button"
              className="btn btn-outline-light border border-secondary text-body "
            >
              
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CursoGeneral;
