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
        </WorkWithUsFrame>
    )

}

export default MainContent;

const Head = styled.h2`
font-size:32px;
line-height: 54px;
color:  #FFFFFF;
margin: 0;
`

const HeadContainer = styled.div`
margin: 80px 0 0 310px;
@media (min-width: 350px) {
    margin: 40px 0 0 40px;
  }
@media (min-width: 768px) {
    margin: 60px 0 0 140px;
}
@media (min-width: 1080px) {
    margin: 80px 0 0 310px;
}
    
`
const MainContentContainer = styled.div`
display: flex;
justify-content: space-around;
height: 100% ;
flex-wrap: wrap ;
align-items: center;
flex-direction: row;

`;

const WorkWithUsFrame = styled.div`
width: 100vw;
height: 100%;
max-width: 100%;
background: #12181E; 
display: flex;
flex-direction: column;
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
width: 567px;
height: 567px;
background:url(${PhoneImg}) no-repeat center/contain;
@media (min-width: 350px) {
    width: 350px ;
  }
@media (min-width: 768px) {
width: 750px ;
}
`
const EthContainer = styled.div`
width: 400px;
height: 400px;
margin: 0 45px 250px 0;
`

export const Btn = styled.button`
  background: linear-gradient(to left, #967113, #FFB800);
  display: block;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 8px;
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
display:flex;
justify-content: center;
align-items: center;
height: 100%;
max-width: 680px;
width: 100%;
flex-direction: column;
`