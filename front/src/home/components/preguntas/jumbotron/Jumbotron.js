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
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="pedido-en-linea-content" id="pedido-en-linea-header">
              <Typography variant="h5">NUNCA HE PEDIDO EN LÍNEA</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ¿Es posible hacer una reserva por teléfono?
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="compras-content" id="compras-header">
              <Typography variant="h5">COMPRAS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ¿Cómo compro en la Tienda Virtual Prowess?
                <br />
                ¿Se pueden realizar compras desde el extranjero?
                <br />
                ¿Puedo enviar mis compras a otras personas?
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="costos-tiempos-entrega-content" id="costos-tiempos-entrega-header">
              <Typography variant="h5">COSTOS Y TIEMPOS DE ENTREGA</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ¿En cuánto tiempo llegará mi pedido?
                <br />
                ¿Cuál es el costo de envío que aplica por tipo de producto?
                <br />
                ¿Cómo es calculado el valor de envío a domicilio de tus productos?
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

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="estado-pedido-content" id="estado-pedido-header">
              <Typography variant="h5">ESTADO DE PEDIDO</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ¿Cómo consulto el estado de mi pedido?
                <br />
                ¿Cuáles son los estados de mi compra?
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="retiro-tienda-content" id="retiro-tienda-header">
              <Typography variant="h5">RETIRO EN TIENDA</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ¿Puedo retirar mi pedido en tienda?
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="retiro-agencias-content" id="retiro-agencias-header">
              <Typography variant="h5">RETIRO EN AGENCIAS AUTORIZADAS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ¿Es posible retirar mi pedido en una agencia autorizada?
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="cambios-devoluciones-content" id="cambios-devoluciones-header">
              <Typography variant="h5">CAMBIOS Y DEVOLUCIONES</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ¿Cómo realizo cambios y devoluciones en la tienda virtual?
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;