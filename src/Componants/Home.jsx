import React from 'react'
import Header from './Header'
import Slider from './Slider'
import AboutMe from './AboutMe'

const Home = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <Slider />
                <AboutMe />
            </div>
        </>
    )
}

export default Home