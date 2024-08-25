import React, { useState } from 'react'
import './testi.css'
import {testimonialsData} from "../../data/testimonialsData"
import leftArrow from "../../assets/leftArrow.png"
import RightArrow from "../../assets/rightArrow.png"
import{motion} from 'framer-motion'

const Testi = () => {
    const transition ={type:'spring',duration:3}
    const [selected, setSelected]= useState(0);
const  tlen=testimonialsData.length;
  return (
    <div className='testi'>
      <div className="left-t">
        <span>Testimonials</span>
        <span className='stroke-text'>What they </span>
        <span>say about us</span>
        
        <motion.span 
        key={selected}
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:100}}
        transition={transition}
        >{testimonialsData[selected].review}</motion.span>

           <span>
            <span style={{color:'var(--orange)'}} >{testimonialsData[selected].name}</span>{" "}
             - {testimonialsData[selected].status}
            </span>       
      </div>

        <div className="right-t">
            <motion.div
            initial={{opacity:0,x:-100}}
            transition={{...transition,duration:2}}
            whileInView={{opacity:1,x:0}} 
            ></motion.div>
            <motion.div
            initial={{opacity:0,x:100}}
            transition={{...transition,duration:2}}
            whileInView={{opacity:1,x:0}} ></motion.div>
        <motion.img 
        initial={{opacity:0,x:100}}
        key={selected}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        transition={transition}
        src={testimonialsData[selected].image} alt="" />

        <div className="arrows">
            <img src={leftArrow} 
            onClick={()=>{
            selected===0
            ?setSelected(tlen-1)
            :setSelected((prev)=>prev-1)}} 
            alt="" />
            
            <img src={RightArrow} 
             onClick={()=>{
                selected===tlen-1
                ?setSelected(0)
                :setSelected((prev)=>prev+1)}} 
            alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default Testi
