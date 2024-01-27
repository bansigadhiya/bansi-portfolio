import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Project = () => {

    return (
        <div className='pt-[100px]'>
            <div className='text-center'>
                <h1 className='font-bold uppercase m-0 leading-[40px]'>Project & skills</h1>
                <p className='text-base text-primary font-medium'>ShopEasy.ai:- AI-powered E-commerce Made Easy</p>
            </div>
            <p className='text-center text-black text-sm w-[80%] my-4 mx-auto'>ShopEasy.ai is a revolutionary AI-powered e-commerce platform that simplifies online shopping for both businesses and consumers. It leverages AI technology to personalize product recommendations, streamline checkout processes, and optimize the overall shopping experience.</p>
            <div className='grid grid-cols-4 gap-6 w-full'>
                <div className='card w-full'>
                    <div className='card-content w-full'>
                        <h4 className='uppercase block text-2xl mb-4 font-semibold text-black'>my role</h4>
                        <span className='text-black font-medium text-xs leading-5 mb-4 block'>
                            As a dedicated Front-End Developer with ReactJS and Redux expertise, I played a key role in bringing ShopEasy.ai to life. My responsibilities included:
                        </span>
                    </div>
                    <div className="card-hover-content transition-all duration-500">
                        <ul className='space-y-3 px-5 text-left text-white font-medium list-disc'>
                            <li className='text-xs'>
                                Building dynamic and responsive user interfaces using ReactJS, ensuring a seamless user experience across all devices.
                            </li>
                            <li className='text-xs'>
                                Implementing state management with Redux to maintain data consistency and enable smooth navigation through the platform.
                            </li>
                            <li className='text-xs'>
                                Optimizing website performance through code optimization and efficient use of React libraries.
                                Collaborating closely with designers and back-end developers to ensure a cohesive and high-quality final product.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='card w-full'>
                    <div className='card-content w-full'>
                        <h4 className='uppercase block text-2xl mb-4 font-semibold text-black'>Technical Highlights</h4>
                        <span className='text-black font-medium text-xs leading-5 mb-4 block'>
                            <ul className='space-y-3 px-5 text-left text-black inline-block font-medium list-disc'>
                                <li>ReactJS and Redux</li>
                                <li>AI Integration</li>
                                <li>Responsive Design</li>
                            </ul>
                        </span>
                    </div>
                    <div className="card-hover-content transition-all duration-500">
                        <ul className='space-y-3 px-5 text-left text-white font-medium list-disc'>
                            <li className='text-xs'>
                                Leveraged the power of ReactJS for building dynamic and reusable UI components, while Redux ensured efficient state management for a complex application.
                            </li>
                            <li className='text-xs'>
                                Worked on integrating AI algorithms for personalized product recommendations, creating a more engaging shopping experience for users.
                            </li>
                            <li className='text-xs'>
                                Built the platform using responsive design principles, ensuring optimal viewing and interaction on all devices.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='card w-full'>
                    <div className='card-content w-full'>
                        <h4 className='uppercase block text-2xl mb-4 font-semibold text-black'>Challenges and Solutions</h4>
                        <span className='text-black font-medium text-xs leading-5 mb-4 block'>
                            <ul className='space-y-3 px-5 text-left text-black inline-block font-medium list-disc'>
                                <li>Optimizing AI performance</li>
                                <li>Ensuring cross-browser compatibility</li>
                            </ul>
                        </span>
                    </div>
                    <div className="card-hover-content transition-all duration-500">
                        <ul className='space-y-3 px-5 text-left text-white font-medium list-disc'>
                            <li className='text-xs'>
                            Integrating AI features within the front-end presented performance challenges. I addressed this by implementing efficient data caching and lazy loading techniques.
                            </li>
                            <li className='text-xs'>
                            Building a consistent user experience across different browsers required meticulous testing and browser-specific code adjustments.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='card w-full'>
                    <div className='card-content w-full'>
                        <h4 className='uppercase block text-2xl mb-4 font-semibold text-black'>Impact and Results</h4>
                        <span className='text-black font-medium text-xs leading-5 mb-4 block'>
                            <ul className='space-y-3 px-5 text-left text-black inline-block font-medium list-disc'>
                                <li>Increased user engagement</li>
                                <li>Improved user experience</li>
                                <li>Enhanced brand reputation</li>
                            </ul>
                        </span>
                    </div>
                    <div className="card-hover-content transition-all duration-500">
                        <ul className='space-y-3 px-5 text-left text-white font-medium list-disc'>
                            <li className='text-xs'>
                            Personalized product recommendations have led to a higher click-through rate and conversion rate.
                            </li>
                            <li className='text-xs'>
                            Streamlined checkout process and intuitive interface have resulted in positive user feedback and repeat customers.
                            </li>
                            <li className='text-xs'>
                            ShopEasy.ai's innovative approach has garnered praise from industry experts and attracted new business partners.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project