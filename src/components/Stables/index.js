import React, { useState } from 'react';

import {
  ServicesContainer,
  ServicesH1,
  TopLine
} from './StablesElements';

const Stables = ({ data }) => {

  return (
    <>
      <ServicesContainer id='stables'>
        <TopLine>$WRLD Horses</TopLine>
        <ServicesH1>Stables</ServicesH1>
          View your horse NFTs in the Stables.<br/><br/>
          {!data ? <p><b>(0) horses owned</b></p> :
             data.slice(0,4).map(nft => {
                return (
                  <img src={nft.image_url} width={50}></img>
                )
            })
          } 
      </ServicesContainer>
    </>
  )
}

export default Stables;
