import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import TotalBalanceIcon from "images/total_balance_icon.png";

import InvestIcon from "images/invest_icon.png";
import WithdrowIcon from "images/withdrow_icon.png";

const TotalBalance = () => {
  return (
    <TotalBalanceContainer className="totalBalance">
      <BalanceHeader>
        <FormattedMessage id="total_balance_header" />
      </BalanceHeader>
      <FlexContainer>
        <BalanceContainer>
          <img src={TotalBalanceIcon} />
          <p>10 000, 00 $</p>
        </BalanceContainer>
        <ButtonsContainer>
          <InvestButton>
            <img src={InvestIcon} />
            <FormattedMessage id="invest_btn" />
          </InvestButton>
          <WithdrowButton>
            <img src={WithdrowIcon} />
            <FormattedMessage id="withdrow_btn" />
          </WithdrowButton>
        </ButtonsContainer>
      </FlexContainer>
    </TotalBalanceContainer>
  );
};

export default TotalBalance;

const TotalBalanceContainer = styled.div`
  padding-right: 3vw;
`;

const BalanceHeader = styled.h3`
  font-size: 18px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 320px) {
    height: 150px;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    height: 105px;
    width: 445px;
    flex-direction: row;
  }

  @media (min-width: 900px) {
    height: 105px;
    width: 550px;
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    height: 105px;
    width: 29vw;
    flex-direction: row;
    min-width: 445px;
  }
`;

const BalanceContainer = styled.div`
  background-color: #26313d;
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
    font-weight: bold;
  }

  @media (min-width: 320px) {
    width: 100%;
    height: 90px;
    font-size: 1.8em;
  }

  @media (min-width: 768px) {
    width: 285px;
    height: initial;
    font-size: 2em;
  }

  @media (min-width: 900px) {
    width: 330px;
    height: initial;
    font-size: 32px;
  }

  @media (min-width: 1280px) {
    width: 17vw;
    min-width: 270px;
    font-size: 29px;
    img {
        margin-right: 5px;
    }
  }

  @media (min-width: 1664px) {
    font-size: 32px;
    img {
      margin-right: 15px;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    color: white;
    font-size: 1.1em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    img {
      margin-right: 10px;
    }
  }

  @media (min-width: 320px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const InvestButton = styled.button`
  background: #01a224;
  border-radius: 8px;

  @media (min-width: 320px) {
    width: 47%;
    height: 40px;
  }

  @media (min-width: 768px) {
    width: 130px;
    height: 45px;
  }

  @media (min-width: 900px) {
    width: 155px;
    height: 45px;
  }

  @media (min-width: 1280px) {
    width: 8vw;
    min-width: 120px;
  }
`;

const WithdrowButton = styled.button`
  background: #26313d;
  border-radius: 8px;

  @media (min-width: 320px) {
    width: 47%;
    height: 40px;
  }

  @media (min-width: 768px) {
    width: 145px;
    height: 45px;
  }

  @media (min-width: 900px) {
    width: 192px;
    height: 45px;
  }

  @media (min-width: 1280px) {
    width: 10vw;
    min-width: 150px;
  }
`;
