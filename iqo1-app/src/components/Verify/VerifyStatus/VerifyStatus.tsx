import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import InfoIcon from "images/extra_info_icon.png";

const VerifyStatus = () => {
  return (
    <VerifyStatusContainer>
      <div>
        <h3>
          <FormattedMessage id="verify_status_header" />
        </h3>
        <VerifyCurrentStatus>not veified</VerifyCurrentStatus>
        <img src={InfoIcon} />
      </div>
    </VerifyStatusContainer>
  );
};

export default VerifyStatus;

const VerifyStatusContainer = styled.div`
  height: 105px;
  background: #0b0b0b;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  div {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      margin: 0;
      font-size: 1.3vw;
    }

    p {
      margin: 0;
      font-size: 1.2vw;
    }

    img {
      width: 22px;
      height: 22px;
    }
  }

  @media (min-width: 320px) {
    width: 85vw;
    margin-top: 20px;
    div {
      width: 65%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        margin: 0;
        font-size: 18px;
      }

      p {
        margin: 0;
        font-size: 14px;
        color: #E9E9E9;;
      }

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  @media (min-width: 768px) {
    width: 60vw;
    margin-top: 20px;

    div {
      width: 65%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        margin: 0;
        font-size: 24px;
      }

      p {
        margin: 0;
        font-size: 18px;
      }

      img {
        width: 22px;
        height: 22px;
      }
    }
  }

  @media (min-width: 1280px) {
    width: 30vw;
    min-width: 480px;
    margin-top: 30px;
    div {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        margin: 0;
        font-size: 1.3vw;
      }

      p {
        margin: 0;
        font-size: 1.2vw;
      }

      img {
        width: 22px;
        height: 22px;
      }
    }
  }
`;

const VerifyCurrentStatus = styled.p`
  font-size: 18px;
`;
