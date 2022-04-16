import React, { useState } from "react"
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"
import Team from '../components/Team'
import Footer from '../components/Footer'
import Stables from '../components/Stables'
import FAQss from '../components/FAQss'

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../components/InfoSection/Data'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroSection/>
      <InfoSection {...homeObjOne} />
      <Stables />
      <Team />
      <FAQss />
      <Footer />
    </>
  )
}

export default Home