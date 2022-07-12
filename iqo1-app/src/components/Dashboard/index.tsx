import React from 'react'
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import ActiveCurrencies from './ActiveCurrencies';
import Profit from './Profit';
import TotalBalance from './TotalBalance';

const DashboardMain = () => {
  return (
    <DasboardMainContainer>
      <TotalBalance />
      <DashboardTitle><FormattedMessage id='dashboard_title' /></DashboardTitle>
      <InfoBlockc>
        <ActiveCurrencies />
        <Profit />
      </InfoBlockc>
    </DasboardMainContainer>
  )
}

export default DashboardMain;

const DasboardMainContainer = styled.div`
    height: fit-content;
    width: 85%;
 
`;

const DashboardTitle = styled.h2`
  width: 100%;
  height: fit-content;
  font-size: 32px;
  margin: 2.5vw 0 1.25vw 0;
  @media (min-width: 320px) {
    margin-top: 20px;
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
      flex-direction:row;
    }
`
