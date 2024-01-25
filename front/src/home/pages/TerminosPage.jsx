import React from "react";
import { useState } from "react";
import Footer from "../components/footer/Footer";
import "./style.css";

const TerminosPage = () => {
  // [loading, setLoading] = useState(false);
  //const [error, setError] = useState(false);
 
  return (
    <>
     <div className="container-md container-cursos mb-5">
        <h1 className="text-center mt-5 title-curso">Términos y Condiciones</h1>
            
      </div>
    <div className="terminos-container">
           
      <div className="terminos-content">
        <p className="terminos-paragraph">
          <span className="terminos-highlight">Fecha de entrada en vigencia:</span> [05/12/2023]
        </p>

        <p className="terminos-paragraph">
          <span className="terminos-highlight">1. Aceptación de los Términos y Condiciones:</span> 
          Al acceder y utilizar la plataforma Learning Content, aceptas automáticamente estos términos y condiciones. 
          Si no estás de acuerdo con alguno de los términos establecidos, te solicitamos que te abstengas de utilizar nuestros servicios.
        </p>

        <p className="terminos-paragraph">
          <span className="terminos-highlight">2. Uso Responsable:</span> 
          Los usuarios se comprometen a utilizar Learning Content de manera responsable y respetuosa. 
          No se permite el uso indebido de la plataforma con fines fraudulentos, ilegales o que puedan causar daño a otros usuarios.
        </p>

        <p className="terminos-paragraph">
          <span className="terminos-highlight">3. Acceso a Contenidos:</span> 
          Learning Content proporciona acceso a recursos académicos especializados para estudiantes de séptimo año. 
          El contenido está diseñado para fortalecer conocimientos en materias relevantes para su desarrollo educativo. 
          Nos reservamos el derecho de modificar, actualizar o retirar cualquier contenido de la plataforma.
        </p>

        <p className="terminos-paragraph">
          <span className="terminos-highlight">4. Privacidad y Protección de Datos:</span> 
          Valoramos la privacidad de nuestros usuarios. Al utilizar Learning Content, aceptas nuestra política de privacidad, 
          que puede consultarse en [enlace a la política de privacidad].
        </p>

        <p className="terminos-paragraph">
          <span className="terminos-highlight">5. Propiedad Intelectual:</span> 
          Todos los contenidos, textos, gráficos, imágenes y demás materiales presentes en Learning Content son propiedad exclusiva de la plataforma. 
          No se permite la reproducción, distribución o modificación no autorizada de dichos materiales.
        </p>

        <p className="terminos-paragraph">
          <span className="terminos-highlight">6. Responsabilidad del Usuario:</span> 
          Los padres o tutores legales son responsables de supervisar y controlar el uso de Learning Content por parte de los estudiantes menores de edad. 
          La plataforma no se hace responsable de cualquier uso inadecuado de los servicios.
        </p>

        <p className="terminos-paragraph">
          <span className="terminos-highlight">7. Modificaciones en los Términos:</span> 
          Learning Content se reserva el derecho de modificar estos términos y condiciones en cualquier momento. 
          Las modificaciones entrarán en vigencia a partir de su publicación en la plataforma. 
          Se recomienda revisar periódicamente estos términos para estar al tanto de cualquier cambio.
        </p>

        <p className="terminos-paragraph">
          <span className="terminos-highlight">8. Contacto:</span> 
          Para cualquier consulta o inquietud relacionada con estos términos y condiciones, 
          puedes ponerte en contacto con nosotros a través de [correo electrónico de soporte].
        </p>
      </div>

      <p className="terminos-footer">
        Al utilizar Learning Content, estás participando activamente en la construcción de un futuro educativo más sólido 
        para los estudiantes de séptimo grado. ¡Gracias por ser parte de nuestra comunidad educativa!
      </p>
      
      <p className="terminos-signature">
        Atentamente, <br />
        El equipo de Learning Content
      </p>
    </div>
    
     
      <Footer />
    </>
  );
};

export default TerminosPage;
