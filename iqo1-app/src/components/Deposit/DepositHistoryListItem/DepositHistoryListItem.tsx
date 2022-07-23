import React from "react";
import styled from "styled-components";

const DepositHistoryListItem = () => {
  return (
    <ItemContainer>
      <Transaction>Invest in TrashCoin by: 450,00 tokens</Transaction>
      {/* <Sum className="sum">+ 1200$</Sum>
      <Date>12.10.22</Date> */}
      <SumDateMobile>
        <Sum className="sum">+ 1200$</Sum>
        <Date>12.10.22</Date>
      </SumDateMobile>
    </ItemContainer>
  );
};

export default DepositHistoryListItem;

const ItemContainer = styled.div`
  display: flex;
  padding: 0 6px;
  align-items: center;

  border-bottom: 1px solid rgba(96, 96, 96, 1);

  @media (min-width: 320px) {
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    justify-content: space-between;

    div {
      font-size: 16px;
    }
  }
`;

const Transaction = styled.div`
  width: 326px;

  @media (min-width: 320px) {
    width: 170px;
    margin: 24px 0;
  }

  @media (min-width: 768px) {
    width: 326px;
    margin: 25px 0;
  }
`;

const Sum = styled.div`
  font-weight: 800;
  font-size: 16px;

  @media (min-width: 320px) {
  }

  @media (min-width: 768px) {
    width: 120px;
  }
`;

const Date = styled.div`
  font-weight: 300;

  @media (min-width: 320px) {
    font-size: 12px;
    margin-top: 4px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    margin-top: 0;
  }
`;

const SumDateMobile = styled.div`
  display: flex;

  @media (min-width: 320px) {
    flex-direction: column;
    align-items: flex-end;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
