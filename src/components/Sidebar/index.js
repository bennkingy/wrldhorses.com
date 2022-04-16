import React from 'react'
import { SidebarContainer,NavBtnLink, CloseIcon, Icon, SideBtnWrap, SidebarLink, SidebarRoute, SidebarMenu, SidebarWrapper } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="stables" onClick={toggle}>
            Stables
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Team
          </SidebarLink>
          <SidebarLink to="faqs" onClick={toggle}>
            FAQs
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <NavBtnLink>Connect Wallet</NavBtnLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar