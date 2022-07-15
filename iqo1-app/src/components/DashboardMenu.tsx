import React from 'react'
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../images/logo.png';
import ProfileInfo from './ProfileInfo';
import DashbordIcon from '../images/dashboard_icon.png';
import MarketIcon from '../images/market_icon.png'
import DepositIcon from '../images/deposit_icon.png'
import VeifyIcon from '../images/verify_icon.png'
import SettingsIcon from '../images/settings_icon.png'

const DashboardMenu = () => {

  return (
    <DashboardMenuContainer>
        <Logo src={LogoImg} alt="logo"/>
        <ProfileInfo />
        <MenuList>
            <MenuItem>
              <MenuIcon src={DashbordIcon}/>
              <Link to=""><FormattedMessage id="dm_dashboard" /></Link>
            </MenuItem>
            <MenuItem>
              <MenuIcon src={MarketIcon}/>
              <Link to="market"><FormattedMessage id="dm_market" /></Link>
            </MenuItem>
            <MenuItem>
              <MenuIcon src={DepositIcon}/>
              <Link to="deposit"><FormattedMessage id="dm_deposit" /></Link>
            </MenuItem>
            <MenuItem>
              <MenuIcon src={VeifyIcon}/>
              <Link to="veryfy"><FormattedMessage id="dm_verify" /></Link>
            </MenuItem>
            <MenuItem>
              <MenuIcon src={SettingsIcon}/>
              <Link to="settings"><FormattedMessage id="dm_settings" /></Link>
            </MenuItem>   
        </MenuList>
        <DivideLine />
        <SubMenu>
          <div><FormattedMessage id="dm_sub_menu" /></div>
          <Link to="/"><FormattedMessage id="dm_sub_home" /></Link>
          <Link to="/"><FormattedMessage id="dm_sub_faq" /></Link>
          <Link to="/"><FormattedMessage id="dm_sub_contacts" /></Link>
          <Link to="/"><FormattedMessage id="dm_sub_support" /></Link>
        </SubMenu>
    </DashboardMenuContainer>
  )
}

export default DashboardMenu;

const DashboardMenuContainer = styled.div`
  position: fixed;
  width: 260px;
  min-height: 100%;
  background-color: #26313D;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px){
        display: none;
    }

  @media (max-height: 560px) {
    *{
      transform: scale(0.95);
    }
  }
`;

const Logo = styled.img`
  width: 55%;
`;

const MenuList = styled.nav`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  height: 240px;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: white;
  }

  @media (max-height: 560px) {
    height: 170px;
  }
`;

const MenuItem= styled.div`
  font-size: 1.2em;
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.img`
  margin-right: 15px;
`;

const DivideLine = styled.div`
  width: 230px;
  height:1px;
  background-color: #848484;
 
`;
const SubMenu = styled.nav`
  height: 150px;
  width: 125px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  div {
    color: white;
    font-size: 1.2em;
  }

  a {
    color: #848484;
    text-decoration: none;
  }

  @media (max-height: 560px) {
    height: 120px;
  }
`;