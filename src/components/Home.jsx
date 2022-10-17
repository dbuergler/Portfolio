import React from "react";
import Background from '../assets/background.jpg';

const Home = () => {
  const links = [
    {
      name: 'Projects',
      link: '#projects',
    },
    {
      name: 'Contact Me',
      link: '#contact-me',
    },
  ]
 return(
  <div id="#" className="mt-72">
    <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-1 md:flex-row">
      <div className="flex flex-col justify-center  h-full">
        <h1 className="font-notoSans text-primary font-semibold text-xl sm: text-md px-4">Hi. I am Daniel, Developer and Designer.</h1>
        <p className="font-notoSans text-secondary font-medium mt-8 text-md  max-w-screen-xl">With my skills in web development and UX Design, I design beautiful websites to help create a better user experience for everyone.</p>
      <div className="mt-8 space-x-7 mb-12">
        <a className="bg-secondary px-10 py-1 font-notoSans font-semibold text-white text-md border border-primary shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" href={'/#contact-me'}>
          Hire Me
        </a>
        <a href= {'/#projects'} className="bg-secondary px-7 py-1 font-notoSans font-semibold text-white text-md border border-primary shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          See My Projects
        </a>
      </div>
      </div>
      <div className="mb-20 ml-8">
        <img src={Background} alt='Person' className="rounded-full w-[510px] border border-black drop-shadow-lg mx-auto animate-fade-in-down"/>
      </div>
    </div>
  </div>
    
 )
}

export default Home;