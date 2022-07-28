import React, { useState } from 'react';

import {
  ServicesContainer,
  ServicesH1,
  TopLine
} from './StablesElements';

const Stables = ({ data }) => {

  console.log(data);

  return (
    <>
      <ServicesContainer id='stables'>
        <TopLine>$WRLD Horses</TopLine>
        <ServicesH1>Stables</ServicesH1>
          View your horse NFTs in the Stables.<br/><br/>
          {!data ? <p><b>(0) horses owned</b></p> :
             data.map(nft => {
                console.log(nft)
                return (
                  <img src={nft.collection.image_url} width={50}></img>
                )
            })
          } 
      </ServicesContainer>
    </>
  )
}

export default Stables;
