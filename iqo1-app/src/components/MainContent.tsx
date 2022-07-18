import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import RenderGltf from "./Model3D";
import GradientButton from "./GradientButton";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./sliderPagination.css";

const MainContent = () => {
  return (
    <ContentContainer>
      <Swiper
        className="sliderPagination"
        // allowTouchMove={false}
        modules={[Pagination, Autoplay]}
        slidesPerView={0.999}
        autoplay={{
          delay: 500000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <MainContentContainer>
            <MainTextHeader>
              <FormattedMessage id="slogan_header" />
            </MainTextHeader>
            <ButtonContainer>
              <GradientButton textId="starting_btn" />
            </ButtonContainer>
          </MainContentContainer>
        </SwiperSlide>
        <SwiperSlide>
          <MainContentContainer>
            <div>
              <MainTextHeader>
                <FormattedMessage id="slogan_header_slide2" />
              </MainTextHeader>
              <MainText>
                <FormattedMessage id="slogan_text_slide2" />
              </MainText>
            </div>
            <ButtonContainer>
              <GradientButton textId="starting_btn" />
            </ButtonContainer>
          </MainContentContainer>
        </SwiperSlide>
        <SwiperSlide>
          <MainContentContainer>
            <MainTextHeader>
              <FormattedMessage id="slogan_header_slide3" />
            </MainTextHeader>
            <ButtonContainer>
              <GradientButton textId="starting_btn" />
            </ButtonContainer>
          </MainContentContainer>
        </SwiperSlide>
      </Swiper>
      <CanvasContainer>
        <Canvas>
          <RenderGltf shadow={false} scale={1.6} version={1} />
        </Canvas>
      </CanvasContainer>
    </ContentContainer>
  );
};

export default MainContent;

const ContentContainer = styled.div`
  height: calc(100vh - 120px);
  min-height: 480px;
  display: flex;

  @media (min-width: 320px) {
    flex-direction: column;
    width: 82vw;
    position: relative;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    width: 67.8vw;
  }
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) {
    width: 82vw;
    height: 90vh;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 768px) {
    padding-left: 3px;
    width: 34vw;
    height: 60vh;
    justify-content: center;
    align-items: flex-start;
  }

  @media (min-width: 1080px) {
    width: 38vw;
  }
`;

const MainTextHeader = styled.h1`
  margin: 0;
  color: white;

  @media (min-width: 320px) {
    font-size: 1.4em;
    text-align: center;
  }

  @media (min-width: 768px) {
    font-size: 3.5vw;
    text-align: left;
  }

  @media (min-width: 1080px) {
    margin-top: 40px;
  }

  @media (min-width: 1500px) {
    font-size: 3.7em;
  }
`;

const MainText = styled.p`
  color: white;
  margin: 0;

  @media (min-width: 320px) {
    font-size: 1.2em;
    text-align: center;
  }

  @media (min-width: 768px) {
    font-size: 1.3em;
    text-align: left;
  }
`;

const CanvasContainer = styled.div`

  @media (min-width: 320px) {
    width: 82vw;
    height: 62vh;
    position: absolute;
    top: 10vh;
  }

  @media (min-width: 375px) {
    width: 82vw;
    height: 62vh;
  }

  @media (min-width: 768px) {
    position: static;
    width: 32vw;
    height: 100%;
  }
`;

const ButtonContainer = styled.div`


  @media (min-width: 320px) {
    margin-bottom: 90px;
  }

  @media (min-width: 375px) {
    margin-bottom: 110px;
  }

  @media (min-width: 768px) {
    margin-top: 30px;
    margin-bottom: 0;
  }

  @media (min-width: 1080px) {
    margin-top: 60px;
  }
`;
