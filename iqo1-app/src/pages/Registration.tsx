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

const Registration = () => {
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
                <FormattedMessage id="registration_header" />
              </Header>
              <Text>
                <FormattedMessage id="registration_text" />
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
              <FieldGroup>
                <FormikHalfField
                  name="name"
                  placeholder={intl.formatMessage({
                    id: "registration_first_name",
                  })}
                />
                <FormikHalfField
                  autocomplete="off"
                  list="autocompleteOff"
                  type="text"
                  name="surname"
                  placeholder={intl.formatMessage({
                    id: "registration_last_name",
                  })}
                />
              </FieldGroup>
              <FieldGroup>
                <FormikOneThirdField
                  autocomplete="off"
                  list="autocompleteOff"
                  type="text"
                  name="country"
                  placeholder={intl.formatMessage({
                    id: "registration_country",
                  })}
                />
                <FormikTwoThirdField
                  autocomplete="off"
                  list="autocompleteOff"
                  type="phone"
                  name="phone"
                  placeholder={intl.formatMessage({
                    id: "registration_phone_number",
                  })}
                />
              </FieldGroup>

              <FormikStyledField
                autocomplete="off"
                list="autocompleteOff"
                type="email"
                name="email"
                placeholder={intl.formatMessage({ id: "registration_email" })}
              />
              <FieldGroup>
                <FormikHalfField
                  autocomplete="off"
                  list="autocompleteOff"
                  type="text"
                  name="login"
                  placeholder={intl.formatMessage({
                    id: "registration_login_name",
                  })}
                />
                <FormikHalfField
                  autocomplete="off"
                  list="autocompleteOff"
                  type="password"
                  name="password"
                  placeholder={intl.formatMessage({
                    id: "registration_password",
                  })}
                />
              </FieldGroup>

              <RegistrationButton to="/">
                <FormattedMessage id="registration_btn" />
              </RegistrationButton>
            </FormikStyledForm>
          </Formik>
        </FormContainer>
      </LoginPageContainer>
      <Footer />
    </>
  );
};

export default Registration;

const FieldGroup = styled.div`
  justify-content: center;
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 15px 30px;
  }
  @media (min-width: 1080px) {
    display: flex;
    flex-direction: row;
    gap: 15px 30px;
  }
`;

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
    height: 100%;
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
    margin: 30px 0 40px 0;
  }
`;

const FormContainer = styled.div`
  height: 100%;
  background-color: rgba(38, 49, 61, 1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 8px 4px rgba(0, 0, 0, 0.15);

  @media (min-width: 350px) {
    width: 90vw;
    margin: 0px 10px 30px 10px;
  }

  @media (min-width: 768px) {
    width: 70vw;
  }

  @media (min-width: 1080px) {
    min-height: 580px;
    width: 690px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;

  @media (min-width: 375px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    width: 85%;
  }
`;

const Header = styled.h2`
  margin: 0;
  font-size: 2.4em;
`;

const Text = styled.p`
  margin: 5px 0;
  color: rgba(199, 199, 199, 1);
  font-size: 1.2em;
`;

const CloseBtn = styled.div`
  background: url(${CloseBtnImg}) no-repeat center/cover;

  @media (min-width: 375px) {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const FormikStyledForm = styled(Form)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 0;
  row-gap: 15px;
  @media (min-width: 375px) {
    width: 85%;
  }

  @media (min-width: 768px) {
    width: 75%;
  }
`;
const FormikHalfField = styled(Field)`
  font-size: 1.2em;
  color: white;
  height: 40px;
  min-height: 35px;
  padding: 3px 25px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.58);
  background-color: rgba(38, 49, 61, 1);
  @media (min-width: 320px) {
    width: auto;
  }
  @media (min-width: 1080px) {
    width: 50%;
  }
`;
const FormikOneThirdField = styled(Field)`
  font-size: 1.2em;
  color: white;
  height: 40px;
  min-height: 35px;
  padding: 3px 25px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.58);
  background-color: rgba(38, 49, 61, 1);
  flex: 1 1 auto;
  @media (min-width: 320px) {
    width: auto;
  }
  @media (min-width: 1080px) {
    width: 50%;
  }
`;
const FormikTwoThirdField = styled(Field)`
  font-size: 1.2em;
  color: white;
  height: 40px;
  min-height: 35px;
  padding: 3px 25px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.58);
  background-color: rgba(38, 49, 61, 1);
  width: auto;
  flex: 2 1 auto;
`;
const FormikStyledField = styled(Field)`
  font-size: 1.2em;
  color: white;
  height: 40px;
  min-height: 35px;
  padding: 3px 25px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.58);
  background-color: rgba(38, 49, 61, 1);
`;

export const LoginButton = styled.button`
  color: #000000;
  font-size: 1.2em;
  font-weight: bold;
  border: none;
  background: linear-gradient(92.77deg, #ffb800 16.59%, #9d7100 97.23%);
  border-radius: 14px;
  height: 48px;
  margin-bottom: -10px;

  :hover {
    cursor: pointer;
  }
`;

const RegistrationButton = styled(Link)`
  color: black;
  font-weight: 500;
  font-size: 1.2em;
  height: 48px;
  text-decoration: none;
  border-radius: 14px;
  background: linear-gradient(92.77deg, #ffb800 16.59%, #ff9900 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 320px) {
    margin-top: 10px;
  }
  @media (min-width: 769px) {
    margin-top: 20px;
  }
`;
