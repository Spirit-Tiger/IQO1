import React, { useState } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/constants';
import{messages} from './i18n/eng';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/Main.Page';


function App() {

   const[locale, setLocale]= useState(LOCALES.ENGLISH);
   console.log(IntlProvider);


  return (
    <BrowserRouter>
      <IntlProvider messages={messages[locale]} locale={locale} >
          <MainPage />
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;






