import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import TotalBalanceIcon from "images/total_balance_icon.png";
import { ReactComponent as PriceUp } from 'images/price_up.svg';
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
    <div className='price'>
        <p> {price} $</p>
    </div>
    <div className='percentage'>
    <PriceUp/>

        <p>{stats.perc} %</p>
    </div>
    <InvestButton>CHECK</InvestButton>
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
width: 90%;
p{
    margin: 0;
    font-size: 14px;
    font-weight: 600;
}
.price {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    min-width: 68px;
}
.percentage {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
    color: #15AF37;
}
    .align-center{
        display: flex;
        align-items: center;
        height: fit-content;
        column-gap: 20px;
        justify-content: space-between;
        /* align-items: center; */
        font-weight: 500;
    }
    img {
        width:32px;
        height: auto;
    }
    @media (min-width: 320px) {
        /* padding-bottom: 5px; */
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
    background: linear-gradient(270deg,  #E68646
 0%, #F5C652 100%);
    border-radius: 8px;
    border: 0;
    font-size: 12px;
    font-weight: 600;
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


