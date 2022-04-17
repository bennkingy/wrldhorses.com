import React, { useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';

import {
  ServicesContainer,
  ServicesH1,
  TopLine
} from './StablesElements';

const Stables = () => {


// usetstate for storing and retrieving wallet details
const [data, setdata] = useState({
  address: "",
  Balance: null,
});

// Button handler button for handling a
// request event for metamask
const btnhandler = () => {

  // Asking if metamask is already present or not
  if (window.ethereum) {
    // res[0] for fetching a first wallet
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((res) => getbalance(res[0]));
  } else {
    alert("install metamask extension!!");
  }
};

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
    axios(
     // `https://api.opensea.io/api/v1/assets?owner=${address}`,
     `https://api.opensea.io/api/v1/assets?owner=0x0d2e83712ec165b90F3316D5441D7deE55B5794a`,
      { method: "GET", headers: { Accept: "application/json" } }
    ).then(response => console.log(response))
  };

  return (
    <>
      <ServicesContainer id='stables'>
        <TopLine>$WRLD Horses</TopLine>
        <ServicesH1>Stables</ServicesH1>
          View your horse NFTs in the Stables. Coming soon!<br/><br/>
          <p onClick={btnhandler}><b>(0) horses owned</b></p>
      </ServicesContainer>
    </>
  )
}

export default Stables;
