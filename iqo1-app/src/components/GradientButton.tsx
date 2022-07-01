import React, { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import{messages} from '../i18n/eng';
import { LOCALES } from "../i18n/constants";
import styled from "styled-components";

interface GradientButtonProps {
    textId: string,
}

const GradientButton = ({textId}:GradientButtonProps) => {

  const[locale, setLocale]= useState(LOCALES.ENGLISH);

  return (
    <IntlProvider messages={messages[locale]} locale={locale} >
        <GradientButtonStyle>
            <FormattedMessage id={textId}/>
        </GradientButtonStyle>
    </IntlProvider>
  );
};

export default GradientButton;

const GradientButtonStyle = styled.button`
    color: white;
    font-weight: bold;
    border: none;
    background: linear-gradient(92.77deg, #FFB800 16.59%, #9D7100 97.23%);
    border-radius: 8px;
    height: 40px;
    width: 180px;

    :hover {
        cursor: pointer;
    }
`;
