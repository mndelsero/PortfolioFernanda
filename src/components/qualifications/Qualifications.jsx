import React, { useState } from 'react'
import "./qualifications.css"

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(0)

  const ToggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className='qualification section' >
      <h2 className='section-title'>Mis Aptitudes</h2>
      <span className='section-subtitle'>Mi Carrera</span>

      <div className="quialification-container container">
        <div className="qualification-tabs">
          <div className={toggleState === 1 ? 'qualification-button button-flex qualification-active' : 'qualification-button button-flex'} onClick={() => ToggleTab(1)}>
            <i className='uil uil-graduation-cap qualification-icon'></i>Educación
          </div>

          <div className={toggleState === 2 ? 'qualification-button button-flex qualification-active' : 'qualification-button button-flex'} onClick={() => ToggleTab(2)}>
            <i className='uil uil-briefcase-alt qualification-icon'></i> Experiencia
          </div>
        </div>
        <div className="qualification-sections">
          <div className={toggleState === 1 ? "qualification-content qualification-content-active" : "qualification-content "}>
            <div className="qualification-data">
              <div className='qualification-text'>
                <h3 className='qualification-title'>Secundario Completo. </h3>
                <span className='qualification-subtitle'>Perito Mercantil con Administración Contable.
                  Esc. José M. Estrada, San Martín, Mendoza. </span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i>  Año 1997.


                </div>
              </div>
              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>


            </div>

            <div className="qualification-data">
              <div className='qualification-space'></div>
              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>

              <div className='qualification-text'>
                <h3 className='qualification-title'>Tecnicatura en Administración de Empresas.</h3>
                <span className='qualification-subtitle'>  Instituto Las Américas, Mendoza. </span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i> Año 2000.


                </div>
              </div>


            </div>

            <div className="qualification-data">



              <div className='qualification-text'>
                <h3 className='qualification-title'>Licenciatura en Psicología.</h3>
                <span className='qualification-subtitle'>  Universidad Católica Argentina. </span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i>Año 2021.


                </div>
              </div>

              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>



            </div>

            <div className="qualification-data">
              <div className='qualification-space'></div>
              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>


              <div className='qualification-text'>
                <h3 className='qualification-title'>English Connect 1 y 2.</h3>
                <span className='qualification-subtitle'> BYU online. </span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i>Año 2021-2023.


                </div>
              </div>




            </div>

            <div className="qualification-data">


              <div className='qualification-text'>
                <h3 className='qualification-title'>Posgrado en Análisis Existencial.</h3>
                <span className='qualification-subtitle'>  Universidad Católica Argentina. </span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i>Año 2023.


                </div>
              </div>
              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>
              <div className='qualification-space'></div>



            </div>

          </div>

          <div className={toggleState === 2 ? "qualification-content qualification-content-active" : "qualification-content "}>
            <div className="qualification-data">
              <div className='qualification-text'>
                <h3 className='qualification-title'>TARJETA NEVADA S.A.</h3>
                <span className='qualification-subtitle'>  Administración y venta de Servicios Intangibles.</span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i> Año 1998-2002.


                </div>
              </div>
              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>

            </div>

            <div className="qualification-data">
              <div className='qualification-space'></div>
              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>

              <div className='qualification-text'>
                <h3 className='qualification-title'> Encargada Administrativa.</h3>
                <span className='qualification-subtitle'> DISTROCARD TARJETAS TELEFÓNICAS.</span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i> Año 2003-2009.


                </div>
              </div>


            </div>

            <div className="qualification-data">
              <div className='qualification-text'>
                <h3 className='qualification-title'> YACOPINI S. A. </h3>
                <span className='qualification-subtitle'> Imputaciones contables en sistema SIAC.</span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i> Año 2010.


                </div>
              </div>
              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>

            </div>

            <div className="qualification-data">
              <div className='qualification-space'></div>
              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>

              <div className='qualification-text'>
                <h3 className='qualification-title'> Asistente de Gerencia.</h3>
                <span className='qualification-subtitle'> JOHN DEERE WATER S. A.</span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i> Año 2011-2013.


                </div>
              </div>


            </div>
            <div className="qualification-data">
              <div className='qualification-text'>
                <h3 className='qualification-title'> SERVICIOS PARA LA FAMILIA SUD </h3>
                <span className='qualification-subtitle'>  Misionera de servicio en la iglesia de Jesucristo de los santos de los últimos días.
                </span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i>  Año 2020-2022.


                </div>
              </div>
              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>

            </div>

            <div className="qualification-data">
              <div className='qualification-space'></div>
              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>

              <div className='qualification-text'>
                <h3 className='qualification-title'> SEMINARIOS E INSTITUTO SUD</h3>
                <span className='qualification-subtitle'>Capacitación y talleres sobre salud mental a docentes, jóvenes y líderes.</span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i> Año 2022-Actualidad.


                </div>
              </div>


            </div>

            <div className="qualification-data">
              <div className='qualification-text'>
                <h3 className='qualification-title'> SERVICIOS PARA LA FAMILIA SUD </h3>
                <span className='qualification-subtitle'> Consultoría Clínica.
                </span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i>   Año 2021-Actualidad.


                </div>
              </div>
              <div>
                <span className='qualification-rounder'></span>
                <span className='qualification-line'></span>
              </div>

            </div>


          </div>
        </div>

      </div>

    </section>
  )
}

export default Qualifications
