import React from 'react'
import { Outlet } from 'react-router';
import styled from 'styled-components';
import DashboardBurger from '../components/DashboardBurger';
import DashboardMenu from '../components/DashboardMenu';

const Dashboard = () => {
    
  return (
    <>
      <DashboardContainer>
        <DashboardBurger />
        <DashboardMenu />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </DashboardContainer>
    </>
  )

}

export default Dashboard;

const DashboardContainer = styled.div`

  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  background-color: #12181E;
  display: flex;

`;
const OutletContainer = styled.div`
  color: white;
`;