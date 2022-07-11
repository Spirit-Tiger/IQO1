import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

interface GradientButtonProps {
    textId: string,
}

const GradientButton = ({textId}:GradientButtonProps) => {

  return (
    <GradientButtonStyle>
        <FormattedMessage id={textId}/>
    </GradientButtonStyle>
  );
};

export default GradientButton;

const GradientButtonStyle = styled.button`
    color: white;
    font-weight: bold;
    border: none;
    background: linear-gradient(92.77deg, #FFB800 16.59%, #9D7100 97.23%);
    border-radius: 8px;
    height: 40px;
    width: 180px;
    z-index: 2;

    :hover {
        cursor: pointer;
    }
`;
