import React, { useState } from 'react'
import "./services.css"

const Services = () => {

    const [toggleState, setToggleState] = useState(0)

    const ToggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className='services section' id='services'>
            <h2 className='section-title'>Servicios</h2>
            <span className='section-subtitle'>Lo Que Ofrezco</span>

            <div className="services-container container grid">
                <div className="services-content">
                    <div>
                        <i className='bx bx-bulb services-icon'></i>
                        <h3 className="services-title"> Gestión de  <br /> Proyectos</h3>
                    </div>

                    <span className='services-button' onClick={() => ToggleTab(1)}>Ver Más
                        <i className='uil uil-arrow-right services-button-icon'></i></span>

                    <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i onClick={() => ToggleTab(0)} className="uil uil-times services-modal-close"></i>

                            <h3 className='services-modal-title'>Gestión de Proyectos</h3>

                            <p className='services-modal-description'>“Espacio de escucha y gestión de emociones”
                            </p>

                            <ul className='services-modal-services grid'>
                                <li className="services-modal-service">
                                    <i className='uil uil-check-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>Durante la pandemia COVID-19, estuve desarrollando diferentes talleres psicoeducativos para manejar la ansiedad y la depresión producidos por la condición de encierro a jóvenes de 18 a 30 años de una institución educativa religiosa y también disponible para la comunidad.  </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className='uil uil-check-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>Se evaluó la necesidad de gestionar un espacio de escucha y gestión de emociones dentro de la institución para acompañar a los jóvenes en estos desafíos. Este espacio estuvo abierto y disponible de manera virtual y presencial durante todo el año lectivo 2022 hasta la actualidad, los días martes de 14 a 20hs.  </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className='uil uil-check-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>Control de Stock.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className='uil uil-check-circle services-modal-icon'></i>
                                    <p className='services-modal-info'> Manejo de fondos y valores.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className='uil uil-check-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>Proveedores.</p>
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>

                <div className="services-content">
                    <div>
                        <i className='bx bx-brain services-icon' ></i>
                        <h3 className="services-title"> Psicotécnicos</h3>
                    </div>

                    <span className='services-button' onClick={() => ToggleTab(2)}>Ver Más
                        <i className='uil uil-arrow-right services-button-icon'></i></span>

                    <div className={toggleState === 2 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i onClick={() => ToggleTab(0)} className="uil uil-times services-modal-close"></i>

                            <h3 className='services-modal-title'>Evaluacion Psicotécnica</h3>

                            <p className='services-modal-description'>Julio-noviembre 2021</p>

                            <ul className='services-modal-services grid'>
                                <li className="services-modal-service">
                                    <i className='uil uil-check-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>Charlas psicoeducativas desde la promoción y prevención de la salud mental. Grupo extendido de más de 100 personas, mayores de 18 años, local e internacional con modalidad virtual.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className='uil uil-check-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>Talleres psicoeducativos con modalidad virtual. Grupo reducido de 20 personas, mayores de 18 años. Desarrollo de la resiliencia emocional.</p>
                                </li>



                            </ul>

                        </div>
                    </div>

                </div>

                <div className="services-content">
                    <div>
                        <i className='bx bx-book-heart services-icon' ></i>
                        <h3 className="services-title">Orientación  <br /> Vocacional</h3>
                    </div>

                    <span className='services-button' onClick={() => ToggleTab(3)}>Ver Más
                        <i className='uil uil-arrow-right services-button-icon'></i></span>

                    <div className={toggleState === 3 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i onClick={() => ToggleTab(0)} className="uil uil-times services-modal-close"></i>

                            <h3 className='services-modal-title'>Orientación Vocacional</h3>

                            <p className='services-modal-description'> Marzo- noviembre 2023</p>

                            <ul className='services-modal-services grid'>
                                <li className="services-modal-service">
                                    <i className='uil uil-check-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>Talleres de orientación vocacional, procesos completos de 6 sesiones en espacio comunitario. Espacio de escucha y gestión de emociones, capacitaciones y orientación en general en una institución educativa.</p>
                                </li>


                            </ul>

                        </div>
                    </div>

                </div>

                <div className="services-content">
                    <div>
                        <i className='uil uil-edit services-icon'></i>
                        <h3 className="services-title">Capacitaciones y<br />Talleres</h3>
                    </div>

                    <span className='services-button' onClick={() => ToggleTab(4)}>Ver Más
                        <i className='uil uil-arrow-right services-button-icon'></i></span>

                    <div className={toggleState === 4 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i onClick={() => ToggleTab(0)} className="uil uil-times services-modal-close"></i>

                            <h3 className='services-modal-title'>Capacitaciones y Talleres</h3>

                            <p className='services-modal-description'>Julio- noviembre 2022: </p>

                            <ul className='services-modal-services grid'>
                                <li className="services-modal-service">
                                    <i className='uil uil-check-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>Capacitaciones, talleres y charlas sobre gestión de emociones, abordaje en la urgencia, cuidar al que cuida. Grupo de adultos, modalidad presencial.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className='uil uil-check-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>Capacitación y talleres a líderes de grupos juveniles de 18 a 30 años. Modalidad virtual y presencial. Abordaje en la salud mental.</p>
                                </li>



                            </ul>

                        </div>
                    </div>

                </div>
            </div>


        </section>
    )
}

export default Services
