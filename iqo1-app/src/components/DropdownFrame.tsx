import React, { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import{messages} from '../i18n/eng';
import { LOCALES } from "../i18n/constants";
import styled from "styled-components";
import DropdownElement from "./DropdownElement";
import GradientButton from "./GradientButton";



const DropdownFrame = () => {

  const[locale, setLocale]= useState(LOCALES.ENGLISH);

  return (
    <IntlProvider messages={messages[locale]} locale={locale} >
        <DropdownFrameContainer>
            <ContentContainer>
                <DropdownFrameHeader>
                    <FormattedMessage id="faq_header" />
                </DropdownFrameHeader>
                <DropdownFrameText>
                    <FormattedMessage id="faq_text" />
                </DropdownFrameText>
                <AllDropdowns>
                    <LeftDropdowns>
                        <DropdownElement headerId="faq_header_1" textId="faq_text_1" />
                        <DropdownElement headerId="faq_header_2" textId="faq_text_2" />
                        <DropdownElement headerId="faq_header_3" textId="faq_text_3" />
                    </LeftDropdowns>
                    <RightDropdowns>
                        <DropdownElement headerId="faq_header_4" textId="faq_text_4" />
                        <DropdownElement headerId="faq_header_5" textId="faq_text_5" />
                        <DropdownElement headerId="faq_header_6" textId="faq_text_6" />
                    </RightDropdowns>
                </AllDropdowns>
                <GradientButton textId="faq_btn"/>
            </ContentContainer>
        </DropdownFrameContainer>
    </IntlProvider>
  );
};

export default DropdownFrame;

const DropdownFrameContainer = styled.div`
    width: 100vw;
    max-width: 100%;
    background-color: #12181E;
    color: white;
    display: flex;
    justify-content: center;

    @media (min-width:320px) {
        padding-top: 80px;
    }

    @media (min-width:768px) {
        padding-top: 150px;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 67.8vw;
`;

const LeftDropdowns = styled.div`
`;

const RightDropdowns = styled.div`
`;

const AllDropdowns = styled.div`
    width: 67.8vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width:320px) {
        width: 82vw;
        margin-top: 50px;
        margin-bottom: 20px;
        flex-direction: column;
    }
    @media (min-width:768px) {
        width: 82vw;
        margin-top: 100px;
        flex-direction: row;
       
    }
    @media (min-width:1080px) {
        width: 67.8vw;
        flex-direction: row;
    }
`;


const DropdownFrameHeader = styled.h2`
    @media (min-width:320px) {
        font-size: 1.5em;
    }

    @media (min-width:768px) {
        font-size: 2em;
        margin: 0;
        align-self: flex-start;
    }
`;

const DropdownFrameText = styled.p`
    margin: 0;

    @media (min-width:320px) {
        width: 82vw;
    }

    @media (min-width:768px) {
        align-self: flex-start;
    }
`;