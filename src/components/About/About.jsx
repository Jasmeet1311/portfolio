import React from 'react'
import "./About.scss";
import {motion} from "framer-motion";
const variants ={
  initial:{
      y:80,
      opacity:0
  },
  animate:{
      y:0,
      opacity:1,
      transition:{
          duration: 0.5,
          staggerChildren: 0.1
      }
  }
}
const About = () => {
  return (
    <div className='about'>
      <motion.div className="About-me"  variants={variants} initial="initial" whileInView="animate">
        <motion.h3  variants={variants} initial="initial" whileInView="animate"><span>About</span> Me</motion.h3>
        <motion.p  variants={variants} initial="initial" whileInView="animate">Hey there... I am a Computer Science Student who loves to explore the endless possibilities of programming. Whether it's about building a website, a game or a simple software, I'm always up for a challenge. I'm constantly learning and improving my skills, and I'm exicted to see where my coding journey will take me.</motion.p>
        <motion.a  variants={variants} initial="initial" whileInView="animate" href="Resume.pdf">Resume</motion.a>
      </motion.div>
      <div className="Skills">
        <motion.h3  variants={variants} initial="initial" whileInView="animate">Skills</motion.h3>
        <motion.div  variants={variants} initial="initial" whileInView="animate" className="img-container">

        <img className='item' src="html.png" alt="img" />
        <img className='item' src="css-3.png" alt="img" />
        <img className='item' src="javascript.png" alt="img" />
        <img className='item' src="git.png" alt="img" />
        <img className='item' src="github.png" alt="img" />
        <img className='item' src="python.png" alt="img" />
        <img className='item' src="bootstrap-logo.png" alt="img" />
        <img className='item' src="c-programming.png" alt="img" />
        <img className='item' src="c++.png" alt="img" />
        <img className='item' src="react.png" alt="img" />
        </motion.div>

      </div>
    </div>
  )
}

export default About
