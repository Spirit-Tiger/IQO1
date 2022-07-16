import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import ProfileImg from "images/profile_image.png";

const ProfileImageEdit = () => {
  return (
    <EditProfileImage>
      <ProfileImage src={ProfileImg} />
      <EditButton>
        <FormattedMessage id="profile_edit_btn" />
      </EditButton>
    </EditProfileImage>
  );
};

export default ProfileImageEdit;

const EditProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 90px;
  height: 90px;
`;

const EditButton = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
  margin-top: 12px;
  :hover {
    cursor: pointer;
  }
`;
