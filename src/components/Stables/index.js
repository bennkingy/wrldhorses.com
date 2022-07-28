import React, { useState } from 'react';

import {
  ServicesContainer,
  ServicesH1,
  TopLine,
  Img,
  Wrapper
} from './StablesElements';

const Stables = ({ data }) => {

  return (
    <>
      <ServicesContainer id='stables'>
        <TopLine>$WRLD Horses</TopLine>
        <ServicesH1>Stables</ServicesH1>
          View your horse NFTs in the Stables.<br/><br/>
          <Wrapper>
          {!data ? <p><b>(0) horses owned</b></p> :
             data.map((nft, i) => {
                console.log(nft)
                return (
                  <Img key={i} src={nft.image_url} width={210}></Img>
                )
            })
          } 
          </Wrapper>
      </ServicesContainer>
    </>
  )
}

export default Stables;
