import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import CryptoCurrency from './CryptoCurrency';


const ActiveCurrencies = () => {
  return (
    <TotalBalanceContainer>
        <BalanceHeader>
            <FormattedMessage  id="dashboard_active_currency_title"/>
        </BalanceHeader>
        <FlexContainer>
            {objects.map((cur)=> <CryptoCurrency imgSrc={cur.imgSrc} shortName={cur.shortName} stats={cur.stats} price={cur.price} />)}
        </FlexContainer>
    </TotalBalanceContainer>
  )
}

export default ActiveCurrencies;

const TotalBalanceContainer = styled.div`
    height: fit-content;
   
    @media (min-width: 320px) {
        flex-basis: 100%;
        width: 100%;
    }
    
    @media (min-width: 768px) {
      flex-basis: 100%;
    }

    @media (min-width: 1280px){
        flex-basis: 50%;
    }
`;

const BalanceHeader = styled.h3`
    font-size: 18px;
`;

const FlexContainer = styled.div`
    /* width: 90%; */
    padding: 30px 0;
    background-color: #26313D ;
    border-radius: 12px;
    display: flex;
    height: fit-content;
    max-height: calc(350px - 60px);
    /* justify-content: center; */

    @media (min-width: 325px){
        flex-direction: column;
        width: 100%;
        align-items: center;
        row-gap: 20px;
    }

    @media (min-width: 768px){
        height: fit-content;
        width: 100%;
        align-items: center;
        flex-direction: column;
        row-gap: 32px;
    }
`;


const objects = [
    {
        shortName:"ETH",
        imgSrc:'https://www.freelogovectors.net/svg12/ethereum_logo_freelogovectors.net.svg',
        stats:{
            dir:'up',
            perc:15
    },
        price:150.5
    },
    {
        shortName:"ETH",
        imgSrc:'https://www.freelogovectors.net/svg12/ethereum_logo_freelogovectors.net.svg',
        stats:{
            dir:'up',
            perc:15
        },
        price:150.5
    },
    {
        shortName:"ETH",
        imgSrc:'https://www.freelogovectors.net/svg12/ethereum_logo_freelogovectors.net.svg',
        stats:{
            dir:'up',
            perc:15
        },
        price:150.5
    },
    {
        shortName:"ETH",
        imgSrc:'https://www.freelogovectors.net/svg12/ethereum_logo_freelogovectors.net.svg',
        stats:{
            dir:'up',
            perc:15
        },
        price:150.5
    },
    {
        shortName:"ETH",
        imgSrc:'https://www.freelogovectors.net/svg12/ethereum_logo_freelogovectors.net.svg',
        stats:{
            dir:'up',
            perc:15
        },
        price:150.5
    }
]