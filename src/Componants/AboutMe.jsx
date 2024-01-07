import React from 'react'
import about from '/about.png';

const AboutMe = () => {

  return (
    <div className='pt-[100px]'>
      <div className='text-center'>
        <h1 className='font-bold uppercase m-0 leading-[40px]'>About me</h1>
        <p className='text-base text-primary font-medium'>Making the Web Beautiful and Functional</p>
      </div>
      <div id="about_me" className='flex flex-wrap lg:space-y-0 items-center'>
        <div className='w-full lg:w-1/2'>
          <img src={about} className='max-w-[75%] about-img mx-auto' />
        </div>
        <div className='w-full lg:w-1/2 p-5'>
          <ul className='list-disc text-sm space-y-4'>
            <li>
              As a highly motivated and detail-oriented React developer, I am eager to contribute my skills and passion for coding to a dynamic team.
            </li>
            <li>
              With a solid foundation in JavaScript, HTML, and CSS, I have honed my skills in React through various projects and personal initiatives.
            </li>
            <li>
              My strong understanding of front-end web development and proficiency in modern front-end frameworks like React and Redux allow me to create dynamic, responsive, and user-friendly web applications.
            </li>
            <li>
              I am a quick learner and am always up-to-date with the latest technologies and programming best practices.
            </li>
            <li>
              With excellent problem-solving skills, I can efficiently identify and resolve issues in web applications. Additionally, I have strong collaboration skills, allowing me to work effectively in a team and communicate ideas clearly.
            </li>
            <li>
              I am excited to bring my skills and experience to a company that values creativity, innovation, and teamwork.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutMe