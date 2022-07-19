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
    width: 510px;
    height: 203px;
  }

  @media (min-width: 1280px) {
    width: 510px;
    height: 203px;
  }
`;

const VerifyCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  .mainContent {
    display: flex;
    flex-direction: column;
    min-width: 200px;
  }

  @media (max-width: 768px) {
    width: 83%;
    margin-bottom: 20px;
    gap: 12px;

    .mainContent {
      min-width: 155px;
    }
  }
`;

const CardImage = styled.img`
  width: 139px;
  min-width: 110px;
  height: 79px;

  @media (max-width: 768px) {
    min-width: 130px;
  }
`;

const Header = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin: 0;
  font-size: 18px;
`;

const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #848484;
  margin: 2px 0 22px 0;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 3px;
  }
`;

const VerifyButton = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  button {
    color: black;
    width: 150px;
    min-width: 120px;
    background: linear-gradient(90deg, #9d7100 0%, #ffb800 100%);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
`;

const VerifyButtonMobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  button {
    color: black;
    width: 150px;
    font-size: 15px;
    background: linear-gradient(90deg, #9d7100 0%, #ffb800 100%);
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 17px;
  }
`;
