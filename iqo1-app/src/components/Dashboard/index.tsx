import Market from './Market';
import React from 'react'
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import ActiveCurrencies from './ActiveCurrencies';
import Profit from './Profit';
import Referal from './Referral';
import TotalBalance from './TotalBalance';

const DashboardMain = () => {
  return (
    <DasboardMainContainer>
      <TotalBalance />
      <DashboardTitle><FormattedMessage id='dashboard_title' /></DashboardTitle>
      <InfoBlockc>
        <ActiveCurrencies />
        <Profit />
        <Referal />
      </InfoBlockc>
      <Market />
    </DasboardMainContainer>
  )
}

export default DashboardMain;

const DasboardMainContainer = styled.div`
display: flex;
flex-direction:column;
    height: fit-content;
    gap: 20px;
    @media (min-width: 320px) {
      width: 85%;

    }
    @media (min-width: 768px) {
     width: 90%;
    }
    @media (min-width: 1024px) {
     width: 85%;
    }
`;

const DashboardTitle = styled.h2`
  width: 100%;
  height: fit-content;
  font-size: 32px;
  margin: 0;
  @media (min-width: 320px) {
    margin-top: 15px;
      font-size: 24px;
    }
    @media (min-width: 768px) {
      font-size: 32px;
    }
`
const InfoBlockc = styled.div`
 display: flex;
 gap: 20px;
 align-items: flex-end;
 display: flex;
    @media (min-width: 320px) {
      flex-direction: column;
    }
    @media (min-width: 768px) {
    max-height: 410px;
      flex-direction:row;
    }
`
