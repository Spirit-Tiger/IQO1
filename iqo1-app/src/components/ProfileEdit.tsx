import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TotalBalance from "./Dashboard/TotalBalance";
import ProfileEditForm from "./ProfileEditForm";
import ProfileInfo from "./ProfileInfo";
import VerifyInfo from "./Verify/VerifyInfo";
import VerifyNeeded from "./Verify/VerifyNeeded";
import VerifyStatus from "./Verify/VerifyStatus";
import { ProfileInfoMobile } from "components/ProfileInfo";
import { useLocation } from "react-router";

const ProfileEdit = () => {
  const location = useLocation();
  const [isProfileEdit, setIsProfileEdit] = useState(false);

  useEffect(() => {
    if (location.pathname === "/dashboard/profile_edit") {
      setIsProfileEdit(true);
    }
  }, []);
  return (
    <ProfileEditContainer>
      <ProfileInfoMobile isProfileEdit={isProfileEdit} />
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
  );
};

export default ProfileEdit;

const ProfileEditContainer = styled.div`
display: flex;
flex-direction: column;
  height: fit-content;
  width: 85%;
  gap: 20px;
`;

const VerifyFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1280px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
