import React from 'react'
import {motion} from "framer-motion";
const ToggleButton = ({setOpen,open}) => {
  return (
    <button onClick={()=>{setOpen((prev)=>!prev)}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="23" height="23">
      <motion.line 
        x1="1" y1="6" x2="22" y2="6" 
        stroke="black" strokeWidth="2"
        animate={open ? { x1:1, y1:1 ,x2:23, y2:23} : {}} 
      />
      <motion.line 
        x1="1" y1="12" x2="22" y2="12" 
        stroke="black" strokeWidth="2" 
        animate={open ? { opacity: 0 } : {opacity:1}} 
      />
      <motion.line 
        x1="1" y1="18" x2="22" y2="18" 
        stroke="black" strokeWidth="2" 
        animate={open ? { x1:1, y1:23, x2:23,y2:1 } : {}} 
      />
    </svg>
    </button>
  )
}

export default ToggleButton
