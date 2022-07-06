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
            <div class="title big">July</div>
            <div class="body">
              <p><b>10K</b><br/>The 10k Genesis Horse collection will mint on Saturday the 9th July 2022 on the Ethereum blockchain.</p>
              <br/>
              <p><b>NFT implementation</b><br/>Ride your horse NFTs in-game with unique stats and appearance.</p>
              <br/>
              <p><b>OG racetrack</b><br/>Race against frens for $WRLD on our OG race track. Compete for $WRLD rewards by being top 10 on the leaderboards.</p>
              <br/>
              <p><b>Colosseum racetrack</b><br/>Race with the best on our most dangerous course!</p>
              <br/>
              <p><b>Horseback PvP</b><br/>Battle against your frens for $WRLD in our first PvP combat arena.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title">August</div>
            <div class="body">
            <p><b>Staking</b><br/>Stake your Horse NFT to earn in-game items.</p>
            <br/>
            <p><b>Renting</b><br/>Staked Horse NFTs can be rented to racers. Owners and racers share $WRLD rewards.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title">September</div>
            <div class="body">
            <p><b>Alpha Story Mode</b><br/>Introduction to the Nine Kingdoms of Phaeton. Players can quest for $WRLD rewards.</p>
            <br/>
            <p><b>Competitive incentives</b><br/>Tournaments and ranking systems which earn $WRLD rewards.</p>
            <br/>
            <p><b>Social incentives</b><br/>Incentivised spectating and chill out spaces.</p>
            </div>
            </div>
            <div class="entry">
            <div class="title big">Q4</div>
            <div class="body">
            <p><b>Breeding</b><br/>Breed Genesis Horse NFTs in-game to create Gen 2 Horse NFTs. Only Genesis Horses can breed to prevent hyper-inflationary supply.</p>
            <br/><p><b>Teams</b><br/>Team races, ranking systems and registering will be established.</p>
            <br/><p><b>Land Sale</b><br/>Land sale to build in-game player run businesses will be introduced.</p>
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
