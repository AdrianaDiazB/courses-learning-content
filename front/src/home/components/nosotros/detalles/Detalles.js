import React from "react";
export const Detalles = () => {
  return (
    <div className="container">
      <h2>Nuestra Filosofía</h2>
      <br></br>
      <h2>Misión</h2>
      <p>
      Facilitar el acceso a recursos académicos especializados para 
      los estudiantes de séptimo año de educación básica, 
      con el objetivo de reducir los vacíos de conocimiento y prepararlos 
      de manera integral para su transición a niveles educativos superiores.
      </p>

      <h2>Visión </h2>
      <p>
      Convertirnos en un referente en la implementación de sistemas de recursos 
      académicos, siendo reconocidos por nuestro impacto positivo en la formación 
      de estudiantes de séptimo año. 
      </p>

      <div className="img-container d-flex justify-content-center align-items-center">
        <img className="image img-fluid" src="https://res.cloudinary.com/dena7lqj3/image/upload/v1673044536/modulomocc/nosotros/aq_g7jxag.png" alt="" />
      </div>
    </div>
  );
};
