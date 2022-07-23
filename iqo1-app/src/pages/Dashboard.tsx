import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import DashboardBurger from "../components/DashboardBurger";
import DashboardMenu from "../components/DashboardMenu";

const Dashboard = () => {
  return (
    <>
      <DashboardContainer>
        <DashboardBurger />
        <DashboardMenu />
        <OutletContainer>
          <FakeNav></FakeNav>
          <OutletSize>
            <Outlet />
          </OutletSize>
        </OutletContainer>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background-color: #12181e;
  display: flex;
  overflow: auto;
`;
const OutletContainer = styled.div`
  color: white;
  width: 100%;
  justify-content: center;
  display: flex;

  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 100vw;
    max-width: 100%;
  }
`;

const FakeNav = styled.div`
  min-width: 260px;

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

const OutletSize = styled.div`
  display: flex;
  justify-content: center;


  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: calc(100vw - 260px);
  }
`;