import GradientButton from "components/GradientButton";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

interface VerifyCardProps {
  headerId: string;
  imgSrc: string;
}

const VerifyCard = ({ headerId, imgSrc }: VerifyCardProps) => {
  return (
    <VerifyCardContainer>
      <VerifyCardContent>
        <CardImage src={imgSrc}></CardImage>
        <div className="mainContent">
          <Header>
            <FormattedMessage id={headerId} />
          </Header>
          <Text>National ID</Text>
          <VerifyButton>
            <GradientButton textId="verify_card_btn" />
          </VerifyButton>
        </div>
      </VerifyCardContent>
      <VerifyButtonMobile>
        <GradientButton textId="verify_card_btn" />
      </VerifyButtonMobile>
    </VerifyCardContainer>
  );
};

export default VerifyCard;

const VerifyCardContainer = styled.div`
  border-radius: 16px;
  background: #26313d;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 320px) {
    width: 100%;
    height: 200px;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    width: 45vw;
    height: 180px;
  }

  @media (min-width: 1280px) {
    width: 27vw;
    min-width: 389px;
    height: 203px;
  }
`;

const VerifyCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  gap: 15px;

  .mainContent {
    display: flex;
    flex-direction: column;
    min-width: 200px;
  }

  @media (max-width: 768px) {
    width: 85%;
    margin-bottom: 20px;

    .mainContent {
    min-width: 155px;
  }
  }
`;

const CardImage = styled.img`
  width: 7vw;
  min-width: 110px;
  height: fit-content;

  @media (max-width: 768px) {
    width: 25vw;
    min-width: 120px;
  }
`;

const Header = styled.h3`
  margin: 0;
`;

const Text = styled.p`
  color: #848484;
  margin: 8px 0 22px 0;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 3px ;
  }
`;

const VerifyButton = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  button {
    color: black;
    width: 9vw;
    min-width: 120px;
  }
`;

const VerifyButtonMobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  button {
    color: black;
    width: 150px;
  }
`;
