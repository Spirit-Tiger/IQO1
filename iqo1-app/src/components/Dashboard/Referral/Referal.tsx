import React from "react";
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import ProfileImg from 'images/profile_image.png'


const Referal : React.FC = () => {
  return (
    <TotalBalanceContainer>
        <BalanceHeader>
            <FormattedMessage  id="dashboard_profit_title"/>
        </BalanceHeader>
        <FlexContainer>
            <BlockTitle>
                <NameContainer>
                    <h3>Name</h3>
                             <NameComponentWrapper>
                        {objects.map((obj) =>(
                            <NameComponent>
                            <ProfileImage src={ProfileImg} alt="" />
                            <p>{obj.name}</p>
                            </NameComponent>
                        ) )}
                            </NameComponentWrapper>
                </NameContainer>
                <NameContainer>
                    <h3>ID:</h3>
                    <IdComponentWrapper>
                        {objects.map((obj) =>(
                            <IdComponent>
                            <p>{obj.id}</p>
                            </IdComponent>
                        ) )}
                            </IdComponentWrapper>
                </NameContainer>
            </BlockTitle>
        </FlexContainer>
    </TotalBalanceContainer>
  );
}

export default Referal;

const BlockTitle = styled.div`
    font-size: 14px;
    width: 85%;
    display: flex;
    color:#848484;
    span {
       color: #EDA54C
    }
    justify-content: space-between;
`;
const TotalBalanceContainer = styled.div`
    height: max-content;
    flex-basis: 25%;
    height: 100%;
    width: 100%;
`;
const BalanceHeader = styled.h2`
    font-size: 18px;
`;

const FlexContainer = styled.div`
    /* width: 90%; */
    padding: 30px 0 ;
    height: max-content;
    background-color: #26313D ;
    border-radius: 12px;
    display: flex;
    height: fit-content;
   .circle{
    width: 90%;
    
   }
    /* justify-content: center; */

    @media (min-width: 320px){
        min-height: fit-content;
        flex-direction: column;
        align-items: center;

    }

    @media (min-width: 768px){
        min-height: 313px;
        height: fit-content;
        width: 100%;
        flex-direction: column;
        row-gap: 32px;
    }
`;

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    h3{
        margin: 0;
        font-weight: 500;
        font-size: 14px;
    }
`
const NameComponentWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction:column;
    gap: 10px;
    margin-top: 10px;
`
const NameComponent = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
`
const IdComponentWrapper = styled.div`
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction:column;
    padding: 0 10px;
    gap: 10px;
    margin-top: 20px;
    border-left: 1px solid grey;
    align-items: center;
   
`
const IdComponent = styled.div`
    text-align: center;
    margin-top: -8px;
    display: flex;
        /* p{
        margin-top:0;
        } */
    height: 100%;
   
`
const ProfileImage = styled.img`
    border-radius: 50%;
    width: 32px;
    height: 32px;
`;

const objects = [
    {
        name:'Andrusha',
        id:123
    },
    {
        name:'Andrusha',
        id:123
    },
    {
        name:'Andrusha',
        id:123
    },
    {
        name:'Andrusha',
        id:123
    },
    {
        name:'Andrusha',
        id:123
    }
]