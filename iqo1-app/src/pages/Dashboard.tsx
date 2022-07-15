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
          <FakeNav></FakeNav>
          <Outlet />
        </OutletContainer>
      </DashboardContainer>
    </>
  )

}

export default Dashboard;

const DashboardContainer = styled.div`

  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background-color: #12181E;
  display: flex;
  overflow: auto;
`;
const OutletContainer = styled.div`
  color: white;
  width: 90%;
  justify-content: center;
  display: flex;

  @media (min-width:320px){
    width: 100%;
  }

  @media (min-width:768px){
    width: 92%;
  }
`;

const FakeNav = styled.div`
  min-width: 380px;
  
  @media (min-width:320px){
    display: none;
  }

  @media (min-width:768px){
    display: block;
  }
`;