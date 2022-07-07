import React from 'react'
import styled from 'styled-components';
import ProfileImg from '../images/profile_image.png'

const ProfileInfo = () => {
  return (
    <ProfileInfoContainer>
        <ProfileImage src={ProfileImg} />
        <FlexContainer>
            <ProfileName>Dmitry Kotov</ProfileName>
            <ProfileId>ID: 12543</ProfileId>
            <Dots>
                <div />
                <div />
                <div />
            </Dots>
        </FlexContainer>
    </ProfileInfoContainer>
  )
}

export default ProfileInfo;

const ProfileInfoContainer = styled.div`
    width: 170px;
    height: 47px;
    color: white;
    display: flex;
    justify-content: space-between;
`;

const ProfileImage = styled.img`
    border-radius: 50%;
    width: 47px;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProfileName = styled.p`
    margin: 0;
    font-size: 1.2em;
`;

const ProfileId = styled.p`
    margin: 0;
    font-size: 0.9em;
`;

const Dots = styled.div`
    width: 25px;
    display: flex;
    justify-content: space-between;
    align-self: flex-end;

    div {
        background-color: #FF9900;
        border-radius: 50%;
        width: 5px;
        height: 5px;
    }
`;