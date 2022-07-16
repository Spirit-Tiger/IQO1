import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";

import GradientButton from "./GradientButton";
import CopyIdIcon from "images/copy_id_icon.png";
import ProfileImageEdit from "./ProfileImageEdit";

interface MyFormValues {
  firstName: string;
  lastName: string;
  country: string;
  userId: number;
  email: string;
  phone: string;
}

const ProfileEditForm = () => {
  const initialValues: MyFormValues = {
    firstName: "Dmitriy",
    lastName: "Kovtov",
    country: "Poland",
    userId: 123,
    email: "dmitriykovtov@gmail.com",
    phone: "+434 43 321 45 43",
  };

  const handleCopyToClipboard = async () => {
    await navigator.clipboard.writeText(`${initialValues.userId}`);
  };

  return (
    <ProfileEditFormContainer>
      <div>
        <h2>
          <FormattedMessage id="profile_edit_header" />
        </h2>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          <FormikStyledForm>
            <OuterContainer>
              <ProfileImageEdit />
            </OuterContainer>
            <FormContainer>
              <InnerContainer>
                <div className="superInner">
                  <ProfileImageEditMobile>
                    <ProfileImageEdit />
                  </ProfileImageEditMobile>
                  <MobileContainer>
                    <label htmlFor="firstName">
                      <div>
                        <FormattedMessage id="profile_edit_name" />
                      </div>
                      <FormikStyledField name="firstName" />
                    </label>

                    <label htmlFor="lastName">
                      <div>
                        <FormattedMessage id="profile_edit_last_name" />
                      </div>
                      <FormikStyledField name="lastName" />
                    </label>
                  </MobileContainer>
                </div>
                <div className="superInner">
                  <MobileContainer2>
                    <label htmlFor="country">
                      <div>
                        <FormattedMessage id="profile_edit_country" />
                      </div>
                      <FormikStyledField name="country" />
                    </label>

                    <label htmlFor="userId">
                      <div>
                        <FormattedMessage id="profile_edit_id" />
                      </div>
                      <IdInputContainer>
                        <FormikStyledField readOnly name="userId" />
                        <img src={CopyIdIcon} onClick={handleCopyToClipboard} />
                      </IdInputContainer>
                    </label>
                  </MobileContainer2>
                </div>
              </InnerContainer>
              <EmailAndPhone>
                <label htmlFor="email">
                  <div>
                    <FormattedMessage id="profile_edit_email" />
                  </div>
                  <FormikStyledField name="email" />
                </label>

                <label htmlFor="phone">
                  <div>
                    <FormattedMessage id="profile_edit_phone" />
                  </div>
                  <FormikStyledField name="phone" />
                </label>
              </EmailAndPhone>
              <SaveButton>
                <GradientButton textId="profile_edit_save_btn" />
              </SaveButton>
            </FormContainer>
          </FormikStyledForm>
        </Formik>
      </div>
    </ProfileEditFormContainer>
  );
};

export default ProfileEditForm;

const ProfileEditFormContainer = styled.div`
  margin-top: 50px;
`;

const FormikStyledForm = styled(Form)`
  display: flex;
  gap: 25px;
  height: fit-content;

  @media (min-width: 320px) {
    width: 85vw;
  }

  @media (min-width: 768px) {
    width: 60vw;
  }
  @media (min-width: 1280px) {
    width: 30vw;
  }
`;

const OuterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  width: 100%;

  .superInner {
    display: flex;
    flex-direction: row;
    gap: 25px;
    width: 100%;
  }
`;

const EmailAndPhone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    width: calc(100% - 52px);
    min-width: 180px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 10px;
  }
`;

const FormikStyledField = styled(Field)`
  font-size: 14px;
  color: white;
  height: 33px;
  padding: 3px 25px;
  border-radius: 6px;
  border: 1px solid #7e7e7e;
  background-color: #12181e;
  margin-top: 4px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label div {
    font-size: 12px;
    font-weight: 600;
  }
`;

const SaveButton = styled.div`
  margin-top: 40px;
  align-self: flex-end;

  button {
    color: black;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;

    button {
      width: 100%;
    }
  }
`;

const IdInputContainer = styled.div`
  position: relative;

  img {
    position: absolute;
    margin-top: 12px;
    margin-right: 8%;
    top: 0;
    right: 0;

    :hover {
      cursor: pointer;
    }

    :active {
      transform: scale(1.1);
    }
  }
`;

const ProfileImageEditMobile = styled.div`
  height: 100px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  width: 100%;

  input {
    width: calc(100% - 52px);
    min-width: 100px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 768px) {
    gap: 10px;

    input {
      width: calc(24vw - 52px);
    }
  }

  @media (min-width: 1280px) {
    gap: 25px;
    width: 100%;

    input {
      width: calc(100% - 52px);
    }
  }
`;

const MobileContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  width: 100%;

  input {
    width: calc(100% - 52px);
    min-width: 100px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 768px) {
    gap: 10px;

    input {
      width: calc(24vw - 52px);
    }
  }

  @media (min-width: 1280px) {
    gap: 25px;
    width: 100%;

    input {
      width: calc(100% - 52px);
    }
  }
`;
