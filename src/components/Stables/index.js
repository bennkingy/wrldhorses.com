import React, { useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';

import {
  ServicesContainer,
  ServicesH1,
  TopLine
} from './StablesElements';

const Stables = () => {

  return (
    <>
      <ServicesContainer id='stables'>
        <TopLine>$WRLD Horses</TopLine>
        <ServicesH1>Stables</ServicesH1>
          View your horse NFTs in the Stables.<br/><br/>
          <p><b>(0) horses owned</b></p>
      </ServicesContainer>
    </>
  )
}

export default Stables;
