import React from 'react';

import {
  ServicesContainer,
  ServicesH1,
  TopLine
} from './FaqsElements';

import FAQS from 'react-faqs-component';
// the data object includes an array of the FAQS and answers, background color, title color, answer color and icon color
const data ={
  faqs:[
      {question:"Wen mint?",answer:"We are minting on the 30th of April. There will be 6969 NFTs in total. Free mint for whitelisters (5000 NFTs). 0.0069 ETH for public (1969 NFTs)."},
      {question:"Wen utility?",answer:"Once Stellar Dev has completed the build you will be able to race your NFT horse for $wrld wagers and try become top of the leaderboard. Complete quests for $wrld, breed your horse for matic $$$ and spawn/play around on your horse cowboy!"},
      {question:"Wen game launch?",answer:"Once Stellar Dev has completed the build which should be within 4 weeks for an alpha launch."},
      {question:"Wen breeding?",answer:"Genesis NFT owners will be able to breed 2nd genertion horses on Polygon! More details to come."},
      {question:"Wen leaderboard?",answer:"We are developing leaderboards which will show who has had the most wins, in game and on the website! Players can purchase speed potions with $WRLD to give themselves a better chance to win on the race track!"},
  ],
  backgroundColor:'#f4f5f9',
  titleColor:"#000",
  answerColor:"#000",
  iconColor:"#000",
}

const FAQss = () => {
  return (
    <>
      <ServicesContainer id='faqs'>
        <TopLine>$WRLD Horses</TopLine>
        <ServicesH1>FAQs</ServicesH1>
 
          <FAQS data={data}/>

      </ServicesContainer>
    </>
  )
}

export default FAQss;
