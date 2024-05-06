import React from "react";
import "./Hero.scss";
import {motion} from "framer-motion";
const textVariants ={
    initial:{
        x:-500,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}
const SliderVariants ={
    initial:{
        x:0
    },
    animate:{
        x:"-90%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        }
    }
}
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="text-container"
         variants={textVariants}
          initial="initial"
          animate="animate">
          <motion.h2 variants={textVariants}>JASMEET KAUR</motion.h2>
          <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
          <div className="buttons">
            <motion.a href="#Projects" variants={textVariants}>See the lastest Work</motion.a>
            <motion.a href="#Contact" variants={textVariants} className="btn">Contact</motion.a>
          </div>
        </motion.div>   
      </div>
      <div className="img-container">
        <motion.img variants={textVariants} initial="initial"
          animate="animate" src="Hero.jpg" alt="img" />
      </div>
      <motion.div className="sliding-text-container" variants={SliderVariants} initial="initial" animate="animate">Web Development Frontend Development</motion.div>
    </div>
  );
};

export default Hero;
