import React,{useState} from 'react';
import { FormattedMessage} from "react-intl";
import styled from 'styled-components';
import { Link } from "react-router-dom";

interface RightNavProps {
    open: boolean,
}

const RightNav = ({ open }:RightNavProps) => {

  return (
        <RightNavContainer open={open}>
                <NavList>
                    <Link to="login">
                        <LoginButton>
                            <FormattedMessage id="login_btn" />
                        </LoginButton>
                    </Link>
                    <Link to="dashboard"><FormattedMessage id="home" /></Link>
                    <div><FormattedMessage id="about_us" /></div>
                    <div><FormattedMessage id="terms" /></div>
                    <div><FormattedMessage id="contacts" /></div>
                    <HorizontalLine />
                    <LanguageOptions>
                        <div><FormattedMessage id="language_change1"/></div>
                        <div>/</div>
                        <div><FormattedMessage id="language_change2"/></div>
                    </LanguageOptions>
                </NavList>
        </RightNavContainer>
  )
}

export default RightNav;


const RightNavContainer = styled.div<{open: boolean}>`
  z-index: 10;
  margin: 0;
  list-style: none;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: #161616;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 55vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const NavList = styled.ul`
    width: 70%;
    height: 350px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    a {
        color: white;
        text-decoration: none;
    }
`;

const HorizontalLine = styled.div`
    width: 100%;
    margin-top: 80px;
    border-bottom: 2px solid #545454;
`;

const LoginButton = styled.button`
    border-radius: none;
    border:2px solid white;
    background: none;
    color: white;
    font-size:0.9em;
    font-weight: bold;
    height: 40px;
    width: 120px;
    margin-bottom: 25px;

    :hover{
        cursor: pointer;
    }
`;

const LanguageOptions = styled.div`
    display: flex;
    align-self: flex-start;

    div{
        margin-right: 5px;
    }
`;