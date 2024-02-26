import React, { useEffect, useState, useCallback } from "react";
import ListCurso from "../components/curso/ListCurso";
import "./style.css";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";
import { getCourses } from "../../services/backend-api";
import Loading from "../components/loader/Loading";
import CursoGeneral from "../components/inicio/CursoGeneral";
import Linea from "../components/inicio/Linea";

const CursosPage = () => {
  const { tipos } = useParams();
  const [titulo, settitulo] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const _getCourses = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getCourses();
      response.shift();
      setCourses(response);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    settitulo(tipos === "general" ? "EDUCATIVOS" : "EDUCATIVOS");
    _getCourses();
  }, [tipos, _getCourses]);

  if (loading) return <Loading />;

  if (error) return <h1>Error</h1>;

  return (
    <>
      <div className="container-md container-cursos mb-5">
        <h1 className="text-center mt-5 title-curso">MODULOS {titulo}</h1>
        <p className="text-center mb-5 descripcion-curso">
          Modulos completamente gratuitos en modalidad virtual para estudiantes
        </p>
        <ListCurso tipos={tipos} courses={courses} />
        <div className="container">
        <Linea />
        <div class="row gx-0 d-flex justify-content-center gx-3 mb-5 text-black">
          <CursoGeneral
            title={"MATEMÁTICAS"}
            img={
              "https://res.cloudinary.com/dzcke9fzx/image/upload/v1702517752/ANALISIS/mate_cw0nfp.jpg"
            }
           
            
          />

          <CursoGeneral
            title={"CIENCIAS NATURALES"}
            img={
              "https://res.cloudinary.com/dzcke9fzx/image/upload/v1702516908/ANALISIS/quimica_hlh8yj.jpg"
            }
            
          />

          <CursoGeneral
            title={"LENGUA Y LITERATURA"}
            img={
              "https://res.cloudinary.com/dzcke9fzx/image/upload/v1702516906/ANALISIS/lenjuaje_c0avqq.jpg"
            }
           
          />

          <CursoGeneral
            title={"ESTUDIOS SOCIALES"}
            img={
              "https://res.cloudinary.com/dzcke9fzx/image/upload/v1702516904/ANALISIS/sociales_ltmzwp.jpg"
            }
            
          />
        </div>
      </div>
      </div>
      <Footer />
    </>
  );


};

export default CursosPage;
