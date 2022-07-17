import React from "react";
import styled from "styled-components";
import VerifyCard from "./VerifyCard";
import VerifyInfo from "./VerifyInfo";
import VerifyStatus from "./VerifyStatus";
import FrontPhoto from "images/front_photo_icon.png";
import BackPhoto from "images/back_photo_icon.png";
import BankStatement from "images/bank_statement_icon.png";
import Selfie from "images/selfie_icon.png";

const Verify = () => {
  return (
    <VerifyContainer>
      <FlexContainer>
        <VerifyInfo />
        <VerifyStatus />
      </FlexContainer>
      <CardContainer>
        <div className="cardsWrapper">
          <VerifyCard headerId="verify_card_header1" imgSrc={FrontPhoto} />
          <VerifyCard headerId="verify_card_header2" imgSrc={BackPhoto} />
        </div>
        <div className="cardsWrapper">
          <VerifyCard headerId="verify_card_header3" imgSrc={BankStatement} />
          <VerifyCard headerId="verify_card_header4" imgSrc={Selfie} />
        </div>
      </CardContainer>
    </VerifyContainer>
  );
};

export default Verify;

const VerifyContainer = styled.div`
  display: flex;
  flex-direction: column;


  @media (min-width: 320px) {
    width: 85%;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  .cardsWrapper {
    width: 100%;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 1280px) {
    margin-top: 100px;
  }
`;
