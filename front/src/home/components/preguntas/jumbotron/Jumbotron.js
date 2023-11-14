import React, { useEffect } from "react";
import raya from "../imgs/raya.png";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./style.css";

export const Jumbotron = () => {
  useEffect(() => {
    const opciones = document.querySelectorAll(".opcion");

    opciones.forEach((e) => {
      e.addEventListener("click", function (e) {
        const padre = e.target.parentNode;
        padre.children[1].classList.toggle("animation");
        padre.parentNode.children[1].classList.toggle("animation");
      });
    });
  }, []);

  return (
    <div className="jumbotron">
      <div className="container">
        <Typography variant="h3">Preguntas frecuentes</Typography>
        <img src={raya} alt="" width="500" height="50" />

        <div className="faq-section">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="registro-suscripcion-content" id="registro-suscripcion-header">
              <Typography variant="h5">¿Cómo me registro en Prowess?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               
              <strong>¡Registrarse en Progress Cursos MOOC es rápido y fácil!</strong> 
              <br />
              Sigue estos pasos:
                <br />
                1. Encuentra el Enlace de Registro: Visita nuestra página de inicio y busca el enlace de registro. Este suele estar ubicado en la esquina superior derecha bajo la sección "Crear cuenta".
                <br />
                2. Completa la Información: Llena los campos obligatorios con tu información personal:
                <br />
                - Nombre y Apellido: Ingresa tu nombre completo.
                <br />
                - Nombre de Usuario: Elige un nombre de usuario único.
                <br />
                - Correo Electrónico: Proporciona una dirección de correo electrónico válida.
                <br />
                - Cédula: Ingresa tu número de cédula.
                <br />
                - Contraseña Segura: Crea una contraseña segura siguiendo estas pautas...
               
                <br />
                ¡Bienvenido a Progress Cursos MOOC!
                <br />
                Si tienes alguna dificultad durante el proceso, no dudes en contactar a nuestro equipo de soporte en [dirección de correo electrónico de soporte] para obtener asistencia.

              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="formas-pago-content" id="formas-pago-header">
              <Typography variant="h5">¿Cuáles son las formas de pago en Prowess?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                 En Progress Cursos, simplificamos el proceso de pago para que puedas comenzar tus cursos MOOC de manera rápida y sencilla.Actualmente, aceptamos pagos mediante tarjeta de crédito como única opción. 
                 
                 Aquí tienes los pasos para realizar tu pago:
                <br />
                <strong>Tarjeta de Crédito:</strong> Durante el proceso de pago, selecciona la opción de "Tarjeta de Crédito". Ingresa los detalles de tu tarjeta, incluyendo el número, la fecha de vencimiento y el código de seguridad.
                <br />
                Te aseguramos que todas las transacciones con tarjeta de crédito se realizan de forma segura, utilizando protocolos de cifrado avanzados para proteger tu información personal.
                <br />
                Si tienes alguna pregunta específica sobre el proceso de pago con tarjeta de crédito o experimentas algún problema durante la transacción, no dudes en ponerte en contacto con nuestro equipo de soporte.
                <br />
                <strong>¡Esperamos que disfrutes de tus cursos MOOC en Progress Cursos</strong>!
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="seguridad-content" id="seguridad-header">
              <Typography variant="h5">¿Cómo puedo cambiar mi contraseña?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ¿Es seguro comprar en la Tienda Virtual?
                <br />
                ¿Cómo puedo bloquear mi cuenta de usuario?
                <br />
                ¿Cómo puedo cambiar mi contraseña?
                <br />
                ¿Cómo puedo recuperar mi contraseña?
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;