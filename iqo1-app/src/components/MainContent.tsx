import React, { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import{messages} from '../i18n/eng';
import { LOCALES } from "../i18n/constants";
import styled from "styled-components";
import { Canvas, } from '@react-three/fiber';
import RenderGltf from "./Model3D";
import GradientButton from "./GradientButton";
import  { Pagination, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './sliderPagination.css';

const MainContent = () => {

  const[locale, setLocale]= useState(LOCALES.ENGLISH);
  const [open, setOpen] = useState(false);

  return (
    <IntlProvider messages={messages[locale]} locale={locale}>
            <Swiper className='sliderPagination'
                // allowTouchMove={false}
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                autoplay={{
                    delay: 3000000,
                    disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,     
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <MainContentContainer>
                            <MainTextContainer>
                                <MainTextHeader>
                                    <FormattedMessage id="slogan_header"/>
                                </MainTextHeader>
                            </MainTextContainer>
                            <ButtonContainer>
                                <GradientButton textId="starting_btn"/>
                            </ButtonContainer>
                            <CanvasContainer>
                                <Canvas>
                                    <RenderGltf shadow={false} scale={1.6} version={1}/> 
                                </Canvas>
                            </CanvasContainer>
                        </MainContentContainer>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SecondSlideContainer>
                            <SlideHeader1>
                                <FormattedMessage id="slogan_header_slide2"/>
                            </SlideHeader1>
                            <MainText>
                                <FormattedMessage id="slogan_text_slide2"/>
                            </MainText>
                            <GradientButton textId="starting_btn"/>
                        </SecondSlideContainer>
                    </SwiperSlide>
                    <SwiperSlide>  
                        <SecondSlideContainer>
                            <SlideHeader2>
                                <FormattedMessage id="slogan_header_slide3"/>
                            </SlideHeader2>
                            <GradientButton textId="starting_btn"/>
                        </SecondSlideContainer>
                    </SwiperSlide>
            </Swiper>
    </IntlProvider>
  );
};

export default MainContent;

const MainContentContainer = styled.div`
    width: 1300px;
    height: calc(100vh - 120px) ;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);

    @media (min-width: 320px) {
        grid-template-columns: 1fr;
        width: 100%;
        height: calc(100vh - 120px) ;
    }

    @media (min-width: 768px) {
        width: 1300px;
        height: calc(100vh - 120px) ;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, 1fr);
    }
`;

const MainTextContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: column ;
    align-self: center;

    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    
    @media (min-width: 320px) {
        align-self: start;
        justify-self: center;
        margin: 0 10px;
    }
   
    @media (min-width: 768px) {
        color: white;
        width: 30vw;
        display: flex;
        flex-direction: column ;
        align-self: center;
        justify-self: start;
        margin: 0;

        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;
    }
`;

const MainTextHeader = styled.h1`
    font-size:3.2em ;
    margin: 0;

    @media (min-width: 320px) {
        font-size:1.5em;
    }

    @media (min-width: 768px) {
        font-size:3.2em ;
        margin: 0;
    }

`;

const MainText = styled.p`
    margin: 0;
    margin-bottom: 60px;
    
    @media (min-width: 320px) {
        font-size:1.3em;

    }

    @media (min-width: 768px) {
        font-size:1.4em ;
    }
`;

const CanvasContainer = styled.div`
    width: 450px;
    height: 100%;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;
    justify-self: end;

    @media (min-width: 320px) {
        width: 82vw;
        height: 62vh;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
        justify-self: center;
    }

    @media (min-width: 375px) {
        width: 82vw;
        height: 62vh;
    }

    @media (min-width: 768px) {
        width: 450px;
        height: 100%;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 4;
        justify-self: end;
    }
`;
const ButtonContainer = styled.div`
    
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end:3;
    align-self: center;

    @media (min-width: 320px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end:4;
        justify-self: center;
        align-self: start ;
        margin-top: -45px;
    }

    @media (min-width: 375px) {
        margin-top: -25px;;
    }

    @media (min-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end:3;
        align-self: center;
        justify-self: start;
    }
`;

const SecondSlideContainer = styled.div`
    color: white;
    
    @media (min-width: 320px) {
        min-width: 320px;
        height: calc(100vh - 120px) ;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media (min-width: 768px) {
        width: 33vw;;
        height: calc(100vh - 120px) ;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
        }
`;

const SlideHeader1 = styled(MainTextHeader)`
    margin-top: -220px;

`;

const SlideHeader2 = styled(MainTextHeader)`
    margin-top: -220px;
    margin-bottom: 60px;
`;


