import React from "react";
import styled from "styled-components";

const DepositHistoryListItem = () => {
  return (
    <ItemContainer>
      <Transaction>Invest in TrashCoin by: 450,00 tokens</Transaction>
      <Sum className="sum">+ 1200$</Sum>
      <Date>12.10.22</Date>
    </ItemContainer>
  );
};

export default DepositHistoryListItem;

const ItemContainer = styled.div`
  display: flex;
  padding: 0 6px;

  div {
    margin: 24px 0;
    font-size: 16px;
  }

  border-bottom: 1px solid rgba(96, 96, 96, 1);
`;

const Transaction = styled.div`
  width: 326px;
  font-size: 14px;
`;

const Sum = styled.div`
  width: 130px;
  font-weight: 700;
  font-size: 16px;
`;

const Date = styled.div`
  font-size: 14px;
`;
