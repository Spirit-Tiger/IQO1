import React, { useState } from 'react';
import './App.css';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/constants';
import{messages} from './i18n/eng';
import styled from 'styled-components';


function App() {

   const[locale, setLocale]= useState(LOCALES.ENGLISH);
   console.log(IntlProvider);
  return (
    <IntlProvider messages={messages[locale]} locale={locale} >
    <div>
      
      <StyledMessage>
        <FormattedMessage id="english" />
      </StyledMessage>
    </div>
    </IntlProvider>
  );
}

const StyledMessage = styled.p`
font-size: 4em;
`;

export default App;

