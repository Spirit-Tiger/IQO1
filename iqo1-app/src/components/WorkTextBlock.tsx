import React, { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import styled from "styled-components";
import { ReactComponent as BrandIcon1 } from "../images/Vector-1.svg";
import { ReactComponent as BrandIcon } from "../images/Vector.svg";

import { ReactComponent as BrandIcon2 } from "../images/Vector-2.svg";

import { ReactComponent as BrandIcon3 } from "../images/Vector-3.svg";


const WorkTextBlock = () => { 

    return (
       <Container>
        <Item>
        <SvgWrapper>
            <StyledSVG/>
            </SvgWrapper>
            <ItemHead><FormattedMessage id="work_txt_head_blck1"/></ItemHead>
            <ItemText><FormattedMessage id="work_txt_blck1"/></ItemText>
        </Item>
        <Item>
            <SvgWrapper>
            <StyledSVG1/>
            </SvgWrapper>
            <ItemHead><FormattedMessage id="work_txt_head_blck2"/></ItemHead>
            <ItemText><FormattedMessage id="work_txt_blck2"/></ItemText>
        </Item>
        <Item>  
        <SvgWrapper>
            <StyledSVG2/>
            </SvgWrapper>
            <ItemHead><FormattedMessage id="work_txt_head_blck3"/></ItemHead>
            <ItemText><FormattedMessage id="work_txt_blck3"/></ItemText>
        </Item>
        <Item> 
        <SvgWrapper>
            <StyledSVG3/>
            </SvgWrapper>
            <ItemHead><FormattedMessage id="work_txt_head_blck4"/></ItemHead>
            <ItemText><FormattedMessage id="work_txt_blck4"/></ItemText>
        </Item>

       </Container>
    )

}

export default WorkTextBlock;

const Container= styled.div`
    @media (min-width: 320px) {
        /* width: 500px; */
        display: flex;
        width:  330px;

    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: 33px ;
    row-gap: 20px;
    overflow:visible;
    padding: 15px 0;
    /* width: 700px; */
    /* min-width: 350px; */
    max-width: 100%;
    height: 100%;
    z-index: 2;
    }
    @media (min-width: 768px) {
        justify-content: space-between;
        width: 100% ;
    }
  
/* padding-bottom: 100px; */
/* margin-bottom: 100px; */
`
const Item = styled.div`
@keyframes learn {
    from {opacity: 0;}
    to {opacity: 1;}
}
display: flex;
    aspect-ratio : 1 / 1;
    background-color: #12181e5e;
   /* outline: solid 1px #FFFFFF blur(3px); */
   box-shadow: 0px 0px 5px 5px #ffffff3b;
   justify-content: flex-start;
   align-items: center;
   text-align: justify;
   flex-direction: column;
   transition:all 0.25s ease;
   @media (min-width:320px) {
    max-width: 340px;
    width: 90%;
    height: 350px;
    justify-content: space-evenly;
   }
   @media (min-width:768px) {
    justify-content: stretch;
    height: 100%;
    overflow: hidden;
    width: calc(50% - 21px);
    height: 290px;
 
}
@media (min-width:1280px) {
    padding-bottom: calc(50% + 14px);

    height: 0;
    p{
    opacity: 0;
   }
    :hover{
    /* height: 100%; */
    overflow: visible;
    padding-bottom: calc(50% + 14px);
    transform: scale(1.2);
    background-color: #12181e;
    p{
       animation: 1s learn 1 forwards;
    };
   }
}
`
const ItemHead = styled.h2`
    margin: 0;
   
    color:white;
    padding: 0 15px;
    /* text-align: justify; */
    word-break: break-all;
    @media (min-width:320px) {
    font-size: 24px;
    margin: 15px 0;
}
@media (min-width:768px) {
    font-size: 24px;
    margin: 1.2vw 0;

}
@media (min-width:1280px) {
    font-size: 1.25vw;
    margin: 1.2vw 0;

}

   
`
const ItemText = styled.p`
    margin: 0 20px;
    
    color: #7D7D7D;
    @media (min-width:320px) {
    font-size: 14px;
}
@media (min-width:768px) {
    text-align: justify;
    font-size: 16px;
}
@media (min-width:1280px) {
    font-size: 0.72vw;
}

`
const StyledSVG = styled(BrandIcon)`
    /* margin: 45px 0 0 0 ; */
  
    @media (min-width:320px) {
    font-size: 14px;
}
@media (min-width:1280px) {
    width: 3.125vw;
    /* height: 8.34vh; */
}

`
const StyledSVG1 = styled(BrandIcon1)`
    /* margin: 45px 0 0 0 ; */
    @media (min-width:320px) {
    font-size: 14px;
}
@media (min-width:1280px) {
    width: 3.125vw;
    /* height: 8.34vh; */
}

`
const StyledSVG2 = styled(BrandIcon2)`
    /* margin: 45px 0 0 0 ; */
    @media (min-width:320px) {
}
@media (min-width:1280px) {
    width: 3.125vw;
    /* height: 8.34vh; */
}
`
const StyledSVG3 = styled(BrandIcon3)`
    /* margin: 45px 0 0 0 ;  */
    @media (min-width:320px) {
    font-size: 14px;
}
@media (min-width:1280px) {
    width: 3.125vw;
    /* height: 8.34vh; */
}

`
const SvgWrapper = styled.div`
    margin-top:  1.5vw;
    @media (min-width:320px) {
    margin-top: 30px;
}
@media (min-width:768px) {
    margin-top:  1.5vw;
}
`