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
    {question:"Wen mint?",answer:"The Genesis Horse collection will mint on 30th April 2022. Whitelisted wallets will have 24 hrs to mint five Horses for free. The rest will go on public sale for $69.69 (in ETH) on 1st May."},
    {question:"Wen utility?",answer:"Genesis Horses will allow you to participate in Competitive Races where players can wager $WRLD. They also allow players to access the story mode which rewards in $WRLD too. Please see our White Paper for full utility plan."},
    {question:"Wen game launch?",answer:"Alpha track multiplayer experience will launch at the end of Q2. Alpha Track Story Mode will launch Q3."},
    {question:"Wen breeding?",answer:"Genesis Horse owners will be able to breed 1st Generation Horses on Polygon! More details coming soon. Please see White Paper for full utility plan."},
    {question:"Wen leaderboard?",answer:"We will feature leaderboards in the Alpha Track multiplayer launch at the end of Q2. These will appear on our website and in-game, displaying the best players competing in Competitive Races each month."},
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
