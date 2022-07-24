import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import MarketItem from "../MarketItem";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { useParams } from "react-router-dom";
import TotalBalance from "components/Dashboard/TotalBalance";
import ProfitIcon from "images/profit_icon.png";
interface MarketChart {
  chart?: string;
}
const MarketChart = () => {
  const { chart } = useParams();

  return (
    <ChartContaient>
      <FlexContainer>
        <ChartHeading>
          <ChartHeader>BTC/USDT</ChartHeader>
          <ChartText>34 543,53$/14,53%</ChartText>
        </ChartHeading>
        <TotalBalance />
        <Profit>
          <ProfitHeader>Profit:</ProfitHeader>
          <ProfitContent>
            <img src={ProfitIcon} alt="Profit icon" />
            <div>
              <TotalProfitHeader>Total Profit:</TotalProfitHeader>
              <TotalProfit>
                $ 15,00<span>+0%</span>
              </TotalProfit>
            </div>
          </ProfitContent>
        </Profit>
      </FlexContainer>
      <Wrapper>
        <AdvancedRealTimeChart theme="dark" symbol={chart} style="1" autosize />
      </Wrapper>
      <ButtonsContainer>
        <SellButton>Sell</SellButton>
        <InvestButton>Invest</InvestButton>
      </ButtonsContainer>
    </ChartContaient>
  );
};

export default MarketChart;

const Wrapper = styled.div`
  width: calc(100% - 60px);
  height: 71%;
  margin-top: 30px;
  padding-right: 60px;
  border-radius: 16px;

  #tradingview_widget_wrapper div:nth-child(2) {
    display: none;
  }
`;

const ChartContaient = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

const FlexContainer = styled.div`
  display: flex;

  div.totalBalance {
    padding-right: 0;
    margin-right: 39px;
  }

  div.hideButtons {
    display: none;
  }

  div.forMarketChart {
    @media (min-width: 320px) {
      width: 100%;
      font-size: 1.8em;
    }

    @media (min-width: 768px) {
      width: 285px;
      font-size: 2em;
    }

    @media (min-width: 900px) {
      width: 330px;
      font-size: 32px;
    }

    @media (min-width: 1280px) {
      width: 17vw;
      min-width: 270px;
    }
  }
`;

const ChartHeading = styled.div`
  align-self: flex-end;
  margin-right: 70px;
`;

const ChartHeader = styled.h2`
  font-weight: 700;
  font-size: 48px;
  margin: 0;
`;

const ChartText = styled.p`
  color: #15af37;
  font-size: 32px;
  margin: 0;
`;

const Profit = styled.div``;

const ProfitHeader = styled.h3`
  font-weight: 600;
  font-size: 18px;
`;

const ProfitContent = styled.div`
  height: 105px;
  width: 292px;
  background: #26313d;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 69px;
    width: 69px;
    margin-right: 13px;
  }
`;

const TotalProfitHeader = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6c6c6c;
  margin-bottom: 5px;
`;

const TotalProfit = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 32px;
  color: #ffffff;

  span {
    margin-left: 13px;
    font-weight: 500;
    font-size: 18px;
  }
`;

const ButtonsContainer = styled.div`
    margin: 12px 0;
    align-self: flex-end;
    margin-right: 60px;
    display: flex;
    width: 400px;
    justify-content: space-between;

  button {
    width: 186px;
    height: 54px;
    box-shadow: 0px 1px 12px rgba(1, 29, 102, 0.2);
    border-radius: 15px;
    font-weight: 700;
    font-size: 18px;
    color: white;
    border: none;
  }
`;

const SellButton = styled.button`
  background: linear-gradient(96.89deg, #bb4343 24.7%, #ff6b00 100%);
`;

const InvestButton = styled.button`
  background: linear-gradient(96.89deg, #46ba5f 24.7%, #55ed76 100%);
`;
