import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import ProfileImg from "images/profile_image.png";
import GradientButton from "./GradientButton";
import CopyIdIcon from 'images/copy_id_icon.png';

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
              <EditProfileImage>
                <ProfileImage src={ProfileImg} />
                <EditButton>
                  <FormattedMessage id="profile_edit_btn" />
                </EditButton>
              </EditProfileImage>
            </OuterContainer>
            <FormContainer>
              <InnerContainer>
                <div className="superInner">
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
                </div>
                <div className="superInner">
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
                      <FormikStyledField readOnly name="userId"/>
                      <img src={CopyIdIcon} />
                    </IdInputContainer>
                  </label>
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
                <GradientButton textId="profile_edit_save_btn"  />
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

const FormikStyledForm = styled(Form)`
  display: flex;
  gap: 25px;
  height: fit-content;

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
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;

  .superInner {
    display: flex;
    flex-direction: row;
    gap: 25px;

    input {
      width: 75%;
      min-width: 100px;
    }
  }
`;

const EmailAndPhone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    width: 88%;
    min-width: 180px;
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
`;

const IdInputContainer = styled.div`
  position: relative;

  img{
    position: absolute;
    margin-top: 12px;
    margin-right: 8%;
    top: 0;
    right: 0;

    :hover{
      cursor: pointer;
    }
  }
`;
