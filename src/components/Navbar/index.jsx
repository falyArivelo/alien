import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button';
import Leftbar from '../Leftbar';
import './style.scss';

import { AnimatePresence, motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

const menu = {
  open: {
    width: "480px",
    height: "100vh",
    top: "-25px",
    right: "-25px",
    borderRadius: '15px',
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    width: "60px",
    height: "60px",
    top: "0px",
    right: "0px",
    borderRadius: '60px',
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
  }
}


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='nav'>
      <div className="logo">
        <Link to='/'>Vittoria .</Link>
      </div>
      <div className="menu">
        <div className="nav-links">
          <div className="nav-item">
            <Link className='nav-link' to='/home'><FormattedMessage id="home" /></Link>
          </div>
        </div>
        <div className="nav-links">
          <div className="nav-item">
            <Link className='nav-link' to='/about'><FormattedMessage id="about" /></Link>
          </div>
        </div>
        <div className="nav-links">
          <div className="nav-item">
            <Link className='nav-link' to='/contact'><FormattedMessage id="contact" /></Link>
          </div>
        </div>

        <div className="nav-links">
          <div className="nav-item">
            <Link className='nav-link' to='/chat'><FormattedMessage id="chat" /></Link>
          </div>
        </div>

        {/* burger icon */}


        {/* <div className="leftBar">
          <motion.div
            className='menu'
            variants={menu}
            animate={isActive ? "open" : "closed"}
            initial="closed"
          >
            <AnimatePresence>
              {isActive && <Leftbar />}
            </AnimatePresence>
          </motion.div>
          <Button isActive={isActive} toggleMenu={() => { setIsActive(!isActive) }} />

        </div> */}
      </div>


    </div>
  )
}

export default Navbar