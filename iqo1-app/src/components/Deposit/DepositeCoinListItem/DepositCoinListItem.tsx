import React from "react";
import styled from "styled-components";
import CoinIcon from "images/coin_icon.png";

const DepositCoinListItem = () => {
  return (
    <CoinItemContainer>
      <ContentContainer>
        <CoinHeading>
          <img src={CoinIcon} />
          <h3>COIN</h3>
        </CoinHeading>
        <CoinAmount>
          <p>143135,0433 coin</p>
        </CoinAmount>
      </ContentContainer>
    </CoinItemContainer>
  );
};

export default DepositCoinListItem;

const CoinItemContainer = styled.div`
  width: 170px;
  height: 140px;
  background: #1b242d;
  box-shadow: 0px 2px 15px rgba(1, 29, 102, 0.2);
  border-radius: 10px;

  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 170px;
  }
`;

const ContentContainer = styled.div`
  height: 75%;
  margin: 18px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CoinHeading = styled.div`
  display: flex;
  align-items: flex-start;

  img {
    height: 49px;
    width: 49px;
    margin-right: 18px;
  }

  h3 {
    font-weight: 600;
    font-size: 18px;
    margin: 0;
    margin-top: 3px;
  }
`;

const CoinAmount = styled.div`
  height: 36px;

  border-top: 1px solid #848484;

  p {
    font-weight: 600;
    font-size: 14px;
    margin: 0;
    margin-top: 18px;
  }
`;
