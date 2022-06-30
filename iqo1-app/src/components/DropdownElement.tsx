import React, { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import{messages} from '../i18n/eng';
import { LOCALES } from "../i18n/constants";
import styled from "styled-components";
import Arrow from "../images/arrow.png";

interface DropdownElementProps {
    headerId: string,
    textId: string,
}

const DropdownElement = ({headerId, textId}:DropdownElementProps) => {

  const[locale, setLocale]= useState(LOCALES.ENGLISH);
  const [isActive, setIsActive] = useState(false);

  const OpenDropdown = () => {
    setIsActive(!isActive);
    console.log(isActive);
  }

  return (
    <IntlProvider messages={messages[locale]} locale={locale} >
        <DropdownElementContainer isActive={isActive} onClick={OpenDropdown}>
            <DropdownElementHeaderContainer>
                <DropdownElementHeader>
                    <FormattedMessage id={headerId}/>
                </DropdownElementHeader>
                <ArrowImg isActive={isActive} src={Arrow}/>
            </DropdownElementHeaderContainer>
            <DropdownElementText>
                <FormattedMessage id={textId}/>
            </DropdownElementText>
        </DropdownElementContainer>
    </IntlProvider>
  );
};

export default DropdownElement;

const DropdownElementContainer = styled.div<{isActive: boolean}>`
     width: 33.3vw;
     height: ${props => props.isActive ? 'inherit':'61px' };
     background-color: #6a6c6e;
     border-radius: 10px;
     overflow: hidden;
     margin-bottom: 20px;
`;

const DropdownElementHeaderContainer = styled.div`
   height: 61px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 30px;

   :hover {
    cursor: pointer;
   }
`;

const DropdownElementHeader = styled.h3`
   margin: 0;
   width: 75%;
`;

const ArrowImg = styled.img<{isActive: boolean}>`
    rotate:  ${props => props.isActive ? '180deg':'0' };
`;

const DropdownElementText= styled.p`
    padding: 0 30px;
    width: 70%;
`;




