import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import Arrow from "../images/arrow.png";

interface DropdownElementProps {
    headerId: string,
    textId: string,
}

const DropdownElement = ({headerId, textId}:DropdownElementProps) => {

  const [isActive, setIsActive] = useState(false);

  const OpenDropdown = () => {
    setIsActive(!isActive);
    console.log(isActive);
  }

  return (
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
  );
};

export default DropdownElement;

const DropdownElementContainer = styled.div<{isActive: boolean}>`
     width: 33.3vw;
     height: ${props => props.isActive ? 'inherit':'70px' };
     background-color: #1C1D1F;
     border-radius: 10px;
     overflow: hidden;
     margin-bottom: 20px;
     @media (min-width:320px) {
        width: 100%
     }
     @media (min-width:768px) {
        width: 40vw;
     }
     @media (min-width:1080px) {
        width: 33.3vw;
     }
`;

const DropdownElementHeaderContainer = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    :hover {
        cursor: pointer;
    }

    @media (min-width:320px) {
        font-size: 0.9em;
    }

    @media (min-width:768px) {
        font-size: 1em;
    }
`;

const DropdownElementHeader = styled.h3`
    margin: 0;
    padding: 30px 0;
    width: 75%;

    @media (min-width:320px) {
        width: 100%;
    }

    @media (min-width:768px) {
        width: 100%;
    }

    @media (min-width:1080px) {
        width: 75%;
    }
`;

const ArrowImg = styled.img<{isActive: boolean}>`
    rotate:  ${props => props.isActive ? '180deg':'0' };
`;

const DropdownElementText= styled.p`
    padding: 0 30px;
    width: 70%;
`;




