import React from 'react'
import './plan.css'
import whiteTick from '../../assets/whiteTick.png'
import {plansData} from '../../data/plansData'
const Plan = () => {
  return (
    <div className="plan-container" id='plan'>
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{gap:'2rem'}}>
            <spam className='str0ke-text'>READY TO START </spam>
            <spam>YOUR JOURNEY</spam>
            <spam className='stroke-text'> NOW WITHUS</spam>
        </div>
        {/* plans cards */}
           <div className="plans">
              {
              plansData.map((plan,i)=>(

              <div className="plan" key={i}>
                  {plan.icon}
                  <span>{plan.name}</span>
                  <span>${plan.price}</span>
              
                  <div className='features' >
                  {plan.features.map((feature,i)=>(
                      <div className="feature" key={i}>
                        <img src={whiteTick} alt="" />
                        <span key={i}>{feature}</span>
                      </div>
                  ))}
                  </div>

                  <div><span>See more Benefits </span> </div>
                  <button className="btn">Join NowS</button>
             </div>
          ))}
         </div>
    </div>
  )
}

export default Plan
