import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProfileImg from "../images/profile_image.png";
import { useLocation } from "react-router-dom";

interface ProfileInfoProps {
    className?: string;
  }
interface IsProfileEditProps {
  isProfileEdit?: boolean;
}

const ProfileInfo = ({className}:ProfileInfoProps) => {

  return (
    <ProfileInfoContainer className={className}>
      <ProfileImage src={ProfileImg} />
      <FlexContainer>
        <ProfileName>Dmitry Kotov</ProfileName>
        <ProfileId>ID: 12543</ProfileId>
        <Dots className="dots">
          <Link to="/dashboard/profile_edit">
            <div />
            <div />
            <div />
          </Link>
        </Dots>
      </FlexContainer>
    </ProfileInfoContainer>
  );
};

export default ProfileInfo;

const ProfileInfoContainer = styled.div`
  width: fit-content;
  height: 47px;
  color: white;
  display: flex;
  justify-content: space-between;

  @media (max-height: 700px) {
    margin: 15px 0;
  }
`;

const ProfileImage = styled.img`
  margin-right:12px;
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
  align-self: flex-end;
  z-index: 2;

  a {
    width: 25px;
    display: flex;
    justify-content: space-between;
    padding: 3px;
  }

  div {
    background-color: #ff9900;
    border-radius: 50%;
    width: 5px;
    height: 5px;
  }
`;

export const ProfileInfoMobile = styled(ProfileInfo)<IsProfileEditProps>`
  .dots{
    display: ${props => props.isProfileEdit ? 'none' : 'flex'}
  }
  margin-top: 25px;

  @media (min-width: 768px) {
    display: none;
    }
`;
