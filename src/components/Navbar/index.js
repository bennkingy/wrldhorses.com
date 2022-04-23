import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { NavLogoImg, Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import logo from './../../images/logo.png';

const Navbar = ({ toggle, connectWallet }) => {

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    }
  }, [])

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome}>
          <NavLogoImg src={logo} alt='$WRLD Horses' />
        </NavLogo>
        <MobileIcon onClick={toggle}>
         <FaBars/>
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to='about'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='stables'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >Stables</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='services'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >Team</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='faqs'
              smooth={true}
              duration={500}  
              spy={true}
              exact='true'
              offset={-80}
            >FAQs</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn onClick={() => connectWallet()}>
          <NavBtnLink>{window?.ethereum?.accounts?.length > 0 ? 'Connected' : 'Connect Wallet'}</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar