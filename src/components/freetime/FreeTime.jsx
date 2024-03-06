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
                    <img src={caballito} alt="" className='free-img' />


                </div>

                <div className="free-card">
                    <h3 className='free-title'> </h3>
                    <img src={estatuas} alt="" className='free-img' />


                </div>

                <div className="free-card">
                    <h3 className='free-title'></h3>
                    <img src={pueblito} alt="" className='free-img' />


                </div>

                <div className="free-card"  >
                    <h3 className='free-title'></h3>
                    <img src={templo} alt="" className='free-img' />


                </div>

                <div className="free-card"  >
                    <h3 className='free-title'></h3>
                    <img src={barquito} alt="" className='free-img' />


                </div>

                <div className="free-card"  >
                    <h3 className='free-title'></h3>
                    <img src={vina} alt="" className='free-img' />


                </div>


            </div>




        </section>
    )
}

export default FreeTime