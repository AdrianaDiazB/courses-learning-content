import React from 'react'
import imagen from './img/Imagenes'

const AboutCard = () => {
    return (
        <>
            <section className='aboutHome'>
                <div className="container">
                    <div className="separator"></div>
                    <h1 className="centered-title">La Institución</h1>
                    <div className="separator"></div>
                    <h2 className="centered-title1">PROWESS EC</h2>
                    <div className="content">
                        <div className="left-paragraph">
                            <p>
                                Departamento de Ciencias Económicas, Administrativas y de Comercio – DCEA es responsable de la gestión de la docencia, investigación y vinculación en las siguientes áreas del conocimiento: Economía, Mercadotecnia y Publicidad, Finanzas, Dirección/Gestión, Administración, Hotelería, Turismo, Contabilidad, Auditoría y Comercio Exterior.
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
                                Es por consiguiente, la unidad organizacional clave para el cumplimiento de la misión de la ESPE y el logro de los objetivos del plan estratégico institucional. Dentro del portafolio del Departamento de Ciencias Económicas, Administrativas y del Comercio se encuentran las Carreras de Licenciatura en Administración de Empresas, Ingeniería Comercial, Licenciatura en Contabilidad y Auditoría, Licenciatura en Mercadotecnia y Publicidad, Licenciatura en Comercio Exterior y Licenciatura en Turismo.
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
                            <p>Es por consiguiente, la unidad organizacional clave para el cumplimiento de la misión de la ESPE y el logro de los objetivos del plan estratégico institucional. Dentro del portafolio del Departamento de Ciencias Económicas, Administrativas y del Comercio se encuentran las Carreras de Licenciatura en Administración de Empresas, Ingeniería Comercial, Licenciatura en Contabilidad y Auditoría, Licenciatura en Mercadotecnia y Publicidad, Licenciatura en Comercio Exterior y Licenciatura en Turismo.</p>
                        </section>
                        <section className="container_MisionV">
                            <img className="imagen-pequena1" src={imagen.vision} alt="" />
                            <h3>Visión</h3>
                            <p>Al 2024 potenciar el alcance de los emprendimientos desarrollados dentro del proyecto, brindándoles soporte mediante conocimientos dictados en los cursos de capacitación por los estudiantes por la Universidad de las Fuerzas Armadas ESPE de la mano de las herramientas tecnológicas.</p>
                        </section>
                    </div> 
                </div>
            </section>
        </>
    )
}

export default AboutCard
