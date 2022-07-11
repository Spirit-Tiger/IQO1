import React,{useState} from 'react';
import { FormattedMessage, IntlProvider } from "react-intl";
import{messages} from '../i18n/eng';
import { LOCALES } from "../i18n/constants";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import DashbordIcon from '../images/dashboard_icon.png';
import MarketIcon from '../images/market_icon.png'
import DepositIcon from '../images/deposit_icon.png'
import VeifyIcon from '../images/verify_icon.png'
import SettingsIcon from '../images/settings_icon.png'
import LogoImg from '../images/logo.png';

interface RightNavProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const DashboardRightNav = ({ open, setOpen }:RightNavProps) => {

    return (
        <RightNavContainer open={open}>
            <DashboardMenuContainer>
                <Logo src={LogoImg} alt="logo"/>
                <MenuList>
                    <MenuItem onClick={() => setOpen(!open)}>
                        <MenuIcon src={DashbordIcon} />
                        <Link to=""><FormattedMessage id="dm_dashboard" /></Link>
                    </MenuItem>
                    <MenuItem onClick={() => setOpen(!open)}>
                        <MenuIcon src={MarketIcon}/>
                        <Link to="market"><FormattedMessage id="dm_market" /></Link>
                    </MenuItem>
                    <MenuItem onClick={() => setOpen(!open)}>
                        <MenuIcon src={DepositIcon}/>
                        <Link to="deposit"><FormattedMessage id="dm_deposit" /></Link>
                    </MenuItem>
                    <MenuItem onClick={() => setOpen(!open)}>
                        <MenuIcon src={VeifyIcon}/>
                        <Link to="veryfy"><FormattedMessage id="dm_verify" /></Link>
                    </MenuItem>
                    <MenuItem onClick={() => setOpen(!open)}>
                        <MenuIcon src={SettingsIcon}/>
                        <Link to="settings"><FormattedMessage id="dm_settings" /></Link>
                    </MenuItem>   
                </MenuList>
                <SubMenu>
                    <div><FormattedMessage id="dm_sub_menu" /></div>
                    <Link to="/"><FormattedMessage id="dm_sub_home" /></Link>
                    <Link to="/"><FormattedMessage id="dm_sub_faq" /></Link>
                    <Link to="/"><FormattedMessage id="dm_sub_contacts" /></Link>
                    <Link to="/"><FormattedMessage id="dm_sub_support" /></Link>
                </SubMenu>
            </DashboardMenuContainer>
        </RightNavContainer>
    )
}

export default DashboardRightNav;


const RightNavContainer = styled.div<{open: boolean}>`
  z-index: 10;
  margin: 0;
  list-style: none;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: #000000;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 65vw;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const DashboardMenuContainer = styled.div`
  width: 260px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Logo = styled.img`
  width: 45%;
`;

const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  height: 280px;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: white;
  }
`;

const MenuItem= styled.div`
  font-size: 1.3em;
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.img`
  margin-right: 15px;
`;

const SubMenu = styled.nav`
  height: 160px;
  width: 125px;
  margin-bottom: 90px;
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
`;