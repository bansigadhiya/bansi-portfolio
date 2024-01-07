import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Html from '../../public/html.png'
import Css from '../../public/css.png'
import Js from '../../public/js.png'
import react from '../../public/react.png'
import Vite from '../../public/vite.png'
const Launguages = () => {
    return (
        <div className='pt-[100px]'>
            <div className='text-center mb-[40px]'>
                <h1 className='font-bold uppercase m-0 leading-[40px]'>languages i known</h1>
                <p className='text-base text-primary font-medium'>Building Bridges with Code and Language</p>
            </div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper" breakpoints={{
                250: {
                    slidesPerView: 1,
                },
                400: {
                    slidesPerView: 2,
                },
                600: {
                    slidesPerView: 3,
                },
                800: {
                    slidesPerView: 4,
                },
                1000: {
                    slidesPerView: 5,
                },
            }}>
                <SwiperSlide>
                    <img src={Html} className='max-h-[120px] block mx-auto mb-[20px]' />
                    <span className='uppercase font-medium text-center block text-lg'>html</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Css} className='max-h-[120px] block mx-auto mb-[20px]' />
                    <span className='uppercase font-medium text-center block text-lg'>css</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Js} className='max-h-[120px] block mx-auto mb-[20px]' />
                    <span className='uppercase font-medium text-center block text-lg'>javascript</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={react} className='max-h-[120px] block mx-auto mb-[20px]' />
                    <span className='uppercase font-medium text-center block text-lg'>react js</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Vite} className='max-h-[120px] block mx-auto mb-[20px]' />
                    <span className='uppercase font-medium text-center block text-lg'>vite</span>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Launguages