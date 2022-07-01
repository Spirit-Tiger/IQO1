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
            <StyledSVG/>
            <ItemHead><FormattedMessage id="work_txt_head_blck1"/></ItemHead>
            <ItemText><FormattedMessage id="work_txt_blck1"/></ItemText>
        </Item>
        <Item>
            <StyledSVG1/>
            <ItemHead><FormattedMessage id="work_txt_head_blck2"/></ItemHead>
            <ItemText><FormattedMessage id="work_txt_blck2"/></ItemText>
        </Item>
        <Item>  
            <StyledSVG2/>
            <ItemHead><FormattedMessage id="work_txt_head_blck3"/></ItemHead>
            <ItemText><FormattedMessage id="work_txt_blck3"/></ItemText>
        </Item>
        <Item> 
            <StyledSVG3/>
            <ItemHead><FormattedMessage id="work_txt_head_blck4"/></ItemHead>
            <ItemText><FormattedMessage id="work_txt_blck4"/></ItemText>
        </Item>

       </Container>
    )

}

export default WorkTextBlock;

const Container= styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
column-gap: 33px ;
row-gap: 20px;
overflow:visible;
padding: 15px 0;
width: 700px;
min-width: 350px;
max-width: 100%;
height: 100%;
@media (min-width: 350px) {
    width: 350px ;
  }
@media (min-width: 768px) {
width: 750px ;
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
    width: 310px;
    height: 345px;
    background-color: #12181e;
   /* outline: solid 1px #FFFFFF blur(3px); */
   box-shadow: 0px 0px 5px 5px #ffffff3b;
   justify-content: center;
   align-items: center;
   text-align: justify;
   flex-direction: column;
   transition:all 0.25s ease;
   p{
    opacity: 0;
   }
   :hover{
    transform: scale(1.2);
    p{
       animation: 1s learn 1 forwards;
    };
}
`
const ItemHead = styled.h2`
    font-size: 24px;
    color:white;

   
`
const ItemText = styled.p`
    font-size: 14px;
    color: #7D7D7D;
    margin: 0 20px;

`
const StyledSVG = styled(BrandIcon)`
    margin: 45px;
`
const StyledSVG1 = styled(BrandIcon1)`
    margin: 45px;
`
const StyledSVG2 = styled(BrandIcon2)`
    margin: 45px;
`
const StyledSVG3 = styled(BrandIcon3)`
    margin: 45px;
`