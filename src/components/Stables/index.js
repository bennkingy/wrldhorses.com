import React, { useState } from 'react';

import {
  ServicesContainer,
  ServicesH1,
  TopLine,
  Img
} from './StablesElements';

const Stables = ({ data }) => {

  return (
    <>
      <ServicesContainer id='stables'>
        <TopLine>$WRLD Horses</TopLine>
        <ServicesH1>Stables</ServicesH1>
          View your horse NFTs in the Stables.<br/><br/>
          {!data ? <p><b>(0) horses owned</b></p> :
             data.map((nft, i) => {
                console.log(nft)
                return (
                  <Img key={i} src={nft.image_url} width={170}></Img>
                )
            })
          } 
      </ServicesContainer>
    </>
  )
}

export default Stables;
