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
            <div class="title big">May</div>
            <div class="body">
              <p><b>6969.</b> The Genesis Horse collection will mint on 14th May 2022.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title">June</div>
            <div class="body">
              <p><b>OG racetrack.</b> Race and win $WRLD against your frens. Community incentives in $WRLD.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title">July</div>
            <div class="body">
              <p><b>PVP racetrack.</b> PVP race and win $WRLD against your frens. Hard difficulty.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title big">August</div>
            <div class="body">
              <p><b>Staking.</b> Stake your Horse NFT for in-game items to aid you like speed potions.</p>
              <br/>
              <p><b>Land sale.</b> 500 stable plots will be sold arond the kingdoms.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title">Spetmember</div>
            <div class="body">
              <p><b>Renting.</b> Rent your Horse NFT and earn $WRLD as others players race for you.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title">October</div>
            <div class="body">
              <p><b>Story mode.</b> Releasing a crazy quest line story mode and levels.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title big">November</div>
            <div class="body">
            <p><b>Breeding.</b> You can breed you Horse NFT to create gen 2s on Polygon.</p>
            </div>
          </div>
          {/* <div class="entry">
            <div class="title">December</div>
            <div class="body">
              <p><b>Breeding.</b> You can breed you Horse NFT to create gen 2s on Polygon.</p>
            </div>
          </div> */}
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
