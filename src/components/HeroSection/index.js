import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,  ArrowForward,
  ArrowRight, } from './HeroElements'
import { Button } from '../ButtonElements';
import bg from '../../images/mainbg.png';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div>
      <HeroContainer id='home' style={{ backgroundImage: 'url(' + bg + ')' }}>
        <HeroContent>
          <HeroH1>
            $WRLD Horses
          </HeroH1>
          <HeroP>
          The ultimate Play to Earn horse racing metaverse.
          </HeroP>
        </HeroContent>
        <HeroBtnWrapper>
        {/* <Button
          to='signup'
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary='true'
          dark='true'
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
        >
          Get started {hover ? <ArrowForward /> : <ArrowRight />}
        </Button> */}
        </HeroBtnWrapper>
      </HeroContainer>
    </div>
  )
}

export default HeroSection
