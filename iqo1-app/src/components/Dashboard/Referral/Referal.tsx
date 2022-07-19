import React from "react";
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import ProfileImg from 'images/profile_image.png'


const Referal : React.FC = () => {
  return (
    <TotalBalanceContainer>
        <BalanceHeader>
            <FormattedMessage  id="dashboard_referal_title"/>
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
    min-width: 282px;
    @media (min-width: 320px){
    }
    @media (min-width: 768px){
        flex-basis: 100%;
    }
    @media (min-width: 1280px){
        flex-basis: calc(50% - 10px);
    }
    @media (min-width: 1500px){
        flex-basis: 25%;
    }
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
    height: 290px;
    p{
        font-weight:500;
        font-size: 12px;
        color: white;
    }
    /* justify-content: center; */

    @media (min-width: 320px){
        min-height: fit-content;
        flex-direction: column;
        align-items: center;
        max-height: 290px;
    }

    @media (min-width: 768px){
        max-height: 290px;
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
    overflow: hidden;
`
const NameComponentWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction:column;
    /* gap: 15px; */
    row-gap: 15px;
    margin-top: 15px;
`
const NameComponent = styled.div`
    align-items: center;
    display: flex;
    height: 40px;
    column-gap: 10px;
`
const IdComponentWrapper = styled.div`
    height:275px;
    align-items: center;
    display: flex;
    flex-direction:column;
    padding: 0 10px;
    gap: 15px;
    margin-top: 15px;
    border-left: 1px solid;
    border-right: none;
    border-bottom: none;
    border-top: none;
    border-image: linear-gradient(to bottom,#00000000 0%, grey 0%, grey 95%, #00000000 95%) 1;
`
const IdComponent = styled.div`
    text-align: center;
    align-items: center;
    display: flex;
    height: 40px;
    gap: 10px;
   
`
const ProfileImage = styled.img`
    border-radius: 50%;
    width: 32px;
    height: 32px;
`;

const objects = [
    {
        name:'Andrusha Sinkevich',
        id:123456
    },
    {
        name:'Andrusha Sinkevich',
        id:123456
    },
    {
        name:'Andrusha Sinkevich',
        id:123456
    },
    {
        name:'Andrusha Sinkevich',
        id:123456
    },
    {
        name:'Andrusha Sinkevich',
        id:123456
    }
]