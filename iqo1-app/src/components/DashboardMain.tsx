import React from 'react'
import styled from 'styled-components';
import TotalBalance from './TotalBalance';

const DashboardMain = () => {
  return (
    <DasboardMainContainer>
      <TotalBalance />
    </DasboardMainContainer>
  )
}

export default DashboardMain;

const DasboardMainContainer = styled.div`

`;
