import React, { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import{messages} from '../i18n/eng';
import { LOCALES } from "../i18n/constants";
import styled from "styled-components";
import { Canvas, } from '@react-three/fiber';
import RenderGltf from "./Model3D";

const MainContent = () => {

  const[locale, setLocale]= useState(LOCALES.ENGLISH);

  return (
    <IntlProvider messages={messages[locale]} locale={locale} >
        <MainContentContainer>
            <MainTextContainer>
                <MainTextHeader>
                    <FormattedMessage id="slogan_header"/>
                </MainTextHeader>
                <MainText>
                    <FormattedMessage id="slogan_text"/>
                </MainText>
                <GetStartedButton>
                    <FormattedMessage id="starting_btn"/>
                </GetStartedButton>
                <MockCaruselChange>
                    <Mock1></Mock1>
                    <Mock2></Mock2>
                    <Mock3></Mock3>
                </MockCaruselChange>
            </MainTextContainer>
            <CanvasContainer>
                <Canvas>
                    <RenderGltf /> 
                </Canvas>
            </CanvasContainer>
        </MainContentContainer>
    </IntlProvider>
  );
};

export default MainContent;

const MainContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: calc(100vh - 120px) ;
    align-items: center;
`;

const MainTextContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: column ;
    width: 600px;
    margin-left: 300px;
`;

const MainTextHeader = styled.h1`
    font-size:3.2em ;
    margin: 0;

`;

const MainText = styled.p`
    font-size:1.6em ;
    margin: 0;
`;

const CanvasContainer = styled.div`
    width: 400px;
    height: 600px;
    margin-right: 300px;
`;

const GetStartedButton = styled.button`
    color: white;
    font-weight: bold;
    border: none;
    background: linear-gradient(92.77deg, #FFB800 16.59%, #9D7100 97.23%);
    border-radius: 8px;
    height: 40px;
    width: 180px;
    margin-top: 60px;

    :hover {
        cursor: pointer;
    }
`;

const MockCaruselChange = styled.div`
    display:flex;
    margin-top: 200px;
    align-items: center;
`;

const Mock1 =styled.div`
    width: 84px;
    margin-right:8px ;
    border:2px solid #FFB800;
    border-radius: 10px;
`;

const Mock2 =styled.div`
    width: 84px;
    margin-right:8px ;
    border:1px solid #808080;
    
`;

const Mock3 =styled.div`
    width: 84px;
    margin-right:8px ;
    border:1px solid #808080;
    height: 0px;
`;