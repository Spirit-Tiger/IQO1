import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import MainImg from "../images/main_background.webp";
import MobileMainImg from "../images/mobile_background.webp";
import LogoImg from "../images/logo.png";
import { Formik, Form, Field } from "formik";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import CloseBtnImg from "../images/close_btn.png";
import Footer from "components/Footer";

interface MyFormValues {
  login: string;
  password: string;
}

const LoginPage = () => {
  const initialValues: MyFormValues = { login: "", password: "" };
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
            <Link to="/">
              <CloseBtn></CloseBtn>
            </Link>
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
              <FormikStyledField
                name="login"
                placeholder={intl.formatMessage({ id: "auth_login_name" })}
              />
              <FormikStyledField
                autocomplete="off"
                list="autocompleteOff"
                type="password"
                name="password"
                placeholder={intl.formatMessage({ id: "auth_password" })}
              />
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
  min-height: 100vh;
  max-width: 100%;
  color: white;
  background: linear-gradient(
      243.18deg,
      rgba(255, 184, 0, 0.67) 28.65%,
      rgba(18, 24, 30, 0.67) 100%
    ),
    url(${MainImg}) no-repeat center/cover;
  background-size: 130%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 320px) {
    background: linear-gradient(
        243.18deg,
        rgba(255, 184, 0, 0.67) 28.65%,
        rgba(18, 24, 30, 0.67) 100%
      ),
      url(${MobileMainImg}) no-repeat center/cover fixed;
    background-size: 130%;
  }

  @media (min-width: 768px) {
    width: 100vw;
    min-height: 100vh;
    max-width: 100%;
    color: white;
    background: linear-gradient(
        243.18deg,
        rgba(255, 184, 0, 0.67) 28.65%,
        rgba(18, 24, 30, 0.67) 100%
      ),
      url(${MainImg}) no-repeat center/cover fixed;
    background-size: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.img`
  @media (min-width: 320px) {
    width: 160px;
    margin: 20px 0 25px 0;
  }

  @media (min-width: 768px) {
    width: 10%;
    min-width: 150px;
    margin: 30px 0 40px 0;
  }
`;

const FormContainer = styled.div`
  background-color: rgba(38, 49, 61, 1);
  border-radius: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 4px rgba(0, 0, 0, 0.15);
 

  @media (min-width: 320px) {
    padding: 33px 24px;
    width: calc(315px - 48px);
    height: calc(490px - 66px);
   
  }

  @media (min-width: 768px) {
    width: calc(510px - 96px);
    height: calc(600px - 120px);
    padding: 60px 48px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  width: 100%;
  position: relative;
`;

const Header = styled.h2`
  margin: 0;

  @media (min-width: 320px) {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const Text = styled.p`
  margin: 5px 0;
  color: rgba(199, 199, 199, 1);

  @media (min-width: 320px) {
    font-size: 14px;
    margin-top: 15px;
    position: absolute;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    margin-top: 0;
  }
`;

const CloseBtn = styled.div`
  background: url(${CloseBtnImg}) no-repeat center/cover;
  margin-top: 5px;

  @media (min-width: 320px) {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const FormikStyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 320px) {
    width: 100%;
    margin-top: 60px;
    height: 340px;
  }

  @media (min-width: 768px) {
    margin-top: 54px;
    width: 330px;
    height: 340px;
  }
`;

const FormikStyledField = styled(Field)`
  font-size: 1.2em;
  color: white;
  height: 37px;
  min-height: 35px;
  padding: 3px 25px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.58);
  background-color: rgba(38, 49, 61, 1);
`;

const ForgetPassButton = styled.div`
  text-align: center;
  margin-top: 20px;
  font-weight: 500;
font-size: 14px;
  margin-bottom: -15px;
  a {
    color: white;
  }
`;

export const LoginButton = styled.button`
  color: #000000;
  font-size: 1.2em;
  font-weight: bold;
  border: none;
  background: linear-gradient(92.77deg, #ffb800 16.59%, #9d7100 97.23%);
  border-radius: 14px;
  height: 45px;
  margin-bottom: -10px;

  :hover {
    cursor: pointer;
  }

`;

const RegistrationButton = styled(Link)`
  color: white;
  font-size: 1.2em;
  height: 45px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.58);
  border-radius: 14px;
  background-color: rgba(38, 49, 61, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`;
