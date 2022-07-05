import React, { useState } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/constants';
import{messages} from './i18n/eng';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/Main.Page';
import LoginPage from './pages/LoginPage';


function App() {

   const[locale, setLocale]= useState(LOCALES.ENGLISH);
   console.log(IntlProvider);


  return (
    <IntlProvider messages={messages[locale]} locale={locale} >
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="login" element={<LoginPage />} />
          </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;






