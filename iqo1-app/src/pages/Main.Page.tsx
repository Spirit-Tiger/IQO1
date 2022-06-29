import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import MainImg from "../images/main_background.png";

const MainPage = () => {
  return (
    <MainFrame>
        <Header />
        <MainContent />
    </MainFrame>
  );
};

export default MainPage;

const MainFrame = styled.div`
width: 100vw;
height: 100vh;
max-width: 100%;
background: linear-gradient(254.61deg, rgba(255, 184, 0, 0.81) 0%, rgba(15, 23, 30, 0.92) 80.94%), url(${MainImg}) no-repeat center/cover; 
display: flex;
flex-direction: column;
`;