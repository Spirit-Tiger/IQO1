import React from 'react'
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const VerifyInfo = () => {
  return (
    <VerifyInfoContainer>
        <h2><FormattedMessage id="verify_info_header"/></h2>
        <p><FormattedMessage id="verify_info_text"/></p>
    </VerifyInfoContainer>
  )
}

export default VerifyInfo;

const VerifyInfoContainer = styled.div`
    margin-top: 25px;
    h2 {
        font-size: 32px;
    }

    p {
        margin: 0;
        font-size: 14px;
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 28px;
    }
    }

    @media (min-width: 768px) {
      width: 60vw;
    }

    @media (min-width: 1280px) {
      width: 30vw;
    }
`;