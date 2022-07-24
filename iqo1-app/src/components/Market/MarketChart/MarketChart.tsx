import React ,{useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import MarketItem from '../MarketItem';
import {AdvancedRealTimeChart, Market} from "react-ts-tradingview-widgets";
import { useLocation } from 'react-router-dom'
interface MarketChart {
    chartSymbol?: string
}
const MarketChart = () => {
    const tradingRef = useRef(null);
    const [symbol, setSymbol] = useState("AAPL");
   const location = useLocation()
   const { chartSymbol }:any = location.state
   console.log(chartSymbol)
   useEffect(()=>{
    setSymbol(chartSymbol);
   })
  
    return (
        <Wrapper>
        <MarketListContainer theme="dark" symbol={symbol}  style="3" autosize />

        </Wrapper>
    );
  };

export default MarketChart;

const MarketListContainer = styled(AdvancedRealTimeChart)`

`;
const Wrapper = styled.div`
 padding: 20px;
width: 100%;
height: 80%;
`