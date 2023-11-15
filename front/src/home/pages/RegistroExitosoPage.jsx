// import './style.css';
// const RegistroExitosoPage = () => {
//   return (
//     <div className="registro-exitoso-container">
//       <img className="checkmark-icon" src={"https://res.cloudinary.com/dena7lqj3/image/upload/v1678143989/modulomocc/home/RegistroExitoso2_wungok.png"} alt="Ícono de marca de verificación" />
//       <h1 className="titulo-registro-exitoso">¡Registro exitoso!</h1>
//       <p className="texto-registro-exitoso">Gracias por registrarte en nuestro sitio.</p>
//       <p className="texto-registro-exitoso">Por favor. Confirma tu correo electrónico.</p>
//     </div>
//   );
// };

// export default RegistroExitosoPage;

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const RegistroExitosoPage = () => {
  const redirectToCampusVirtual = () => {
    // Redirige a la página del Campus Virtual
    window.location.href = 'https://cursosmocc.prowessec.com';
  };

  return (
    <div className="registro-exitoso-container">
      <img
        className="checkmark-icon"
        src={
          'https://res.cloudinary.com/dena7lqj3/image/upload/v1678143989/modulomocc/home/RegistroExitoso2_wungok.png'
        }
        alt="Ícono de marca de verificación"
      />
      <h1 className="titulo-registro-exitoso">¡Registro exitoso!</h1>
      <p className="texto-registro-exitoso">Gracias por registrarte en nuestro sitio.</p>
      <p className="texto-registro-exitoso">Por favor, confirma tu correo electrónico.</p>
      <Link to="/">
        <button className="btn-home" onClick={redirectToCampusVirtual}>Ahora puedes acceder al campus virtual!</button>
      </Link>
    </div>
  );
};

export default RegistroExitosoPage;
