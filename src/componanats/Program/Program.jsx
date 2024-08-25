import React from 'react'
import './program.css'  
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Program = () => {
  return (

      <div className="programs" id='programs'>
      {/* headeer */}
      <div className="programs-header">
        <span className='stroke-text'>Explore our </span>
        <span>Program</span>
        <span className='stroke-text'>to shape you</span>
      </div>


{/* categories */}
      <div className="program-cat">
        {
            programsData.map((program,i)=>(
               <div className="cate" key={i}>
                       {program.image}
                        <spam>{program.heading}</spam><spam>{program.details}</spam>
                        <div className="join-now">
                         <span>Join Now</span>  <img src={RightArrow} alt="" /> 
                        </div>
               </div>
            ))
        }
      </div>
      </div>
     
  )
}

export default Program
