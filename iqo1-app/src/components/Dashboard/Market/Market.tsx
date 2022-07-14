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
            const gradient = ctx.createLinearGradient(0, 0, 0, 700);
            gradient.addColorStop(0, "rgba(1,161,36,1)");
            gradient.addColorStop(1, "rgba(1,161,36,0.1)");
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
    <StyledLine options={chartOptions} data={chartData}/>
    </DasboardMainContainer>
  )
}

export default Market;

const DasboardMainContainer = styled.div`
    height: 332px;
    display: flex;
    background-color: #26313D;
    /* height: 100%; */
    @media (min-width: 320px) {
      width: 100%;

    }
    @media (min-width: 768px) {
     width: 100%;
    }
    @media (min-width: 1024px) {
     width: 74%;
    }
`;

const StyledLine = styled(Line)`
  width:60%;
  height: fit-content;
  max-height: fit-content;
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
