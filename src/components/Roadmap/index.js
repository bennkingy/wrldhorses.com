import React from 'react';
import bg from '../../images/players.jpg';

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
            <div class="title">May</div>
            <div class="body">
              <p><b>6969</b><br/>The Genesis Horse collection will mint on 14th May 2022.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title big">June</div>
            <div class="body">
              <p><b>NFT implementation</b><br/>Ride your horse NFTs in-game with unique stats and appearance.</p>
              <br/>
              <p><b>OG racetrack</b><br/>Race against frens for $WRLD on our OG race track.</p>
              <br/>
              <p><b>Colosseum racetrack</b><br/>Race with the best on our most dangerous course!</p>
              <br/>
              <p><b>Horseback PvP</b><br/>Battle against your frens for $WRLD in our first PvP combat arena.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title">July</div>
            <div class="body">
            <p><b>Staking</b><br/>Stake your Horse NFT to earn in-game items.</p>
            <br/>
            <p><b>Renting</b><br/>Staked Horse NFTs can be rented to racers. Owners and racers share $WRLD rewards.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title">August</div>
            <div class="body">
              <p><b>Staking.</b> Stake your Horse NFT for in-game items to like speed potions.</p>
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
            <div class="title">November</div>
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
