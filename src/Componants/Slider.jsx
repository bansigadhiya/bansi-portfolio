import React from 'react'
import Bansi from '/bansi.jpg';
import { ChevronsRight } from 'feather-icons-react/build/IconComponents';

const Slider = () => {
    return (
        <div className='slider h-[600px]'>
            <div className='flex w-full items-center'>
                <div className='w-1/2 h-[600px] flex items-center justify-center'>
                    <div className='px-10'>
                        <p className='capitalize text-[#876451] font-medium text-[20px] mb-1'>Shaping the Web</p>
                        <span className='uppercase block text-[70px] leading-[60px] font-bold'>Bansi gadhiya</span>
                        <p className='capitalize text-right text-[#876451] font-medium w-full text-[20px] mt-1'>React JS Developer</p>
                        <p className='text-gray-500 text-[13px]'>Proficient in various libraries and frameworks like Redux, I am skilled in writing clean, maintainable code and implementing best practices for performance and scalability.</p>
                        <a href='#about_me' className='mt-[20px] group uppercase about-btn btn hover:shadow-lg inline-flex items-center'>
                            about me
                            <ChevronsRight className="w-4 h-4 ms-1" />
                            <div className="btn-bg"></div>
                        </a>
                    </div>
                </div>
                <div className='w-1/2 px-10'>
                    <div className='relative'>
                        <div className="img-border shadow-2xl"></div>
                        <div className="slider-img">
                            <img src={Bansi} className='object-contain object-center' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider