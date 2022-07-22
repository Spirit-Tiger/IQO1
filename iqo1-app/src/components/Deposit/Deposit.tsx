import TotalBalance from "components/Dashboard/TotalBalance";
import { ProfileInfoMobile } from "components/ProfileInfo";
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
      <ProfileInfoMobile />
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

  @media (min-width: 320px) {
    width: 85%;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 320px) {
    flex-direction: column;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (min-width: 320px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
