import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const Profit = () => {
  return (
    <TotalBalanceContainer>
        <BalanceHeader>
            <FormattedMessage  id="dashboard_profit_title"/>
        </BalanceHeader>
        <FlexContainer>
            <BlockTitle>
                <h3>
                    You paid <span>45%</span>:
                </h3>
                <h3>
                    11.11.2012
                </h3>
            </BlockTitle>
            <div  className='circle'>
            <StyledCircularProgressbar value={66} maxValue={100} text={`66%`} 
             styles={buildStyles({
                strokeLinecap: 'butt',
                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',
            
                // Colors  linear-gradient(92.77deg, #FFB800 16.59%, #9D7100 97.23%)
                pathColor: `#FFB800 `,
                textColor: '#ffffff',
                trailColor: 'rgba(255, 255, 255, 0)',
                backgroundColor: '#fcfcfc',
              })}/>
            </div>
        </FlexContainer>
    </TotalBalanceContainer>
  )
}

export default Profit;

const TotalBalanceContainer = styled.div`
    height: max-content;
    flex-basis: 25%;
    height: 100%;
    width: 100%;
`;
const StyledCircularProgressbar = styled(CircularProgressbar)`
   width: 100%;
   max-height: 210px;
   transform: scaleX(-1);

   .CircularProgressbar-text {
    transform: scaleX(-1) translate(-98px, 0);
   }
`;
const BalanceHeader = styled.h2`
    font-size: 18px;
`;
const BlockTitle = styled.div`
    font-size: 14px;
    width: 85%;
    display: flex;
    color:#848484;
    span {
       color: #EDA54C
    }
    h3{
        font-size: 14px;
        font-weight: 500;
        margin: 0;
    }
    justify-content: space-between;
`;

const FlexContainer = styled.div`
    /* width: 90%; */
    padding: 30px 0;
    height: max-content;
    background-color: #26313D ;
    border-radius: 12px;
    display: flex;
    height: fit-content;
    height: calc(350px - 60px);

    justify-content: flex-start;
   .circle{
    margin-top: 20px;
    width: 90%;
    
   }
    /* justify-content: center; */

    @media (min-width: 320px){
        /* height: 120px; */
        flex-direction: column;
        align-items: center;
        min-height: fit-content;
    }

    @media (min-width: 768px){

        width: 100%;
        flex-direction: column;
        row-gap: 32px;
    }
`;