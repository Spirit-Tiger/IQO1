import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import DropdownElement from "./DropdownElement";
import GradientButton from "./GradientButton";
import Ellipse3 from "../images/ellipse_3.png";



const DropdownFrame = () => {

  return (
    <DropdownFrameContainer>
        <EllipseImage />
        <ContentContainer>
            <DropdownFrameHeader>
                <FormattedMessage id="faq_header" />
            </DropdownFrameHeader>
            <AllDropdowns>
                <LeftDropdowns>
                    <DropdownElement headerId="faq_header_1" textId="faq_text_1" />
                    <DropdownElement headerId="faq_header_2" textId="faq_text_2" />
                    <DropdownElement headerId="faq_header_3" textId="faq_text_3" />
                </LeftDropdowns>
                <RightDropdowns>
                    <DropdownElement headerId="faq_header_4" textId="faq_text_4" />
                    <DropdownElement headerId="faq_header_5" textId="faq_text_5" />
                </RightDropdowns>
            </AllDropdowns>
            <GradientButton textId="faq_btn"/>
        </ContentContainer>
    </DropdownFrameContainer>
  );
};

export default DropdownFrame;

const DropdownFrameContainer = styled.div`
    position: relative;
    width: 100vw;
    max-width: 100%;
    background-color: #12181E;
    color: white;
    display: flex;
    justify-content: center;

    @media (min-width:320px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    @media (min-width:768px) {
        padding-top: 150px;
        padding-bottom: 100px;
    }


`;

const ContentContainer = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    @media (min-width:320px) {
        width: 82vw;
    }

    @media (min-width:768px) {
        width: 67.8vw;
    }
`;

const LeftDropdowns = styled.div`
`;

const RightDropdowns = styled.div`
`;

const AllDropdowns = styled.div`
    width: 67.8vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width:320px) {
        width: 82vw;
        margin-top: 50px;
        margin-bottom: 20px;
        flex-direction: column;
    }
    @media (min-width:768px) {
        width: 82vw;
        margin-top: 100px;
        flex-direction: row;
       
    }
    @media (min-width:1080px) {
        width: 67.8vw;
        flex-direction: row;
    }
`;


const DropdownFrameHeader = styled.h2`
    margin: 0;
    align-self: flex-start;
    @media (min-width:320px) {
        font-size: 1.5em;
    }

    @media (min-width:768px) {
        font-size: 2em;
    }
`;

const EllipseImage = styled.div`
    position: absolute;
    z-index: 1;  
    background: url(${Ellipse3}) no-repeat center/cover;

    @media (min-width: 375px){
        width: 100%;
        height: 1015px;
        top:0;
        margin-top: -100px;
        background-position: 75% 25%;
    }

    @media (min-width: 768px){
        width: 100%;
        height: 995px;
        top:5%;
        left: 0;
        margin-top: -180px;
    }
`;