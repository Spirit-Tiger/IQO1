import React from 'react'
import styled from 'styled-components';

const DashboardMain = () => {
  return (
    <DasboardMainContainer>
      DashboardMain
    </DasboardMainContainer>
  )
}

export default DashboardMain;

const DasboardMainContainer = styled.div`
    font-size: 5em;
    margin: 50px; 

    @media (max-width: 768px){
      font-size: 2em;
    }
`;
