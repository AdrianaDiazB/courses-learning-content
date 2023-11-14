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
              <Typography variant="h5">REGISTRO-SUSCRIPCIÓN</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ¿Cómo me registro en Prowess?
                <br />
                ¿Cómo puedo actualizar los datos de mi registro?
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="formas-pago-content" id="formas-pago-header">
              <Typography variant="h5">FORMAS DE PAGO</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ¿Cuáles son las formas de pago en la Tienda Virtual?
                <br />
                ¿Recibiré una factura con mi compra?
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="seguridad-content" id="seguridad-header">
              <Typography variant="h5">SEGURIDAD</Typography>
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