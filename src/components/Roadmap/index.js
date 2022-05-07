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
            <div class="title">2011</div>
            <div class="body">
              <p>Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos. Doloremque et distinctio quod molestiae ut.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title">2012</div>
            <div class="body">
              <p>Quo nobis cumque dolor iure voluptatem voluptatem alias soluta.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title big">2013</div>
            <div class="body">
              <p>Rerum sit libero possimus amet excepturi. Exercitationem enim dolores sunt praesentium dolorum praesentium.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title">2014</div>
            <div class="body">
              <p>Voluptatibus veniam ea reprehenderit atque. Reiciendis non laborum adipisci ipsa pariatur omnis. Sed ipsam repudiandae velit. Omnis libero nostrum aperiam nemo dolor ea eos eius. Esse a non itaque quidem.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title">2015</div>
            <div class="body">
              <p>VAdipisci totam omnis cum et suscipit excepturi et excepturi. Inventore sequi sit ut aliquid. Modi aut dolores dignissimos.</p>
              <p>Delectus facere officia consequuntur molestias deserunt illo. Placeat laudantium beatae natus excepturi ab nihil voluptates.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title big">2016</div>
            <div class="body">
              <p>Impedit dolorem commodi explicabo fugit aut alias voluptatem. Magnam earum rerum quae dicta quibusdam aliquam ut.</p>
            </div>
          </div>
          <div class="entry">
            <div class="title">2017</div>
            <div class="body">
              <p>Qui facere eos aut suscipit doloremque quos...</p>
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
