import React from 'react'
import transition from '../motions/transition'
import { motion as m } from "framer-motion"
import Transition from '../motions/transition'
import WordByword from '../motions/wordByword_apparition'
import Footer from '../components/Footer'
import Earth from '../components/Earth';
import Sphere from '../components/Sphere';
import Hero from '../components/Hero';

const Home = () => {
  return (

    <div>
      <Hero />
      <Footer />

      {/* <Earth /> */}
      {/* <Transition /> */}
    </div>


  )
}

export default Home;