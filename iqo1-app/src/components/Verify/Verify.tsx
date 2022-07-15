import React from 'react'
import styled from 'styled-components';
import VerifyInfo from './VerifyInfo';
import VerifyStatus from './VerifyStatus';

const Verify = () => {
  return (
    <VerifyContainer>
      <VerifyInfo />
      <VerifyStatus />
    </VerifyContainer>
  )
}

export default Verify;

const VerifyContainer = styled.div`
    display: flex;
    
`;