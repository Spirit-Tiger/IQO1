import GradientButton from "components/GradientButton";
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import VerifyQuestion from "images/verify_question_icon.png";
import { Link } from "react-router-dom";

const VerifyNeeded = () => {
  return (
    <VerifyNeededContainer>
      <VerifyNeededContent>
        <QuestionMark>
          <img src={VerifyQuestion} />
        </QuestionMark>
        <Text>
          <FormattedMessage id="verify_needed_text" />
        </Text>
        <StartButtonContainer>
          <Link to="/dashboard/verify">
            <GradientButton textId="verify_needed_start_btn" />
          </Link>
        </StartButtonContainer>
      </VerifyNeededContent>
    </VerifyNeededContainer>
  );
};

export default VerifyNeeded;

const VerifyNeededContainer = styled.div`
  width: 30vw;
  min-width: 400px;
  margin-top: 36px;
  display: flex;
  margin-bottom: 20px;

  @media (max-width: 1280px) {
    width: 60vw;
    justify-content: center;
    min-width: 300px;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    align-self: center;
    margin-top: 20px;
  }
`;

const VerifyNeededContent = styled.div`
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;

  @media (max-width: 1280px) {
    margin-left: 0;
  }
`;

const QuestionMark = styled.div`
  margin: 40px 0 20px 0;
  border-radius: 50%;
  height: 230px;
  width: 230px;
  border: 2px solid white;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const StartButtonContainer = styled.div`
  margin-top: 27px;

  button {
    color: black;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    margin-bottom: 50px;
    button {
      width: 85vw;
    }
  }
`;
