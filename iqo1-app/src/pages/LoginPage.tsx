import React, { useState } from "react";
import { FormattedMessage} from "react-intl";
import styled from "styled-components";
import MainImg from '../images/main_background.webp';
import MobileMainImg from '../images/mobile_background.webp';
import LogoImg from '../images/logo.png';
import {Formik, Form, Field} from 'formik';
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import CloseBtnImg from "../images/close_btn.png"
import Footer from "components/Footer";

interface MyFormValues {
    login: string;
    password: string;
}


const LoginPage = () => {

  const initialValues: MyFormValues = { login:'',password:'' };
  const intl = useIntl();

  return (
        <>
            <LoginPageContainer>
                <Logo src={LogoImg} alt="logo" />
                <FormContainer>
                    <FlexContainer>
                        <div>
                            <Header>
                                <FormattedMessage id="auth_header" />
                            </Header>
                            <Text> 
                                <FormattedMessage id="auth_text" />
                            </Text>
                        </div>
                        <Link to="/"><CloseBtn></CloseBtn></Link>
                    </FlexContainer>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, actions) => {
                            console.log({ values, actions });
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }}
                    >
                        <FormikStyledForm>
                            <FormikStyledField name="login" placeholder={intl.formatMessage({id:"auth_login_name"})} />
                            <FormikStyledField autocomplete="off" list="autocompleteOff"  type="password" name="password" placeholder={intl.formatMessage({id:"auth_password"})} />
                            <ForgetPassButton>
                                <Link to="/">
                                    <FormattedMessage id="auth_forget_password" />
                                </Link>
                            </ForgetPassButton>
                            <LoginButton type="submit">
                                <FormattedMessage id="auth_login_btn" />
                            </LoginButton>
                            <RegistrationButton to="/registation">
                                <FormattedMessage id="auth_registration_btn" />
                            </RegistrationButton>
                        </FormikStyledForm>
                    </Formik>
                </FormContainer>
            </LoginPageContainer>
            <Footer />
        </>
  );
};

export default LoginPage;

const LoginPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    color: white;
    background: linear-gradient(243.18deg, rgba(255, 184, 0, 0.67) 28.65%, rgba(18, 24, 30, 0.67) 100%), url(${MainImg}) no-repeat center/cover ; 
    background-size: 130%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 375px){
        background: linear-gradient(243.18deg, rgba(255, 184, 0, 0.67) 28.65%, rgba(18, 24, 30, 0.67) 100%), url(${MobileMainImg}) no-repeat center/cover fixed; 
        background-size: 130%;
    }

    @media (min-width: 768px){
        width: 100vw;
        height: 100vh;
        max-width: 100%;
        color: white;
        background: linear-gradient(243.18deg, rgba(255, 184, 0, 0.67) 28.65%, rgba(18, 24, 30, 0.67) 100%), url(${MainImg}) no-repeat center/cover fixed; 
        background-size: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`;

const Logo = styled.img`

    margin: 30px 0 40px 0;

    @media (min-width: 375px) {
       width: 180px ;
    }

    @media (min-width: 768px) {
        width: 10%;
    }
`;

const FormContainer = styled.div`
    
    height: 65vh;
    background-color:rgba(38, 49, 61, 1);
    border-radius: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    box-shadow: 0 8px 4px rgba(0, 0, 0, 0.15);

    @media (min-width: 375px) {
       width: 90vw;
       justify-content: space-around;
    }

    @media (min-width: 768px) {
        width: 70vw;
        justify-content: space-evenly;
    }

    @media (min-width: 1080px) {
        width: 30vw;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    width: 85%;

    @media (max-width: 768px) {
        margin: 0;
    }
`;

const Header = styled.h2`
    margin: 0;
    
    @media (min-width: 375px) {
        font-size: 1.8em;
    }

    @media (min-width: 1080px) {
        font-size: 2em;
    }

    @media (min-width: 1400px) {
        font-size: 2.4em;
    }
`;

const Text = styled.p`
    margin: 5px 0;
    color:rgba(199, 199, 199, 1);
    

    @media (min-width: 375px) {
        font-size: 1em;
    }

    @media (min-width: 1080px) {
        font-size: 1.1em;
    }

    @media (min-width: 1400px) {
        font-size: 1.2em;
    }
`;

const CloseBtn = styled.div`
    background: url(${CloseBtnImg}) no-repeat center/cover; 
    margin-top: 5px;

    @media (min-width: 375px) {
        width: 24px;
        height: 24px;
    }

    @media (min-width: 768px) {
        width: 26px;
        height: 26px;
    }

    @media (min-width: 1400px) {
        width: 30px;
        height: 30px;
    }
`;

const FormikStyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 375px) {
        width: 85%;
        height: 42vh;
    }

    @media (min-width: 768px) {
        width: 75%;
        height: 38vh;
    }
`;

const FormikStyledField = styled(Field)`
    font-size:1.2em ;
    color: white;
    height: 40px;
    min-height: 35px;
    padding: 3px 25px;
    border-radius: 6px;
    border:1px solid rgba(255, 255, 255, 0.58) ;
    background-color: rgba(38, 49, 61, 1);

    @media (max-height: 700px){
        height: 30px;
        min-height: 25px;
        font-size:1.1em ;
    }
`;


const ForgetPassButton = styled.div`

    text-align: center;
    margin-bottom: -15px;
    a{
        color: white;
    }


`;

export const LoginButton = styled.button`
    color: #000000;
    font-size: 1.2em;
    font-weight: bold;
    border: none;
    background: linear-gradient(92.77deg, #FFB800 16.59%, #9D7100 97.23%);
    border-radius: 14px;
    height: 48px;
    margin-bottom: -10px;

    :hover {
        cursor: pointer;
    }

    @media (max-height: 700px){
        height: 42px;
        min-height: 30px;
        font-size:1.1em ;
    }
`;

const RegistrationButton = styled(Link)`
    color: white;
    font-size: 1.2em;
    height: 48px;
    text-decoration: none;
    border:1px solid rgba(255, 255, 255, 0.58) ;
    border-radius: 14px;
    background-color: rgba(38, 49, 61, 1);
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-height: 700px){
        height: 42px;
        min-height: 30px;
        font-size:1.1em ;
    }
`;

