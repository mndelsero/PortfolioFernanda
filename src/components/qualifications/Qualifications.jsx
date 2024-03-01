import React, { useState } from 'react'
import "./qualifications.css"

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(0)

  const ToggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className='qualification section'>
      <h2 className='section-title'>Qualification</h2>
      <span className='section-subtitle'>My Personel Journey</span>

      <div className="quialification-container container">
        <div className="qualification-tabs">
          <div className={toggleState === 1 ? 'qualification-button button-flex qualification-active' : 'qualification-button button-flex'} onClick={()=>ToggleTab(1)}>
            <i className='uil uil-graduation-cap qualification-icon'></i>Education
          </div>

          <div className={toggleState === 2 ? 'qualification-button button-flex qualification-active' : 'qualification-button button-flex'} onClick={()=>ToggleTab(2)}>
            <i className='uil uil-briefcase-alt qualification-icon'></i> Experience
          </div>
        </div>
        <div className="qualification-sections">
          <div className={toggleState === 1 ? "qualification-content qualification-content-active" : "qualification-content "}>
            <div className="qualification-data">
              <div className='qualification-text'>
                <h3 className='qualification-title'>Web Development</h3>
                <span className='qualification-subtitle'> Argentina - CoderHouse</span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i>2023 - Present


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
                <h3 className='qualification-title'> Electro Mechanic Engineering</h3>
                <span className='qualification-subtitle'> Argentina - UADE</span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i>2023 - Present


                </div>
              </div>


            </div>

            <div className="qualification-data">



              <div className='qualification-text'>
                <h3 className='qualification-title'>Javascript</h3>
                <span className='qualification-subtitle'> Argentina - Coderhouse</span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i>2023 - Present


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
                <h3 className='qualification-title'>Web Design</h3>
                <span className='qualification-subtitle'> Argentina - CoderHouse</span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i>2023 - Present


                </div>
              </div>




            </div>

            <div className="qualification-data">


              <div className='qualification-text'>
                <h3 className='qualification-title'>React.JS</h3>
                <span className='qualification-subtitle'> Argentina - Coderhouse</span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i>2023 - Present


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
                <h3 className='qualification-title'>Admin Secretay</h3>
                <span className='qualification-subtitle'> Argentina - Proffesional Psychologist</span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i>2023 - Present


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
                <h3 className='qualification-title'>Freelance Developer</h3>
                <span className='qualification-subtitle'> Chile - Ecommerce</span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i>2023 - Present


                </div>
              </div>


            </div>

            <div className="qualification-data">
              <div className='qualification-text'>
                <h3 className='qualification-title'>UX Designer</h3>
                <span className='qualification-subtitle'> Argentina - Personal Project</span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i>2023 - Present


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
                <h3 className='qualification-title'>Web Designer</h3>
                <span className='qualification-subtitle'> Argentina - Figma</span>
                <div className='qualification-calender'>
                  <i className='uil uil-calendar-alt'></i>2023 - Present


                </div>
              </div>


            </div>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Qualifications
