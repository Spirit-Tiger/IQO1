import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
} from 'chart.js';
import {Line } from 'react-chartjs-2'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)
interface Props {
  labels: string[]
  datasets: any[];
}

const Market = () => {
  const [chartData, setChartData] = useState<Props>({
    labels:[],
    datasets: []
  })
  const [chartOptions, setChartOptions] = useState<{}>({
   
  })
  useEffect(() =>{
    setChartData({
      labels: ['2','45','12','5'],
      datasets: [
        {
          fill: true,
          data:[2,45,12,5],
          borderColor:'#06b42c',
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 550);
            gradient.addColorStop(0, "rgba(1, 162, 36, 0.47)");
            gradient.addColorStop(0.47, "rgba(0, 202, 44, 0");
            gradient.addColorStop(1, "rgba(0,0, 0, 0");
            return gradient;},
            borderRadius:15,
            lineTension:0.2,    

        }
      ]
    });
    setChartOptions({
      responsive:true,
      maintainAspectRatio: false,
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      },
      devicePixelRatio:1,
      plugins:{
        legend:{
          position:'top',
          display:false,
        },
        title:{
          display:false,
          text:'the FK'
        }
      }
    })
  },[])
  return (
    <DasboardMainContainer>
      <BalanceHeader>
        <FormattedMessage  id="dashboard_market_title"/>
      </BalanceHeader>
      <FlexContainer>
        <StyledLine options={chartOptions} data={chartData}/>
      </FlexContainer>
    </DasboardMainContainer>
  )
}

export default Market;
const BalanceHeader = styled.h3`
    font-size: 18px;
`;

const DasboardMainContainer = styled.div`
display: flex;
    flex-direction: column;
    height: 332px;
    display: flex;
    /* background-color: #26313D; */
    /* height: 100%; */
    @media (min-width: 320px) {
      width: 100%;
    }
    @media (min-width: 768px) {
     width: 100%;
    }
    @media (min-width: 1280px) {
     width: 75%;
    }
`;

const StyledLine = styled(Line)`
  width:60%;
  height: fit-content;
  max-height: 332px;
  padding:0 32px;
`
const InfoBlockc = styled.div`
 display: flex;
 gap: 20px;
 align-items: flex-end;
 display: flex;
    @media (min-width: 320px) {
      flex-direction: column;
    }
    @media (min-width: 768px) {
      flex-direction:row;
    }
`
const FlexContainer = styled.div`
    /* width: 90%; */
    padding: 30px 0;
    height: max-content;
    background-color: #26313D ;
    border-radius: 12px;
    display: flex;
    height: fit-content;
    /* height: calc(350px - 60px); */
    height: 270px;
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
