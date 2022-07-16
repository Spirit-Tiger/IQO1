import React from 'react'
import styled from 'styled-components';
import TotalBalance from './Dashboard/TotalBalance';
import ProfileEditForm from './ProfileEditForm';
import VerifyInfo from './Verify/VerifyInfo';
import VerifyNeeded from './Verify/VerifyNeeded';
import VerifyStatus from './Verify/VerifyStatus';

const ProfileEdit = () => {
  return (
    <ProfileEditContainer>
        <TotalBalance />
        <VerifyFlexContainer>
            <VerifyInfo />
            <VerifyStatus />
        </VerifyFlexContainer>
        <VerifyFlexContainer>
            <ProfileEditForm />
            <VerifyNeeded />
        </VerifyFlexContainer>
    </ProfileEditContainer>
  )
}

export default ProfileEdit;

const ProfileEditContainer = styled.div`
    height: fit-content;
    width: 85%;
`;

const VerifyFlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 1280px){
        justify-content: center;
    }
`;