import React from "react";
import styled from "styled-components";
import DepositCoinListItem from "../DepositeCoinListItem";

const DepositCoinList = () => {
  const myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

  return <CoinListContainer>
    {myArr.map(()=>(<DepositCoinListItem />))}
    </CoinListContainer>;
};

export default DepositCoinList;

const CoinListContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-gap: 24px 28px;
  width: calc(100% - 100px);
  padding: 32px 50px;
  margin-top: 60px;
  margin-bottom: 40px;
  background: #26313d;
  border-radius: 16px;

  @media (min-width: 320px) {
    width: calc(85vw - 52px);
    grid-template-columns: 100%;
    grid-gap: 10px;
    padding: 26px;
    margin-top: 30px;
  }

  @media (min-width: 768px) {
    width: calc(100% - 100px);
    grid-template-columns: repeat(auto-fill, 170px);
    grid-gap: 24px 28px;
    padding: 32px 50px;
    margin-top: 60px;
  }
`;
