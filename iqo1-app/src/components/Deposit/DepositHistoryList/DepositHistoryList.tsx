import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import DepositHistoryListItem from "../DepositHistoryListItem";

const DepositHistoryList = () => {
  const myArr = [1,2,3,4,5,6,7];

  return (
    <HistoryListContainer>
      <h2>
        <FormattedMessage id="deposit_history" />
      </h2>
      <HistoryListContent>
        <ListHeadings>
          <TransactionsHeader>Transactions:</TransactionsHeader>
          <SumHeader>Sum:</SumHeader>
          <DateHeader>Date:</DateHeader>
        </ListHeadings>
        {myArr.map(()=>(<DepositHistoryListItem />))}
      </HistoryListContent>
    </HistoryListContainer>
  );
};

export default DepositHistoryList;

const HistoryListContainer = styled.div`
  margin-top: 37px; width: 30vw;
  h2 {
    font-weight: 600;
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 12px;
  }
`;

const HistoryListContent = styled.div`
  /* width: 518px; */
  height: 485px;
  padding: 26px;
  background: #26313d;
  border-radius: 16px;

  div:last-child {
    border: none;
  }
`;

const ListHeadings = styled.div`
  display: flex;
  padding: 0 6px;

  p {
    margin-top: 0;
  }

  border-bottom: 1px solid rgba(96, 96, 96, 1);
`;

const TransactionsHeader = styled.p`
  width: 326px;
`;

const SumHeader = styled.p`
  width: 139px;
`;

const DateHeader = styled.p``;
