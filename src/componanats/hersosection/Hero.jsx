import React from 'react'
import './hero.css'
import Header from '../header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from  'framer-motion'
import NumberCounter from 'number-counter'
const Hero = () => {
  const mobile = window.innerWidth<=768?true:false;
  const transition={type:'spring',duration:3}
  return (
    <div className='hero'>
      <div className="blur blur-hero"></div>
      <div className="left-h"> 
              <Header/>

              {/* the best add */}
                    <div className="the-best-ad">  
                    <motion.div
                    initial={{left:mobile?"165px":"238px"}}
                    whileInView={{left:'8px'}}
                    transition={{...transition,type:'tween'}}
                    
                    ></motion.div>
                    <span>The best fitness club in the town</span>
                    </div>

              {/* hero heading */}

                <div className="hero-text">

                     {/* first */}
                        <div>
                          <span className='stroke-text span-mar'>Shape</span>
                          <span>Your</span>
                        </div>

                     {/* 2nd */}
                        <div>
                         <span> Ideal Body</span>
                        </div>


                     {/* 3rd */}
                          <div>
                           <span>In here we will help you to shape and build your ideal bod y and live up your life to fullest</span>
                          </div>
              
              </div>
            {/* fig */}

            <div className='figures'>
              <div>
                  <span>
                    <NumberCounter end={140} start={100} delay='4' preFix="+"/>
                  </span>
                  <span>expert coachs</span>
                </div>
              <div>
                  <span>
                  <NumberCounter end={978} start={800} delay='4' preFix="+"/>
                  </span>
                  <span>members joined</span>
                </div>
              <div>
                    <span>
                    <NumberCounter end={50} start={0} delay='4' preFix="+"/>
                    </span>
                    <span>fitness programs</span>
                </div>
            </div>

            {/*button  */}
               
               <div className="hero-btn">
                <div className="btn"> Get Started</div>
                <div className="btn">Learn More</div>
               </div>


      </div>

{/* right sitde */}
      <div className="right-h">
           <div className="btn">Join Now</div>

            <motion.div 
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpn</span>
                </motion.div>

    {/* hero imge */}
         <img src={hero_image} alt="" className="hero-image" />
         <motion.img 
         initial={{right:'11rem'}}
         whileInView={{right:'20rem'}}
         transition={transition}
         src={hero_image_back} alt="" className="hero-image-back" />


         {/*calories  */}
         <motion.div 
         initial={{right:'37rem'}}
         whileInView={{right:'28rem'}}
         transition={transition}
         className="calories">
          <img src={Calories} alt="" /> 
         <div><span>Calories Burned</span><span>220 Kcal</span></div>  
         </motion.div>
      </div>
    </div>
  )
}

export default Hero
