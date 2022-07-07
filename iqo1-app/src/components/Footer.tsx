import React, { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import{messages} from '../i18n/eng';
import { LOCALES } from "../i18n/constants";
import styled from "styled-components";
import VisaImg from '../images/visa.png';
import MasterCardImg from "../images/mastercard.png";


const Footer = () => {

  const[locale, setLocale]= useState(LOCALES.ENGLISH);

  return (
    <IntlProvider messages={messages[locale]} locale={locale} >
        <FooterContainer>
          <FooterContent>
              <div><FormattedMessage id="footer_text"/></div>
              <ImagesContainer>
                <VisaImage src={VisaImg} />
                <MasterCardImage src={MasterCardImg}/>
              </ImagesContainer>
          </FooterContent>
        </FooterContainer>
    </IntlProvider>
  );
};

export default Footer;

const FooterContainer = styled.div`
    color:white;  
    height: 128px;
    background-color: rgba(30, 30, 30, 1);
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media (min-width:320px){
      height: 162px;
    }

    @media (min-width:768px){
      height: 128px;
    }
`;

const FooterContent = styled.div`

    border-top: 1px solid rgba(220, 227, 237, 1);
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (min-width:320px){
        font-size: 0.5em;
        margin-bottom: 10px;
        width: 80%;
        flex-direction: column-reverse;
    }

    @media (min-width:768px){
        font-size: 0.9em;
        margin-bottom: 0;
        width: 100%;
        flex-direction: row;
    }
`;

const ImagesContainer = styled.div`
    display: flex;
    align-items: center;
    z-index: 2;

    @media (min-width:320px){
        margin:5px 20px 25px 0;
    }

    @media (min-width:768px){
        margin: 0;
    }
`;

const VisaImage = styled.img`
    filter: grayscale(100%);

    :hover {
        filter: grayscale(0);
    }
`;

const MasterCardImage = styled.img`
    filter: grayscale(100%);

    :hover {
        filter: grayscale(0);
    }
`;
