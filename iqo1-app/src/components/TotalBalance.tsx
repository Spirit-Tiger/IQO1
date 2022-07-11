import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import TotalBalanceIcon from "../images/total_balance_icon.png";
import InvestIcon from "../images/invest_icon.png";
import WithdrowIcon from "../images/withdrow_icon.png";

const TotalBalance = () => {
  return (
    <TotalBalanceContainer>
        <BalanceHeader>
            <FormattedMessage  id="total_balance_header"/>
        </BalanceHeader>
        <FlexContainer>
            <BalanceContainer>
                <img src={TotalBalanceIcon}/>
                <p>10 000, 00 $</p>
            </BalanceContainer>
            <ButtonsContainer>
                <InvestButton>
                    <img src={InvestIcon}/>
                    <FormattedMessage  id="invest_btn"/>
                </InvestButton>
                <WithdrowButton>
                    <img src={WithdrowIcon}/>
                    <FormattedMessage  id="withdrow_btn"/>
                </WithdrowButton>
            </ButtonsContainer>
        </FlexContainer>
    </TotalBalanceContainer>
  )
}

export default TotalBalance;

const TotalBalanceContainer = styled.div`

`;

const BalanceHeader = styled.h3`
    font-size: 18px;
`;

const FlexContainer = styled.div`
    display: flex;
    height: 105px;
    width: 550px;
    justify-content: space-between;
`;

const BalanceContainer = styled.div`
    width: 330px;
    background-color: #26313D;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 69px;
        width: 69px;
        margin-right: 15px;
    }

    p {
        margin: 0;
        font-size: 2em;
        font-weight: bold;
    }

`;


const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    button {
        color: white;
        font-size: 1.1em;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            margin-right: 10px;
        }
    }
`;

const InvestButton = styled.button`
    width: 155px;
    height: 45px;
    background: #01A224;
    border-radius: 8px;
    border: none;
`;

const WithdrowButton = styled.button`
    width: 192px;
    height: 45px;
    background: #26313D;
    border-radius: 8px;
    border: none;
`;