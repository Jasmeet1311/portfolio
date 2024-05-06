import React, { useRef } from 'react'
import "./Portfolio.scss";
import {motion,useScroll,useSpring, useTransform} from "framer-motion";
const items =[
    {
        id:1,
        name:"NewsBuzz - NewsApp",
        img:"/NewsApp.png",
        desc: "NewsBuzz, your go-to platform for staying updated with latest news from around the world!! This website is powered by robust NewsAPI and is crafted with React.NewsAPI stands as the backbone of our website providing us access to a vast array of reliable news.",
        link:"https://github.com/Jasmeet1311/NewsBuzz.git"
    },
    {
        id:2,
        name:"TextAudit",
        img:"/TextAudit.png",
        desc: "TextAudit is a versatile text analysis platform designed to enhance your interaction with written content. Its key features are Character and word count,Text to Speech Conversion,Case conversion,estimating reading time and much more.",
        link:"https://github.com/Jasmeet1311/TextAudit.git"
    },
    {
        id:3,
        name:"Bank Management System",
        img:"/Bank.jpg",
        desc: "The Bank Management System is a simple application made using Python and MySQL. The system provides the access to the customer to create an account,deposit/ withdraw the cash from account,view his/her details,etc.",
        link:"https://github.com/Jasmeet1311/Bank-Management-System.git"
    },
    {
        id:4,
        name:"Restaurant Website",
        img:"/Restaurant-website.png",
        desc: "It involves creating a interface that showcase restaurant's menu, location,contact and other relevant information.It has a user friendly interface that showcase restaurant's products and services.",
        link:"https://github.com/Jasmeet1311/Restaurant-Website.git"
    },
    {
        id:5,
        name:"Snake Game",
        img:"/Snake.jpg",
        desc: "Python-based Snake game project featuring simple mechanics, graphical interface, and user-controlled snake movement for nostalgic gaming experience. Enjoy classic fun!.",
        link:"https://github.com/Jasmeet1311/Snakes-By-Jasmeet.git"
    }
]
const Single =({item})=>{
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,  
        // offset:["start start","end start"]  
    })
    const y = useTransform(scrollYProgress,[0,1],[-300,300])
    return(
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="img-container" ref={ref}>
                        <img src={item.img} alt="img" />
                    </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2 >{item.name}</h2>
                    <p>{item.desc}</p>
                    <a href={item.link}>See Repository</a>
                </motion.div>

                </div>

            </div>
            </section>
    )
}
const Portfolio = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target:ref,
        offset:["end end","start start"]
    })
const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30
})
  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div className="progressBar" style={{scaleX:scaleX}}></motion.div>
        </div>
      {items.map((item)=>(
        <Single item={item} key={item.id}>
        </Single>
      ))}
    </div>
  )
}

export default Portfolio
