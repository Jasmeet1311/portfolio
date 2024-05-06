import React from 'react';
import "./Navbar.scss";
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar/>
      <div className="wrapper">
        <span>Jasmeet</span>
        <div className="social">
           <a href="http://www.linkedin.com/in/jasmeet-kaur-557aa7295"><img src="linkedln.png" alt='img'/></a>
           <a href="https://www.instagram.com/jasmeet_rubal"><img src="instagram (2).png" alt='img'/></a>
           <a href="https://github.com/Jasmeet1311"><img src="github.png" alt='img'/></a>
           
           
        </div>
      </div>
    </div>
  )
}

export default Navbar
