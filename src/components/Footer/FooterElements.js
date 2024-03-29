import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
  background: #5B8731;
`

export const FooterWrap = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
  color: #010606;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #010606;
    transition: 0.3s ease-out;
  }
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
export const FooterLogoImg = styled.img`
  width: 35px;
  margin-bottom: 0;
`
export const SocialLogo = styled(Link)`
  color: #fff;
  margin-bottom: 0 !important;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  @media screen and (max-width: 820px) {
    display: none;
  } 
`

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 0;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 240px;
  @media screen and (max-width: 820px) {
    justify-content: center;
    margin-top: 20px;
  } 
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #010606;
    transition: 0.3s ease-out;
  }
  margin-left: 15px;
`
