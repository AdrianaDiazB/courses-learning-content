import React from "react";
import { useEffect, useState, useCallback } from "react";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";
import { getCourses } from "../../services/backend-api";
import Loading from "../components/loader/Loading";

const TerminosPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const terminosYCondiciones = `
    Somos una plataforma educativa en línea diseñada especialmente para estudiantes de séptimo nivel de educación básica. Nuestro objetivo es proporcionarte herramientas interactivas y recursos variados para mejorar tu aprendizaje en todas las materias del plan de estudios.

    Al utilizar nuestros servicios, aceptas cumplir con los siguientes términos y condiciones:

    1. **Uso Responsable:** Debes utilizar nuestros recursos educativos de manera responsable y respetuosa.

    2. **Acceso y Cuenta:** Para acceder a ciertas funciones, es posible que necesites crear una cuenta. Asegúrate de mantener la confidencialidad de tu información de inicio de sesión.

    3. **Contenido:** El contenido proporcionado en nuestra plataforma es con fines educativos. No está permitido utilizarlo de manera inapropiada o ilegal.

    4. **Colaboración:** Fomentamos la colaboración entre estudiantes, pero cualquier forma de plagio o copia no ética está estrictamente prohibida.

    Estos términos pueden actualizarse periódicamente. Al continuar utilizando nuestros servicios, aceptas estar sujeto a las modificaciones.

    ¡Bienvenido a nuestra comunidad educativa en línea!
  `;

  return (
    <>
      <div className="container-md container-cursos mb-5">
        <h1 className="text-center mt-5 title-curso">Términos y Condiciones</h1>
        <div className="text-center mb-5 descripcion-curso">
          {terminosYCondiciones.split('\n').map((paragraph, index) => (
            <p key={index} className="paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TerminosPage;
