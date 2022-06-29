import React, { Suspense, useEffect, useRef, useState } from 'react';
import './App.css';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/constants';
import{messages} from './i18n/eng';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Canvas, } from '@react-three/fiber';

import RenderGltf from './components/Model3D';

import MainImg from "./main_background.png";
import MainPage from './pages/Main.Page';


function App() {

   const[locale, setLocale]= useState(LOCALES.ENGLISH);
   console.log(IntlProvider);


  return (
    <BrowserRouter>
      <IntlProvider messages={messages[locale]} locale={locale} >
        <MainFrame>
          <MainPage />
          <MainContentContainer>
            <MainTextContainer>12345</MainTextContainer>
          <CanvasContainer>
            <Canvas>
                <RenderGltf /> 
            </Canvas>
          </CanvasContainer>
          </MainContentContainer>
            <StyledMessage>
              <FormattedMessage id="home" />
            </StyledMessage>
        </MainFrame>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;

const StyledMessage = styled.p`
font-size: 4em;
`;

const MainFrame = styled.div`
width: 100vw;
height: 100vh;
max-width: 100%;
background: linear-gradient(254.61deg, rgba(255, 184, 0, 0.81) 0%, rgba(15, 23, 30, 0.92) 80.94%), url(${MainImg}) no-repeat center/cover; 
display: flex;
flex-direction: column;
`;

const MainContentContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const MainTextContainer = styled.div`
display: flex;
width: 500px;
`;

const CanvasContainer = styled.div`
width: 400px;
height: 600px;
margin-right: 200px;
`;