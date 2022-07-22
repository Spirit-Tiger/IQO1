import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import DepositHistoryListItem from "../DepositHistoryListItem";

const DepositHistoryList = () => {
  const myArr = [1, 2, 3, 4, 5, 6, 7];

  return (
    <HistoryListContainer>
      <h2>
        <FormattedMessage id="deposit_history" />
      </h2>
      <HistoryListContent>
        <ListHeadings>
          <TransactionsHeader>Transactions:</TransactionsHeader>
          <SumDateHeader>Sum/Date</SumDateHeader>
          <SumHeader>Sum:</SumHeader>
          <DateHeader>Date:</DateHeader>
        </ListHeadings>
        {myArr.map(() => (
          <DepositHistoryListItem />
        ))}
      </HistoryListContent>
    </HistoryListContainer>
  );
};

export default DepositHistoryList;

const HistoryListContainer = styled.div`
  margin-top: 37px;
  width: 30vw;

  h2 {
    font-weight: 600;
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    margin-top: 30px;

    h2 {
      display: none;
    }
  }

  @media (min-width: 320px) {
    width: 85vw;
  }

  @media (min-width: 768px) {
    width: 30vw;
    min-width: 540px;
  }
`;

const HistoryListContent = styled.div`
  /* width: 518px; */
  height: 500px;
  padding: 26px;
  background: #26313d;
  border-radius: 16px;

  div:nth-child(2) {
    div .sum {
      color: #00ca2c;
    }
  }

  div:last-child {
    border: none;
  }

  @media (min-width: 320px) {
    width: calc(85vw - 52px);
    height: fit-content;
    padding-bottom: 10px;
  } 

  @media (min-width: 768px) {
    width: calc(100% - 52px);
    height: 510px;
    padding: 26px;
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
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const SumDateHeader = styled.p`
  font-size: 12px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const SumHeader = styled.p`
  width: 139px;
  font-size: 16px;

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

const DateHeader = styled.p`
  font-size: 16px;

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;
