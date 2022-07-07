import React from 'react'
import { Outlet } from 'react-router';
import styled from 'styled-components';
import DashboardMenu from './DashboardMenu';

const Dashboard = () => {
    
  return (
    <DashboardContainer>
      <DashboardMenu />
      <OutletContainer>
         <Outlet />
      </OutletContainer>
    </DashboardContainer>
  )

}

export default Dashboard;

const DashboardContainer = styled.div`

  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background-color: #12181E;
  display: flex;

`;
const OutletContainer = styled.div`
  color: white;
`;