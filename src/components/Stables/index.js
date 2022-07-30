import React, { useState } from 'react';

import {
  ServicesContainer,
  ServicesH1,
  TopLine,
  Img,
  Wrapper,
  ServicesP
} from './StablesElements';

const Stables = ({ data }) => {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    active ? setActive(undefined) : setActive(activeHorse.activeHorse);
  };

  const activeHorse = { activeHorse: { border:'5px solid #4a6f28' } }

  return (
    <>
      <ServicesContainer id='stables'>
        <TopLine>$WRLD Horses</TopLine>
        <ServicesH1>Stables</ServicesH1>
          <ServicesP>View your horse NFTs in the Stables.</ServicesP>
          <Wrapper>
          {!data.length > 0 ? <p><b>(0) horses owned</b></p> :
             (data && data.filter(nft => nft.description == "$WRLD Horses: Genesis Horse Collection.").map((nft, i) => {
                return (
                  <div style={active || undefined } onClick={handleClick}>
                    <Img key={i} src={nft.image_url}></Img>
                    <div>
                       {nft.traits.sort(function(a, b) {
                         return a.trait_type.localeCompare(b.trait_type);
                      }).map(trait => {
                        return <div><b>{trait.trait_type.replace('_', ' ')+':'}</b>{' ' + trait.value.toString().replace('_', ' ') + (trait.value.toString().length == 1 || trait.value.toString().length == 2 ? '/10' : '')}</div>
                      })}
                    </div>
                  </div>
                )
            }))
          } 
          </Wrapper>
      </ServicesContainer>
    </>
  )
}

export default Stables;
