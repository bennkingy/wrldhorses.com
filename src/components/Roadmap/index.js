import React from 'react';
import bg from '../../images/players.png';

import {
  RoadmapContainer,
  ServicesH1,
  TopLine
} from './RoadmapElements';
import {
  FaTwitter, FaLinkedin
} from 'react-icons/fa'

const Roadmap = () => {
  return (
    <>
      <RoadmapContainer id='roadmap'>
        <div class='roadmaptitles'>
        <TopLine>$WRLD HORSES</TopLine>
        <ServicesH1>Roadmap</ServicesH1>
        </div>
        <div class="entries">
          <div class="entry">
            <div class="title">May 2022</div>
            <div class="body">
              <p>The Genesis Horse collection will mint on 14th May 2022.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title">June 2022</div>
            <div class="body">
              <p>Alpha game release. Race and win $WRLD against your frens!</p>
            </div>
          </div>
          <div class="entry">
            <div class="title big">July 2022</div>
            <div class="body">
              <p>Staking. Stake your Horse NFT for in-game items.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title">August 2022</div>
            <div class="body">
              <p>Renting. Rent your Horse NFT and earn while other players race for you.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title">Spetmember 2022</div>
            <div class="body">
              <p>PVP. Shoot and win $WRLD with a bow and arrow on your horse!</p>
            </div>
          </div>
          <div class="entry">
            <div class="title big">October 2022</div>
            <div class="body">
              <p>Story mode. Releasing a quest line and exp points!</p>
            </div>
          </div>
          <div class="entry">
            <div class="title">November 2022</div>
            <div class="body">
              <p>Breeding! You can breed you Horse NFT to create gen 2s on Polygon.</p>
            </div>
          </div>
        </div>
        <div id='whitespace'>

        </div>
        <div id='playersplaying' style={{ backgroundImage: 'url(' + bg + ')' }}>

        </div>
      </RoadmapContainer>
    </>
  )
}

export default Roadmap;
