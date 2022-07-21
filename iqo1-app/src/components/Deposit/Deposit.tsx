import TotalBalance from "components/Dashboard/TotalBalance";
import VerifyStatus from "components/Verify/VerifyStatus";
import React from "react";
import styled from "styled-components";
import DepositCoinList from "./DepositCoinList";
import DepositHistoryList from "./DepositHistoryList";
import DepositInfo from "./DepositInfo";
import InvestWithdrow from "./InvestWithdrow";

const Deposit = () => {
  return (
    <DepositContainer>
      <FlexContainer>
        <TotalBalance />
        <VerifyStatus />
      </FlexContainer>
      <ContentContainer>
        <div>
          <DepositInfo />
          <InvestWithdrow />
        </div>
        <DepositHistoryList />
      </ContentContainer>
      <DepositCoinList />
    </DepositContainer>
  );
};

export default Deposit;

const DepositContainer = styled.div`
  width: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
