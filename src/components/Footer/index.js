import React from 'react'

import {
  FaDiscord,
  FaTwitter,
} from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterLogoImg
} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'
import logo from './../../images/logo.png';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          {/* <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to='/'>How It Works</FooterLink>
                <FooterLink to='/'>Careers</FooterLink>
                <FooterLink to='/'>Privacy Policy</FooterLink>
                <FooterLink to='/'>Terms of Service</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to='/'>Submit Video</FooterLink>
                <FooterLink to='/'>Ambassadors</FooterLink>
                <FooterLink to='/'>Agency</FooterLink>
                <FooterLink to='/'>Influencer</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to='/'>Contact</FooterLink>
                <FooterLink to='/'>Support</FooterLink>
                <FooterLink to='/'>Destinations</FooterLink>
                <FooterLink to='/'>Sponsorship</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Resources</FooterLinkTitle>
                <FooterLink to='/'>Blog</FooterLink>
                <FooterLink to='/'>Documentation</FooterLink>
                <FooterLink to='/'>Community</FooterLink>
                <FooterLink to='/'>Affiliates</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer> */}

          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>
                <FooterLogoImg src={logo} alt='$WRLD Horses' />
              </SocialLogo>
              <WebsiteRights>
                &copy; {new Date().getFullYear()} $WRLD Horses. All Rights
                Reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href='https://twitter.com/wrldhorses'
                  target='_blank'
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  href='https://discord.gg/xbQks7R2'
                  target='_blank'
                >
                  <FaDiscord />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer