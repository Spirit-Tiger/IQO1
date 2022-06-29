import React, { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import{messages} from '../i18n/eng';
import { LOCALES } from "../i18n/constants";
import styled from "styled-components";

const Header = () => {

  const[locale, setLocale]= useState(LOCALES.ENGLISH);
  return (
    <IntlProvider messages={messages[locale]} locale={locale} >
        <HeaderContainer>
            <NavContainer>
                <div><FormattedMessage id="home" /></div>
                <div><FormattedMessage id="pages" /></div>
                <div><FormattedMessage id="terms" /></div>
                <div><FormattedMessage id="blog" /></div>
                <div><FormattedMessage id="contacts" /></div>
            </NavContainer>
            <LoginButtonContainer>
                <div>eng</div>
                <LoginButton>Login</LoginButton>
            </LoginButtonContainer>
        </HeaderContainer>
    </IntlProvider>
  );
};

export default Header;

const HeaderContainer = styled.div`
height: 120px;
color: white;
display: flex;
justify-content: space-between ;
align-items: center;
`;

const NavContainer = styled.div`
width: 30vw;
display: flex;
justify-content: space-between ;
margin-left: 300px;
`;

const LoginButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    margin-right: 300px;
`;

const LoginButton = styled.button`
border-radius: none;
border:2px solid white;
background: none;
color: white;
font-weight: bold;
height: 40px;
width: 90px;

:hover{
    cursor: pointer;
}
`;
