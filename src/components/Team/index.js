import React from 'react';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  TopLine
} from './ServicesElements';
import Icon1 from '../../images/head1.png'
import Icon2 from '../../images/head2.png'
import Icon3 from '../../images/head3.png'
import Icon4 from '../../images/head4.png'
import Icon5 from '../../images/head5.png'
import Icon6 from '../../images/head6.png'
import {
  FaTwitter, FaLinkedin
} from 'react-icons/fa'

const Team = () => {
  return (
    <>
      <ServicesContainer id='services'>
        <TopLine>$Wrld Horses</TopLine>
        <ServicesH1>Team</ServicesH1>
        <ServicesWrapper>
        <a href="https://twitter.com/metebox" target="_blank" style={{textDecoration: 'none', color: '#010606'}}>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Founder / Creative Director</ServicesH2>
            <ServicesP>
              Metebox <FaTwitter />
            </ServicesP>
          </ServicesCard>
          </a>
          <a href="https://twitter.com/k1ngydoteth"  target="_blank" style={{textDecoration: 'none', color: '#010606'}}>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Founder / Developer</ServicesH2>
            <ServicesP>
              Kingy <FaTwitter />
            </ServicesP>
          </ServicesCard>
          </a>
          <a href="https://twitter.com/Brosiah14" target="_blank" style={{textDecoration: 'none', color: '#010606'}}>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Designer</ServicesH2>
            <ServicesP>
              Brosiah <FaTwitter />
            </ServicesP>
          </ServicesCard>
          </a>
          <a href="#" target="_blank" style={{textDecoration: 'none', color: '#010606'}}>
          <ServicesCard>
            <ServicesIcon src={Icon6} />
            <ServicesH2>Mod</ServicesH2>
            <ServicesP>
              Swalmsley <FaTwitter />
            </ServicesP>
          </ServicesCard>
          </a>
          <a href="https://www.linkedin.com/in/brianmbento" target="_blank" style={{textDecoration: 'none', color: '#010606'}}>
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>Advisor</ServicesH2>
            <ServicesP>
              Hackige <FaLinkedin />
            </ServicesP>
          </ServicesCard>
          </a>
          <a href="https://www.linkedin.com/in/parmesano/" target="_blank" style={{textDecoration: 'none', color: '#010606'}}>
          <ServicesCard>
            <ServicesIcon src={Icon5} />
            <ServicesH2>Advisor</ServicesH2>
            <ServicesP>
              Consul <FaLinkedin />
            </ServicesP>
          </ServicesCard>
          </a>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Team;
