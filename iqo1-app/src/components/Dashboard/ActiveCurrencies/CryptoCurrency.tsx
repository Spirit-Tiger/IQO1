import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import TotalBalanceIcon from "images/total_balance_icon.png";

import InvestIcon from "images/invest_icon.png";
import WithdrowIcon from "images/withdrow_icon.png";

interface Stats {
    dir:string,
    perc: number
}
interface CurrencyProps {
    imgSrc: string,
    shortName: string,
    stats: Stats,
    price: number
}
const CryptoCurrency = ({imgSrc, shortName, stats, price}: CurrencyProps) => {
  return (
   <Container>
    <div className='align-center'>
        <img src={imgSrc}></img>
        <p>{shortName}</p>
    </div>
    <div>
        <p>{price}$</p>
    </div>
    <div>
        <p>{stats.perc}%</p>
    </div>
    <InvestButton>Check</InvestButton>
   </Container>
  )
}

export default CryptoCurrency;

const Container = styled.div`
display: flex;
height: fit-content;
align-items:center;
justify-content: space-between;
font-size:14px;
p{
    margin: 0;
}
    width: 90%;
    .align-center{
        display: flex;
        align-items: center;
        height: fit-content;
        column-gap: 27px;
        justify-content: space-between;
        /* align-items: center; */
        font-weight: 500;
    }
    img {
        width:32px;
        height: auto;
    }
    @media (min-width: 320px) {
        padding-bottom: 5px;
        border-bottom: 1px solid #5C5C5C;
    }
    
    @media (min-width: 768px) {
      flex-basis: 50%;
      border: none;
    }
`;

const BalanceHeader = styled.h3`
    font-size: 18px;
`;
const InvestButton = styled.button`
    background: linear-gradient(270deg, #9D7100 0%, #FF9900 100%);
    border-radius: 8px;
    border: 0;
    font-size: 12px;
    color: white;
    @media (min-width: 320px) {
        display: none;
    }

    @media (min-width: 768px) {
        width: 100px;
        height: 23px;
        display: block;
    }
`;


