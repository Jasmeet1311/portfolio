import React from 'react'
import {motion} from "framer-motion";
const variant = {
  open:{
    transition:{
      staggerChildren:0.1,
    },
  },
  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection:-1
    }
  }
}
const ItemVariant = {
  open:{
    y:0,
    opacity:1
  },
  closed:{
    y:50,
    opacity:0
  }
  
}
const Link = () => {
  const links =["Homepage","About","Projects","Contact"]
  return (
    <motion.div className="links" variants={variant}>
      {
        links.map(items=>(
          <motion.a href={`#${items}`} key={items} variants={ItemVariant} whileHover={{scale:1.2}} whileTap={{scale:0.8}}>{items}</motion.a>
        ))
      }
    </motion.div>
  )
}

export default Link
