import React, { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import{messages} from '../i18n/eng';
import { LOCALES } from "../i18n/constants";
import styled from "styled-components";
import GradientButton from "./GradientButton";

const InfoFrame = () => {

  const[locale, setLocale]= useState(LOCALES.ENGLISH);

  return (
    <IntlProvider messages={messages[locale]} locale={locale} >
            <ThirdFrameContainer>
                <LeftNumber>1.5k</LeftNumber>
                <FlexContainer>
                    <ThirdFrameHeader>
                        <div><FormattedMessage id="about_our_company" /></div>
                    </ThirdFrameHeader>
                    <ThirdFrameText>
                        <div><FormattedMessage id="fill_text" /></div>
                    </ThirdFrameText>
                    <InfoContainer>
                        <InfoBlockContainer>
                            <InfoBlock>415</InfoBlock>
                            <InfoText>
                                <div><FormattedMessage id="active_clients" /></div>
                            </InfoText>
                        </InfoBlockContainer>
                        <InfoBlockContainer>
                            <InfoBlock> {'>'}100 </InfoBlock>
                            <InfoText>
                                <div><FormattedMessage id="tokens_trading" /></div>
                            </InfoText>
                        </InfoBlockContainer>
                            <InfoBlockContainer>
                            <InfoBlock>14</InfoBlock>
                            <InfoText>
                                <div><FormattedMessage id="traders_in_company" /></div>
                            </InfoText>
                        </InfoBlockContainer>
                    </InfoContainer>
                    <Description>
                        <div><FormattedMessage id="description" /></div>
                    </Description>
                    <GradientButton textId="read_more_btn" />
                </FlexContainer>
                <LeftNumber></LeftNumber>
            </ThirdFrameContainer>
    </IntlProvider>
  );
};

export default InfoFrame;

const ThirdFrameContainer= styled.div`
    width: 100vw;
    max-width: 100%;
    padding-top: 80px;
    background-color: #12181E;
    color: white;
    display: flex;
    justify-content: center;
`;

const FlexContainer= styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
   
`;

const ThirdFrameHeader = styled.h2`
    margin: 0;
    align-self: flex-start;
`;

const ThirdFrameText = styled.p`
    margin: 0;
    align-self: flex-start;
`;

const InfoContainer = styled.div`
    width: 67.8vw;
    display: flex ;
    justify-content: space-between;
`;

const InfoBlockContainer = styled.div`
    display: flex ;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
`;

const InfoBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 21.9vw;
    height: 21.7vh;
    background: rgba(0, 0, 0, 0.32);
    font-size: 4em;
    border: 1px solid;
    border-image-slice:1 ;
    border-image-source: linear-gradient( rgba(255, 255, 255, 0.7) 0 15%, rgba(0, 0, 0, 0.5) 40% 65%,rgba(255, 255, 255, 1));
`;

const InfoText = styled.p`

`;

const LeftNumber = styled.div`
    font-size: 4em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 280px;

`;

const Description = styled.p`
    margin: 60px 0;
`;

