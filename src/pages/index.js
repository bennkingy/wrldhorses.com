import React, { useState, useEffect } from "react"
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"
import Team from '../components/Team'
import Footer from '../components/Footer'
import Stables from '../components/Stables'
import FAQss from '../components/FAQss'
import axios from 'axios';
import { ethers } from 'ethers';
import {
  homeObjOne,
} from '../components/InfoSection/Data'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [account, setAccount] = useState("");
  const [horseImgs, sethorseImgs] = useState("");

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    getOpenseaItems() 
    connectWallet()
  },[])
  
  async function getOpenseaItems()  {
    axios
      .get(`https://api.opensea.io/api/v1/assets?owner=${account}`)
      .then(res => {
        sethorseImgs(res.data.assets);
    })
    .catch(err => console.error(err));
  }

  async function requestAccount() {
  
    if(window.ethereum) {
      try {
      const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      } catch (error) {
          console.log('Error connecting...');
      }  
      } else {
          alert('Meta Mask not detected');
      }
  }
  
  async function connectWallet() {
      if(typeof window.ethereum !== 'undefined') {
          await requestAccount();
          const provider = new ethers.providers.Web3Provider(window.ethereum);
      }
  }

  console.log('account', account)

  console.log('horse img', horseImgs)

  return (
    <>
      <NavBar toggle={toggle} connectWallet={connectWallet} />
      <SideBar isOpen={isOpen} toggle={toggle} connectWallet={connectWallet}/>
      <HeroSection/>
      <InfoSection {...homeObjOne} />
      <Stables data={horseImgs && horseImgs} />
      <Team />
      <FAQss />
      <Footer />
    </>
  )
}

export default Home