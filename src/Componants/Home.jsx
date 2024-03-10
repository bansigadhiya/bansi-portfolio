import React from 'react'
import Header from './Header'
import Slider from './Slider'
import AboutMe from './AboutMe'
import Launguages from './Launguages'
import Animation from './Animation'
import ContactMe from './ContactMe'
import Project from './Project'

const Home = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <Slider />
                <AboutMe />
                <Launguages />
                <Project />
                <ContactMe />
                {/* <Animation /> */}
            </div>
        </>
    )
}

export default Home