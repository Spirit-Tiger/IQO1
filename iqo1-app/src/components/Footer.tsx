import React, { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import{messages} from '../i18n/eng';
import { LOCALES } from "../i18n/constants";
import styled from "styled-components";


const Footer = () => {

  const[locale, setLocale]= useState(LOCALES.ENGLISH);

  return (
    <IntlProvider messages={messages[locale]} locale={locale} >
        <FooterContainer>
            <FormattedMessage id="footer"/>
        </FooterContainer>
    </IntlProvider>
  );
};

export default Footer;

const FooterContainer = styled.div`
    
`;
