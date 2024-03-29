import React from "react";
import ButtonOptionMenu from "./ButtonOptionMenu";
import "./style.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="sec aboutUs">
            <h2>ACERCA DE NOSOTROS</h2>
            <p>
            Somos una plataforma educativa en línea diseñada especialmente para estudiantes de séptimo nivel de educación básica. Nuestro objetivo es proporcionarte herramientas interactivas y recursos variados para mejorar tu aprendizaje en todas las materias del plan de estudios.
            </p>
            <ul className="sci">
              <li>
              
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61556107522948"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="icon">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </span>
                </a>
              </li>
              <li>
                
              </li>
              <li>
                <a
                  href="https://www.instagram.com/learningcontent1/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="icon">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@learnincontent"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="icon">
                    <ion-icon name="logo-tiktok"></ion-icon>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="sec quickLinks">
            <h2>ENLACES ÚTILES</h2>
            <ul>
              <ButtonOptionMenu name="Acerca" href="" />
              
             
              <ButtonOptionMenu name="Ayuda" href="" />
              <ButtonOptionMenu name="Términos y Condiciones" href="/terminos" />
            </ul>
          </div>

          <div className="sec contactFooter">
            <h2>INFORMACIÓN DE CONTACTO</h2>
            <ul className="info">
              <ButtonOptionMenu
                href=""
                icon={
                  <span className="icon">
                    <ion-icon name="navigate-circle-sharp"></ion-icon>
                  </span>
                }
                name="Grupo 6"
              />
              <li>
                <span>
                  <ion-icon name="call-sharp"></ion-icon>
                </span>
                <p> WHATSAPP: <br></br>
                  <a href="tel:0990292683">(Click aquí ) Para envíarnos un mensaje de WhatsApp +593 98 160 2933
                  </a>
                  <br />
                  <a href="tel:(02) 356 4427">(02) 356 4427</a>
                </p>
              </li>
              <li>
                <span>
                  <ion-icon name="mail-sharp"></ion-icon>
                </span>
                <p> CORREO: <br></br>
                  <a href="mailto:learningcontent@gmail.com">
                  (Clik aquí ) Para envíarnos un mensaje de correo 
                  </a>
                  <br></br>
                  <a href="mailto:aldiaz5@espe.edu.ec">
                  (Clik aquí ) Para envíarnos un mensaje de correo 
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrighText">
        <p>Copyright 2023. Todos los derechos reservados</p>
      </div>
    </>
  );
}

export default Footer;
