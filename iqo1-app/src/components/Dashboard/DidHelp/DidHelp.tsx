import React, { ReactElement } from "react";
import { FormattedMessage } from 'react-intl';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import  question from 'images/question.svg'


const DidHelp = () => {


  return (
    <TotalBalanceContainer>
        <TextWrap>
        <h2>Did you need help?</h2>
        <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев</p>
        </TextWrap>
       
        <Support to="/home" >SUPPORT</Support>
    </TotalBalanceContainer>
  )
};
export default DidHelp;


const TotalBalanceContainer = styled.div`
    height: max-content;
    flex-basis: 25%;
    height: 100%;
    width: 100%;
    position: relative;
    top: 60px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 12px;
    h2{
        line-height: 29px;
        font-size:24px;
        font-weight: 600;
    }
    @media (min-width: 320px){
        min-height: 280px;
        background: rgba(0,0,0,.6) url(${question}) no-repeat center/contain ;

    }
    @media (min-width: 768px){
        align-self: center;
        flex-basis: 80%;
        background: rgba(0,0,0,.6) url(${question}) no-repeat center/contain ;

    }
    @media (min-width: 1280px){
        flex-basis: 25%;
        height: 332px;
        background: rgba(0,0,0,.6) url(${question}) no-repeat center/75% ;

    }
`;

const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    p{
        color: #a8a8a8;
            font-size: 12px;
            font-weight: 300;
        margin: 0;
    }
`
const Support = styled(Link)`
  color: black;
  font-weight: 500;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  width: 265px;
  height: 41px;
  text-decoration: none;
  border-radius: 14px;
  background: #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 320px) {
    margin-top: 10px;
  }
  @media (min-width: 769px) {
    margin-top: 20px;
  }
`;