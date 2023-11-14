
import React from "react";

import raya from "../imgs/raya.png";

export const Detalles = () => {
  return (
    <div className="container mt-5">
      <h2 className="display-5">Contactos</h2>
      <img className="image" src={raya} alt="" width="500" height="50" />

      <div className="contacto">
        <h5 className="display-100">RESPONSABLE</h5>
        <p>Ing. Luis Enrique Simbaña Ph.D</p>
      </div>

      <div className="contacto">
        <h5 className="display-100">CORREO</h5>
        <p>lesimbania@espe.edu.ec</p>
      </div>

      <div className="contacto">
        <h5 className="display-100">TELÉFONO</h5>
        <p>(02) 356 4427</p>
      </div>

      <div className="contacto">
        <h5 className="display-100">CELULAR</h5>
        <p>09981602933</p>
      </div>

      <div className="contacto">
        <h5 className="display-100">WHATSAPP</h5>
        <p>(593) 98 160 2933</p>
      </div>

      <div className="contacto">
        <h5 className="display-100">NUEVO CONTACTO</h5>
        <p>Lcda. Lena Ivannova Ruiz Rojas, PHD</p>
      </div>

      <div className="contacto">
        <h5 className="display-100">CORREO</h5>
        <p>liruiz@espe.edu.ec</p>
      </div>

      <div className="contacto">
        <h5 className="display-100">TELÉFONO</h5>
        <p>+593 98 168 4393</p>
      </div>
    </div>
  );
};

export default Detalles;