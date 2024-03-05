import React, { useEffect, useState } from 'react'
import ExperienceItems from './ExperienceItems';
import { expData,expNav } from './Data';

const Experiences = () => {
    const [item, setItem] = useState({ name: "Todos" });
    const [exp, setExp] = useState([]);
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (item.name === "Todos") {
            setExp(expData)
        }
        else {
            const newExp = expData.filter((exp) => { return exp.category.toLowerCase() === item.name.toLowerCase() })
            setExp(newExp)
        }



    }, [item])
    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index)
    }
  return (
    <div>
            <div className='exp-filters'>
                {expNav.map((item, index) => {
                    return <span onClick={(e) => { handleClick(e, index) }} className={ `${active === index ? 'active-exp' : ""} exp-item`} key={index}>{item.name}</span>;
                })}
            </div>
            <div className='exp-container container grid'>
                {exp.map((item) => {
                    return <ExperienceItems item={item} key={item.id} />;
                })}


            </div>



        </div>
  )
}

export default Experiences
