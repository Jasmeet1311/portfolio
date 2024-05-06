import React, { useRef } from 'react'
import "./Parallax.scss";
import {motion,useScroll,useTransform} from "framer-motion";
const Parallax = () => {
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref,
    offset: ["start start", "end start"]
   });
  const yText =useTransform(scrollYProgress, [0,1], ["-100%","200%"]);
  const yBg =useTransform(scrollYProgress, [0,1], ["-70%","250%"]);
  return (
    <motion.div  className='parallax' >
      <motion.h2 style={{ y:yText }} >PROJECTS</motion.h2>
      <motion.div className="mountains">
      </motion.div>
      <motion.div style={{ x:yBg }} className="planets"></motion.div>
      <motion.div style={{ x:yBg }} className="stars"></motion.div>
    </motion.div>
  )
}

export default Parallax
