import React from "react";
import styled from "styled-components";

const DepositHistoryListItem = () => {
  return (
    <ItemContainer>
      <Transaction>Invest in TrashCoin by: 450,00 tokens</Transaction>
      <Sum>+ 1200$</Sum>
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
`;

const Sum = styled.div`
width: 130px;`;

const Date = styled.div``;
