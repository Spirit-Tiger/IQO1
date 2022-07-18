import styled from "styled-components";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import MainImg from "../images/main_background.png";
import MobileBg from "../images/mobile_background.png";

const MainFrame = () => {
  return (
    <MainFrameStyle>
      <MainFrameContainer>
        <Header />
        <MainContent />
      </MainFrameContainer>
    </MainFrameStyle>
  );
};

export default MainFrame;

const MainFrameStyle = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  background: linear-gradient(
      254.61deg,
      rgba(255, 184, 0, 0.81) 0%,
      rgba(15, 23, 30, 0.92) 80.94%
    ),
    url(${MainImg}) no-repeat center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 320px) {
    background: linear-gradient(
        254.61deg,
        rgba(255, 184, 0, 0.81) 0%,
        rgba(15, 23, 30, 0.92) 80.94%
      ),
      url(${MobileBg}) no-repeat center/cover;
  }

  @media (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    background: linear-gradient(
        254.61deg,
        rgba(255, 184, 0, 0.81) 0%,
        rgba(15, 23, 30, 0.92) 80.94%
      ),
      url(${MainImg}) no-repeat center/cover;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MainFrameContainer = styled.div`
  width: 67.8vw;

  @media (min-width: 320px) {
    width: 82vw;
  }

  @media (min-width: 768px) {
    width: 67.8vw;
  }
`;
