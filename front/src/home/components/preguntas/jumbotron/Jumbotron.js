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

 /* return (
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
                <strong> 1. Enlace de Registro:</strong> Visita nuestra página de inicio y busca el enlace de registro. Este suele estar ubicado en la esquina superior derecha bajo la sección "Crear cuenta".
                <br />
                <strong> 2. Completa la Información:</strong> Llena los campos obligatorios con tu información personal:
                <br />
                - <strong>Nombre y Apellido: </strong>Ingresa tu nombre completo.
                <br />
                - <strong>Nombre de Usuario: </strong>Elige un nombre de usuario único.
                <br />
                - <strong>Correo Electrónico: </strong>Proporciona una dirección de correo electrónico válida.
                <br />
                - <strong>Cédula: </strong>Ingresa tu número de cédula.
                <br />
                - <strong>Contraseña Segura: </strong>Crea una contraseña segura siguiendo estas pautas...
               
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
              Cambiar tu contraseña en Progress Cursos MOOC es un proceso sencillo. Sigue estos pasos para actualizar tu contraseña:
                <br />
                <strong>1. Inicia Sesión:</strong> Accede a tu cuenta en Progress Cursos MOOC utilizando tu nombre de usuario y contraseña actual.
                <br />
                <strong>2. Accede a la Configuración de la Cuenta:</strong> Una vez que hayas iniciado sesión, busca la opción de "Configuración de la Cuenta" en tu panel de usuario. Este enlace generalmente se encuentra en la esquina superior derecha de la página.
                <br />
                <strong>3. Selecciona "Cambiar Contraseña":</strong> Dentro de la sección de configuración de la cuenta, busca la opción que indica "Cambiar Contraseña" o algo similar.
                <br />
                <strong> 4.Ingresa la Nueva Contraseña:</strong> Se te pedirá que ingreses tu contraseña actual para verificar tu identidad. Después, proporciona tu nueva contraseña. Recuerda seguir nuestras pautas de seguridad, que incluyen al menos una letra mayúscula, una letra minúscula, un carácter especial y un mínimo de 8 caracteres.
                <br />
                <strong>5. Confirma la Nueva Contraseña:</strong> Vuelve a ingresar la nueva contraseña para confirmar que esté escrita correctamente.
                <br />
                <strong>6. Guarda los Cambios:</strong> Finalmente, guarda los cambios para aplicar tu nueva contraseña.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );*/
};

export default Jumbotron;