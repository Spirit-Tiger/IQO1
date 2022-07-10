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
import Ellipse1 from "../images/ellipse_1.png";

const MainContent = () => { 

    return (
        <WorkWithUsFrame>
            <EllipseImage />
            <FlexContainer>
                <HeadContainer>
                    <Head><FormattedMessage id="work_header" /></Head>
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
    /* position: relative; */
    display: flex;
    @media (min-width: 768px) {
       width: 67.8vw;
    }
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
    width: 67.8vw;
    align-items: center;
    justify-content: space-between;
    /* flex-wrap: wrap; */

    @media (min-width: 320px) {
        width: 100%;
        flex-direction: column;
        justify-content: center;
    }
    @media (min-width: 1280px) {
        width: 100%;
        flex-direction: row;
        justify-content: center;
    }

`;

const WorkWithUsFrame = styled.div`
    /* position: relative; */
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

const PhoneContainer = styled.div`
    margin-top: 20px;
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
        width: 29.5vw;
        height: 29.5vw;
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
        width: 20.833333333333332vw;
        height: 20.833333333333332vw;
        margin: -15.625vw 3.90625vw 0 0;
    }



`

const PhoneWrap = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    max-width: 580px;
    flex-direction: column;  
`
const TextBlockWrap = styled.div`
    

    @media (min-width: 320px) {
        display:flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        max-width: 680px;
        width: 100%;
        flex-direction: column;
        margin-top: 40px
    }

    @media (min-width: 768px) {
        width: 33.5vw;
        margin-top: 0;
    }
`

const EllipseImage = styled.div`
    position: absolute;
    background: url(${Ellipse1}) no-repeat left/contain;
  
    @media (min-width: 375px){
        width: 100%;
        height:50%;
        bottom: -20%;
        left: 0;
    
        z-index: 1;
    }

    @media (min-width: 768px){
        width: 450px;
        height:1000px;
        margin-top: -240px;
        top:0;
        left:0;
        z-index: 0;
    }
  
`;