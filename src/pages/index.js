import React, { useState, useEffect } from "react"
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"
import Team from '../components/Team'
import Footer from '../components/Footer'
import Stables from '../components/Stables'
import Roadmap from '../components/Roadmap'
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
  }, [account])
  
  async function getOpenseaItems()  {
    axios
      // https://testnets-api.opensea.io/api/v1
      .get(`https://testnets-api.opensea.io/api/v1/assets?owner=${account}`)
      .then(res => {
        console.log(res.data.assets);
        sethorseImgs(res.data.assets.filter(assets => assets.assets[1].creator.address !== '0x112a4de6dee6f8ee30a77d7d3549991b7b75c01d'));
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

  return (
    <>
      <NavBar toggle={toggle} connectWallet={connectWallet} account={account}/>
      <SideBar isOpen={isOpen} toggle={toggle} connectWallet={connectWallet} account={account}/>
      <HeroSection/>
      <InfoSection {...homeObjOne} />
      <Stables data={horseImgs && horseImgs} />
      <Team />
      <Roadmap />
      <FAQss />
      <Footer />
    </>
  )
}

export default Home