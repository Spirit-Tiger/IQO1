import React, { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import{messages} from '../i18n/eng';
import { LOCALES } from "../i18n/constants";
import styled from "styled-components";
import { Canvas } from '@react-three/fiber';
import RenderGltf from "./Model3D";
import PhoneImg from '../images/phone.png';
import WorkTextBlock from "./WorkTextBlock";
import GradientButton from "./GradientButton";

const MainContent = () => { 

    return (
        <WorkWithUsFrame>
            <FlexContainer>
                <HeadContainer>
                    <Head><FormattedMessage id="work_header" /></Head>
                    <WorkParagraph><FormattedMessage id="work_header__p"/></WorkParagraph>
                </HeadContainer>
                <MainContentContainer>
                    <PhoneWrap>
                        <PhoneContainer>
                            <EthContainer>
                                <Canvas>
                                    <RenderGltf shadow={true} scale={1.5} version={2} /> 
                                </Canvas>
                            </EthContainer>
                        </PhoneContainer>
                        <GradientButton textId="work_btn" />
                    </PhoneWrap>
                    <TextBlockWrap>
                        <WorkTextBlock/>
                    </TextBlockWrap>
                </MainContentContainer>
            </FlexContainer>
        </WorkWithUsFrame>
    )

}

export default MainContent;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Head = styled.h2`
    color:  #FFFFFF;
    margin: 0;

    @media (min-width: 768px) {
        font-size: 2em;
        line-height: 54px;
        align-self: flex-start;
    }
   
`

const HeadContainer = styled.div`
    @media (min-width: 320px) {
        margin: 40px 0 0 40px;
    }
    @media (min-width: 768px) {
        margin: 60px 0 0 0;
    }
    @media (min-width: 1080px) {
        margin: 80px 0 40px 0;
    }
    
`
const MainContentContainer = styled.div`
    display: flex;
    height: 100% ;
    width: 1300px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 1300px) {
        width: 100%;
        flex-direction: column;
        justify-content: center;
    }

`;

const WorkWithUsFrame = styled.div`
    width: 100vw;
    height: 100%;
    max-width: 100%;
    background: #12181E; 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
`
const WorkParagraph = styled.p`
    font-size: 16px;
    color: #7D7D7D;
    margin: 0;
`
const PhoneContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background:url(${PhoneImg}) no-repeat center/contain;

    @media (min-width: 320px) {
        width: 320px ;
        height: 400px;
        background-position:  top 60px right 0;
    }

    @media (min-width: 768px) {
        width: 567px;
        height: 590px;
        background-position:  0;
    }   
`
const EthContainer = styled.div`
    @media (min-width: 320px) {
        width: 100% ;
        margin: -100px 35px 0 0;
        height: 60%;
    }

    @media (min-width: 768px) {
        width: 400px;
        height: 400px;
        margin: -300px 75px 0 0;
    }



`

const PhoneWrap = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 580px;
    flex-direction: column;  
`
const TextBlockWrap = styled.div`
    

    @media (min-width: 320px) {
        margin-top: 40px
    }

    @media (min-width: 768px) {
        display:flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        max-width: 680px;
        width: 100%;
        flex-direction: column;
        margin-top: 0;
    }
`