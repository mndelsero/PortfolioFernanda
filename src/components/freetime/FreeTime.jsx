import React from 'react'
import "./freetime.css"
import caballito from "/src/assets/caballo.jpeg"
import estatuas from "/src/assets/estatuas.jpeg"
import pueblito from "/src/assets/pueblito.jpeg"
import templo from "/src/assets/templo.jpeg"
import barquito from "/src/assets/barquito.jpeg"
import vina from "/src/assets/vina.jpeg"
const FreeTime = () => {
    return (
        <section className='free section' id='free'>
            <h2 className="section-title">Tiempo Libre</h2>
            <span className='section-subtitle'>Arteterapia</span>
            <div className="freetime-projects grid ">
                <div className="free-card">
                    <h3 className='free-title'></h3>
                    <img src={caballito} alt="imagen-arte" className='free-img' />


                </div>

                <div className="free-card">
                    <h3 className='free-title'> </h3>
                    <img src={estatuas} alt="imagen-arte" className='free-img' />


                </div>

                <div className="free-card">
                    <h3 className='free-title'></h3>
                    <img src={pueblito} alt="imagen-arte" className='free-img' />


                </div>

                <div className="free-card"  >
                    <h3 className='free-title'></h3>
                    <img src={templo} alt="imagen-arte" className='free-img' />


                </div>

                <div className="free-card"  >
                    <h3 className='free-title'></h3>
                    <img src={barquito} alt="imagen-arte" className='free-img' />


                </div>

                <div className="free-card"  >
                    <h3 className='free-title'></h3>
                    <img src={vina} alt="imagen-arte" className='free-img' />


                </div>


            </div>




        </section>
    )
}

export default FreeTime