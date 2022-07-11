import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import GradientButton from "./GradientButton";
import Ellipse2 from "../images/ellipse_2.png";

const InfoFrame = () => {

  return (
    <ThirdFrameContainer>
        <EllipseImage src={Ellipse2}/>
        <LeftNumber>415-650</LeftNumber>
        <FlexContainer>
            <HeaderContainer>
                <ThirdFrameHeader>
                    <div><FormattedMessage id="about_our_company" /></div>
                </ThirdFrameHeader>
            </HeaderContainer>
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
  );
};

export default InfoFrame;

const ThirdFrameContainer= styled.div`
    position: relative;
    width: 100vw;
    max-width: 100%;
    padding-top: 80px;
    background-color: #12181E;
    color: white;
    display: flex;
    justify-content: center;

    @media (max-width: 768px){
        overflow: hidden;
    }
`;

const FlexContainer= styled.div`
    position: relative;
    z-index: 2;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`;

const HeaderContainer = styled.div`
    align-self: flex-start;

    @media (min-width:320px) {
        width: 82vw;
    }

    @media (min-width:768px) {
        width: 67.8vw;
    }


`;

const ThirdFrameHeader = styled.h2`
    margin: 0;

    @media (min-width:320px) {
        font-size: 1.5em;
    }

    @media (min-width:768px) {
        font-size: 2em;
    }

  
`;


const InfoContainer = styled.div`
    width: 67.8vw;
    display: flex ;
    justify-content: space-between;

    @media (min-width:320px) {
        width: 82vw;
        flex-direction: column;
    }

    @media (min-width:768px) {
        width: 67.8vw;
        flex-direction: row;
    }

`;

const InfoBlockContainer = styled.div`
    display: flex ;
    flex-direction: column;
    align-items: center;
    

    @media (min-width:320px) {
        margin-top: 30px;
    }

    @media (min-width:768px) {
        margin-top: 70px;
    }
`;

const InfoBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.32);
    font-size: 4em;
    border: 1px solid;
    border-image-slice:1 ;
    border-image-source: linear-gradient( rgba(255, 255, 255, 0.7) 0 15%, rgba(0, 0, 0, 0.5) 40% 65%,rgba(255, 255, 255, 1));

    @media (min-width:320px) {
        width: 100%;
        height: 25vh;
    }

    @media (min-width:768px) {
        width: 21.9vw;
        height: 21.7vh;
    }

`;

const InfoText = styled.p`

`;

const LeftNumber = styled.div`
    font-size: 3em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 190px;

    @media (max-width: 1300px) {
        display: none;
    }
`;

const Description = styled.p`
    width: 67.8vw;
    margin: 60px 0;

    @media (min-width: 320px) {
        width: 82vw;
    }

    @media (min-width: 768px) {
         width: 67.8vw;
    }
`;

const EllipseImage = styled.img`
    position: absolute;

    @media (min-width: 375px){
        width: 500px;
        top:9%;
        right:0;
        opacity: 0.8;
    }

    @media (min-width: 768px){
        width: 750px;
        margin-top: -450px;
        top:0;
        right:0;
        opacity: 1;
    }
`;

