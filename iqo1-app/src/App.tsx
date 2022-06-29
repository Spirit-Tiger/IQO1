import React, { Suspense, useEffect, useRef, useState } from 'react';
import './App.css';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/constants';
import{messages} from './i18n/eng';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Canvas, } from '@react-three/fiber';

import RenderGltf from './components/Model3D';
import MainPage from './pages/Main.Page';


function App() {

   const[locale, setLocale]= useState(LOCALES.ENGLISH);
   console.log(IntlProvider);


  return (
    <BrowserRouter>
      <IntlProvider messages={messages[locale]} locale={locale} >
          <MainPage />
            <StyledMessage>
              <FormattedMessage id="home" />
            </StyledMessage>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;

const StyledMessage = styled.p`
font-size: 4em;
`;





