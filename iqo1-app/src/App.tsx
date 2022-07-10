import React, { useState } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/constants';
import{messages} from './i18n/eng';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/Main.Page';
import LoginPage from './pages/LoginPage';
import Dashboard from './components/Dashboard';
import DashboardMain from './components/DashboardMain';
import Market from './components/Market';
import Deposit from './components/Deposit';
import Verify from './components/Verify';
import Settings from './components/Settings';
import Registration from './pages/Registration';
import Footer from "./components/Footer";


function App() {

   const[locale, setLocale]= useState(LOCALES.ENGLISH);
   console.log(IntlProvider);


  return (
    <IntlProvider messages={messages[locale]} locale={locale} >
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="dashboard" element={<Dashboard />}> 
                <Route index element={<DashboardMain />} />
                <Route path="market" element={<Market />} />
                <Route path="deposit" element={<Deposit />} />
                <Route path="veryfy" element={<Verify />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              <Route path="registation" element={<Registration />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;






