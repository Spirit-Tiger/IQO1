import React, { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import{messages} from '../i18n/eng';
import { LOCALES } from "../i18n/constants";
import styled from "styled-components";
import LogoImg from "../images/logo.png";

const Header = () => {

  const[locale, setLocale]= useState(LOCALES.ENGLISH);
  return (
    <IntlProvider messages={messages[locale]} locale={locale} >
        <HeaderContainer>
            <LogoImageContainer></LogoImageContainer>
            <NavContainer>
                <div><FormattedMessage id="home" /></div>
                <div><FormattedMessage id="about_us" /></div>
                <div><FormattedMessage id="company" /></div>
                <div><FormattedMessage id="contacts" /></div>
            </NavContainer>
            <LoginButtonContainer>
                <div><FormattedMessage id="language_change1"/></div>
                <div>/</div>
                <div><FormattedMessage id="language_change2"/></div>
                <LoginButton>
                    <FormattedMessage id="login_btn" />
                </LoginButton>
            </LoginButtonContainer>
        </HeaderContainer>
    </IntlProvider>
  );
};

export default Header;

const HeaderContainer = styled.div`
    width: 1300px;
    height: 120px;
    color: white;
    display: flex;
    justify-content: space-between ;
    align-items: center;

    @media (min-width: 320px) {
        min-width: 320px;
        height: 100px;
        justify-content: center ;
        width: 100%;
    }

    @media (min-width: 768px) {
        width: 1300px;
    height: 120px;
    color: white;
    display: flex;
    justify-content: space-between ;
    align-items: center;
    }
    
`;

const NavContainer = styled.div`
    width: 24vw;
    min-width: 450px;
    display: flex;
    justify-content: space-between ;

    @media (min-width: 320px) {
       display: none;
    }

    @media (min-width: 768px) {
    width: 24vw;
    min-width: 450px;
    display: flex;
    justify-content: space-between ;
    }

`;

const LoginButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 210px;
    @media (min-width: 320px) {
        display: none;
    }

    @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 210px;
    }
`;

const LoginButton = styled.button`
    border-radius: none;
    border:2px solid white;
    background: none;
    color: white;
    font-size:0.9em;
    font-weight: bold;
    height: 40px;
    width: 90px;

    :hover{
        cursor: pointer;
    }
`;

const LogoImageContainer = styled.div`

    @media (min-width: 320px) {
    width: 125px;
    height: 56px;
    background: url(${LogoImg}) no-repeat center/cover;
        }

    @media (min-width: 768px) {
       display: none;
     }
`;
