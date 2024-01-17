import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getCiudad, getPais, getProvincia } from "../../services/getPais";
import { getUser, postEnrol, postUser } from "../../services/backend-api";
import FormPart1 from "../components/registro/FormPart1";
import FormPart2 from "../components/registro/FormPart2";
import { validarCedula } from "../helpers/getValidation";
import ModalError from "../components/registro/ModalError";
import Loader from "../components/registro/Loader";

function RegistroPage() {
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
      
        <button className="btn-home">Ahora puedes acceder al campus virtual!</button>
      
    </div>
  );
 
}

export default RegistroPage;
