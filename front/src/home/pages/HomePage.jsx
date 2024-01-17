import React from "react";
import images from "./images/images";
import { Slider } from "../components/slider/Slider";
import { Servicios } from "../components/inicio/Servicios";
import "./style.css";
import Footer from "../components/footer/Footer";
import Linea from "../components/inicio/Linea";
import CursoGeneral from "../components/inicio/CursoGeneral";
import CardInfo from "../components/inicio/CardInfo";

export const HomePage = () => {
  return (
    <>
      <Slider />
      <section className="container-fluid servicios">
        <Servicios />
      </section>
      <div className="container">
        <h1 className="text-center mt-5 title-curso text-black">
          MODULOS EDUCATIVOS
        </h1>
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

      <div class="container mb-5">
        <Linea />
        <div class="row  card2 p-3  ">
          <img src={images.img1} alt="" />
        </div>
      </div>

      <div class="container">
        <div>
          <Linea />
          
          <p className="text-center mt-5 title-curso   text-black">
            ¿ESTAS LISTO?
          </p>
          
          </div>
        </div>
      
      <Footer />
    </>
  );
};
