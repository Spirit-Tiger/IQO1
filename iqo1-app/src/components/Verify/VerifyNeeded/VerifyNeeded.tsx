import GradientButton from 'components/GradientButton';
import React from 'react'
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const VerifyNeeded = () => {
  return (
    <VerifyNeededContainer>
      <VerifyNeededContent>
        <QuestionMark>
          ?
        </QuestionMark>
        <Text>
          <FormattedMessage id="verify_needed_text" />
        </Text>
        <StartButtonContainer>
          <GradientButton textId="verify_needed_start_btn"/>
        </StartButtonContainer>
      </VerifyNeededContent>
    </VerifyNeededContainer>
  )
}

export default VerifyNeeded;

const VerifyNeededContainer = styled.div`
  width: 30vw;
  min-width: 400px;
  margin-top: 50px;
  display: flex;
  margin-bottom: 20px;

  @media (max-width: 1280px){
    width: 60vw;
    justify-content: center;
  }
`;

const VerifyNeededContent = styled.div`
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;

  @media (max-width: 1280px){
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
  font-size: 200px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
`;


const StartButtonContainer = styled.div`
  margin-top: 35px;

  button {
    color: black;
    font-size: 16px;
  }
`;