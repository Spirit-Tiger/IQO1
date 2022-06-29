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
                <FormattedMessage id="slogan"/>
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
display: flex;
width: 500px;
margin-left: 300px;
`;

const MainTextHeader = styled.div`
display: flex;
width: 500px;
margin-left: 300px;
`;

const CanvasContainer = styled.div`
width: 400px;
height: 600px;
margin-right: 200px;
`;