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
    {question: "Wen mint, wen mint?", answer: "The Genesis Horse collection will mint on Saturday the 9th of July 2022 on the Ethereum blockchain."},
    {question: "How many traits create a NFT?", answer: "Over 100 visual traits (base, body, pattern, mane and tail, socks, hooves and eyes) and 10 physical traits (speed, acceleration, jump strength, handling, hp, attack, defence, endurance, mage and special) are used to create a Horse NFT."},
    {question: "Is $WRLD Horses gambling?", answer: "No, $WRLD Horses is a skills-based game and does not support gambling."},
    {question: "What utility do Genesis Horses give?", answer: "Genesis Horses will allow you to participate in competitive races and tournaments. Trade your horse NFTs on Open Sea for better stats or to get a horse in your favourite colour. They also allow players to access the story mode, which rewards $WRLD. Please see our white paper for the entire utility plan."},
    {question: "Will the leaderboard have $WRLD rewards?", answer:"The in-game/website leaderboards will have $WRLD rewards! We will give out rewards to the top 10 horses on the leaderboards each month."},
    {question: "Staking rewards?", answer: "We are releasing staking in August, and you will receive in-game consumable items to aid your races and cosmetics for your horses."},
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
