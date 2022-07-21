import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

const DepositInfo = () => {
  return (
    <DepositInfoContainer>
      <h2>
        <FormattedMessage id="deposit_info_header" />
      </h2>
      <p>
        <FormattedMessage id="deposit_info_text" />
      </p>
    </DepositInfoContainer>
  );
};

export default DepositInfo;

const DepositInfoContainer = styled.div`
  width: 570px;
  color: #ffffff;

  h2 {
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 12px;
  }

  p {
    color: #e9e9e9;
    font-size: 14px;
    margin-bottom: 0;
  }
`;
