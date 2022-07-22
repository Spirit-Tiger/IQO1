import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

const VerifyInfo = () => {
  return (
    <VerifyInfoContainer>
      <h2>
        <FormattedMessage id="verify_info_header" />
      </h2>
      <p>
        <FormattedMessage id="verify_info_text" />
      </p>
    </VerifyInfoContainer>
  );
};

export default VerifyInfo;

const VerifyInfoContainer = styled.div`
  h2 {
    font-weight: 600;
    font-size: 32px;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #e9e9e9;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
    }
  }
  @media (min-width: 320px) {
    width: 85vw;
  }

  @media (min-width: 768px) {
    width: 60vw;
  }

  @media (min-width: 1280px) {
    width: 30vw;
  }
`;
