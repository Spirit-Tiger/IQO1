import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './sliderPagination.css';
import styled from 'styled-components';

const Swiper1 = () => {
  return (
    <SwiperConatiner2>
    <SwiperContainer>
        <Swiper className='sliderPagination'
        modules={[Pagination, Autoplay, A11y]}
        slidesPerView={1}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        pagination={{
        clickable: true,     
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide><SlideStyle>Slide 1</SlideStyle></SwiperSlide>
        <SwiperSlide><SlideStyle>Slide 2</SlideStyle></SwiperSlide>
        <SwiperSlide><SlideStyle>Slide 3</SlideStyle></SwiperSlide>
        </Swiper>
    </SwiperContainer>
    </SwiperConatiner2>
  );
};

export default Swiper1;

const SlideStyle = styled.div`
    width: 50vw;
    height: 50vh;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SwiperConatiner2 = styled.div`
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SwiperContainer = styled.div`
    width: 80vw;
    max-width: 100%;
    height: 80vh;

   
`;
