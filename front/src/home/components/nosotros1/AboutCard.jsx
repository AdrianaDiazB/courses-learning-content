import React from 'react'
import imagen from './img/Imagenes'

const AboutCard = () => {
    return (
        <>
            <section className='aboutHome'>
                <div className="container">
                    <div className="separator"></div>
                    <h1 className="centered-title">Nosotros</h1>
                    <div className="separator"></div>
                    
                    <div className="content">
                        <div className="left-paragraph">
                            <p>
                            Nos dedicamos a brindar conocimiento sin categorización para niños que necesitan fortaleces y ampliar sus conocimientos de séptimo grado, para poder avanzar de forma más segura a la siguiente etapa educativa como es el colegio
                            </p>
                            
                        </div>
                        <div className="vertical-line"></div> {/* Divisor vertical */}
                        <div className="right-image animated-image">
                        <img className="imagen-pequena" src={imagen.gestion} alt="Descripción de la imagen" />
                        </div>
                    </div>
                    <div className="content">
                        <div className=" left-image animated-image">
                            <img className="imagen-pequena" src={imagen.estrategico} alt="Descripción de la imagen" />
                        </div>
                        <div className="vertical-line"></div> {/* Divisor vertical */}
                        <div className="right-paragraph">
                            <p>
                            Es por ello que ofrecemos material educativo de materias importantes para el desarrollo continuo educativo, para nosotros es importante que los niños que pasan al siguiente curso educativo sepan a qué posibles materias y temas se enfrentan y así puedan ir preparados de una mejor manera
                            </p>
                        </div>
                    </div>
                    <br/><br/><br/>
                    <div className="separator"></div>
                        <h1 className="centered-title">Nuestra Filosofía</h1>
                    <div className="separator"></div>
                    <div className="containerMV">
                        <section className="container_MisionV">
                            <img className="imagen-pequena1" src={imagen.mision} alt="" />
                            <h3>Misión</h3>
                            <p>Facilitar el acceso a recursos académicos especializados para los estudiantes de séptimo año de educación básica, con el objetivo de reducir los vacíos de conocimiento y prepararlos de manera integral para su transición a niveles educativos superiores.</p>
                        </section>
                        <section className="container_MisionV">
                            <img className="imagen-pequena1" src={imagen.vision} alt="" />
                            <h3>Visión</h3>
                            <p>Convertirnos en un referente en la implementación de sistemas de recursos académicos, siendo reconocidos por nuestro impacto positivo en la formación de estudiantes de séptimo año.</p>
                        </section>
                    </div> 
                </div>
            </section>
        </>
    )
}

export default AboutCard
