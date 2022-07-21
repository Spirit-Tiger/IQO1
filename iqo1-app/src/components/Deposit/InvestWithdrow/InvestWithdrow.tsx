import GradientButton from "components/GradientButton";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

const InvestWithdrow = () => {
  const [toggle, setToggle] = useState(false);
  const [adressValue, setAdressValue] = useState(
    "1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee"
  );
  const [monayValue, setMonayValue] = useState("10000 , 00$ ");

  const HandleToggle = () => {
    setToggle(!toggle);
  };

  const HandleAdressValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdressValue(e.target.value);
  };

  const HandleMonayValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonayValue(e.target.value);
  };

  return (
    <InvestWithdrowContainer>
      <ChooseTypeContainer>
        <h3>
          <FormattedMessage id="deposit_choose_type_header" />
        </h3>
        <InvestWithdrowToggle>
          <InvestButton
            toggle={toggle}
            disabled={!toggle}
            onClick={HandleToggle}
          >
            <FormattedMessage id="invest_btn" />
          </InvestButton>
          <WithdrowButton
            toggle={toggle}
            disabled={toggle}
            onClick={HandleToggle}
          >
            <FormattedMessage id="withdrow_btn" />
          </WithdrowButton>
        </InvestWithdrowToggle>
        <AdressInputContaien>
          <h3>
            <FormattedMessage id="deposit_adress_header" />
          </h3>
          <AdressInput value={adressValue} onChange={HandleAdressValue} />
        </AdressInputContaien>
        <FlexContainer>
          <MoneyInputContainer>
            <h3>
              <FormattedMessage id="deposit_money_input_header" />
            </h3>
            <MoneyInput value={monayValue} onChange={HandleMonayValue} />
          </MoneyInputContainer>
          <CoinInputContainer>
            <h3>
              <FormattedMessage id="deposit_coin_input_header" />
            </h3>
            <CoinInput value="SOLANA" />
          </CoinInputContainer>
        </FlexContainer>
        <ContinueContainer>
          <ContinueText>
            <FormattedMessage id="deposit_continue_text" />
          </ContinueText>
          <ContinueButton>
            <GradientButton textId="deposit_continue_btn" />
          </ContinueButton>
        </ContinueContainer>
      </ChooseTypeContainer>
    </InvestWithdrowContainer>
  );
};

export default InvestWithdrow;

const InvestWithdrowContainer = styled.div`
  width: 691px;
  display: flex;
  flex-direction: column;
`;

const ChooseTypeContainer = styled.div`
  margin-top: 32px;

  h3 {
    font-weight: 600;
    font-size: 16px;
    margin-top: 0;
  }
`;

const InvestWithdrowToggle = styled.div`
  width: 257px;
  height: 52px;
  background: #26313d;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    padding: 0;
  }
`;

const InvestButton = styled.button<{ toggle: boolean }>`
  font-weight: 600;
  font-size: 16px;
  display: flex;
  height: 46px;
  justify-content: center;
  align-items: center;
  background: #26313d;
  border-radius: 8px;
  color: white;
  border: none;
  ${({ toggle }) =>
    toggle
      ? `width: 90px;
         color: white;`
      : `color: #ff9900;  
         width: 140px;
         background: #35475a;
         box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);`}
  transition:all .5s ease;
  :hover {
    cursor: pointer;
  }
`;

const WithdrowButton = styled.button<{ toggle: boolean }>`
  font-weight: 600;
  font-size: 16px;
  color: #ff9900;
  border: none;
  width: 151px;
  height: 46px;
  background: #35475a;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;

  ${({ toggle }) =>
    !toggle
      ? `width: 100px;
         color: white;
         background: #26313d;`
      : `color: #ff9900;  
         width: 151px;`}

  transition:all .5s ease;

  :hover {
    cursor: pointer;
  }
`;

const AdressInputContaien = styled.div`
  margin-top: 32px;

  h3 {
    font-weight: 600;
    font-size: 14px;
    margin-top: 0;
  }
`;

const AdressInput = styled.input`
  width: 550px;
  height: 47px;
  border: 1px solid #7e7e7e;
  border-radius: 16px;
  background: #12181e;
  font-weight: 600;
  font-size: 16px;
  padding-left: 25px;
  color: #ffffff;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 690px;
`;

const MoneyInputContainer = styled.div`
  margin-top: 32px;

  h3 {
    font-weight: 600;
    font-size: 16px;
    margin-top: 0;
  }
`;

const MoneyInput = styled.input`
  width: 300px;
  height: 62px;
  color: white;
  padding-left: 25px;
  border: 1px solid #7e7e7e;
  border-radius: 16px;
  background: #12181e;
  font-weight: 600;
  font-size: 24px;
`;

const CoinInputContainer = styled.div`
  margin-top: 32px;

  h3 {
    font-weight: 600;
    font-size: 16px;
    margin-top: 0;
  }
`;

const CoinInput = styled.input`
  font-weight: 600;
  font-size: 18px;
  color: white;
  width: 300px;
  height: 62px;
  padding-left: 25px;
  border: 1px solid #7e7e7e;
  border-radius: 16px;
  background: #12181e;
`;

const ContinueContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`;

const ContinueText = styled.p`
  font-size: 14px;
  color: #ffffff;
  margin-right: 30px;
`;

const ContinueButton = styled.div`
  button {
    font-weight: 600;
    font-size: 18px;
    color: #000000;
    height: 46px;
    width: 210px;
  }
`;