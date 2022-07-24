import React from "react";
import styled from "styled-components";
import CoinImg from "images/coin_icon.png";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const MarketItem = () => {
  return (
    <StyledLink to="ETHUSDT">
      <MarketItemContainer>
        <ContentContainer>
          <TitleContainer>
            <CoinImage src={CoinImg} />
            <CoinHeader>COIN</CoinHeader>
          </TitleContainer>
          <InfoContainer>
            <TotalValueContainer>
              <Amount>1M$</Amount>
              <TotalValue>
                <FormattedMessage id="market_total_value" />
              </TotalValue>
            </TotalValueContainer>
            <YearlyGrowContainer>
              <Percentage>38.41%</Percentage>
              <YearlyGrow>
                <FormattedMessage id="market_yearly_grow" />
              </YearlyGrow>
            </YearlyGrowContainer>
          </InfoContainer>
        </ContentContainer>
      </MarketItemContainer>
    </StyledLink>
  );
};

export default MarketItem;

const MarketItemContainer = styled.div`
  width: 170px;
  height: 172px;
  background: #1b242d;
  border-radius: 10px;
  box-shadow: 0px 2px 15px rgba(1, 29, 102, 0.2);
  display: flex;
  justify-content: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  /* color:rgba(137, 137, 137, 1); */
  color: inherit;
`;
const ContentContainer = styled.div`
  width: 132px;
  height: 128px;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-top: 13px;
  margin-bottom: 9px;
`;

const CoinImage = styled.img`
  width: 54px;
  height: 55px;
  margin-right: 10px;
`;

const CoinHeader = styled.h3`
  font-weight: 600;
  font-size: 18px;
  margin-top: 8px;
`;

const InfoContainer = styled.div`
  border-top: 1px solid rgba(132, 132, 132, 1);
  display: flex;
  padding: 9px 6px;
`;

const TotalValueContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const YearlyGrowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Amount = styled.div`
  font-weight: 600;
  font-size: 10px;
  margin-bottom: 3px;
`;

const Percentage = styled.div`
  font-weight: 600;
  font-size: 10px;
  margin-bottom: 4px;
`;

const TotalValue = styled.div`
  font-size: 8px;
  color: rgba(137, 137, 137, 1);
`;

const YearlyGrow = styled.div`
  font-size: 8px;
  color: rgba(137, 137, 137, 1);
`;
