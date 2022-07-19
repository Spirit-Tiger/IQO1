import React from 'react'
import styled from 'styled-components';
import MarketItem from '../MarketItem';



const MarketList = () => {
  const myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
  return (
    <MarketListContainer>
      {myArr.map(()=>(<MarketItem />))}
    </MarketListContainer>
  )
}

export default MarketList;

const MarketListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 172px);
  justify-content: space-between;
  grid-gap: 36px 18px;
  width: 100%;
  margin-bottom: 40px;
 
`;