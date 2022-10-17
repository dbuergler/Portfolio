import React from 'react';
import Line from '../assets/Line.png';
import CSS from '../assets/css3-alt.svg'
import Html from '../assets/html5.svg';
import Javascript from'../assets/square-js.svg';
import reactImage from '../assets/react1.svg';
import Angular from '../assets/angular.svg';
import SQL from '../assets/icons8-mysql-logo.svg';
import Figma from '../assets/figma.svg'




const Skills = () => {
    return (
        <div id='skills'>
        <div>
            <h2 className='mt-28 font-notoSans text-lg font-semibold'>Skills</h2>
        </div>
        <div>
            <img src={Line} alt="line" className='mx-auto mt-6'/>
        </div>
        <div className='hover:animate-pulse cursor-pointer'>
            <img src={Html} alt="html5" className='max-w-sm h-20 mt-10 ml-48'/>
            <p className='font-bold font-notoSans text-primary flex mt-7 ml-[200px]'>HTML</p>
        </div>
        <div className='hover:animate-pulse cursor-pointer'>
            <img src={CSS} alt="css" className='max-w-sm h-20 mt-[-132px]  ml-[309px]'/>
            <p className='font-bold font-notoSans text-primary  flex mt-7 ml-[325px]'>CSS</p>
        </div>
        <div className='hover:animate-pulse cursor cursor-pointer'>
            <img src={Javascript} alt="javascript" className='max-w-sm h-20 mt-[-132px]  ml-[440px]'/>
            <p className='font-bold font-notoSans text-primary flex mt-7 ml-[438px]'>Javascript</p>
        </div>
        <div className='hover:animate-pulse cursor-pointer'>
            <img src={reactImage} alt="react" className='max-w-sm h-20 mt-[-132px]  ml-[565px]'/>
            <p className='font-bold font-notoSans text-primary flex mt-7 ml-[578px]'>ReactJs</p>
        </div>
        <div className='hover:animate-pulse cursor-pointer'>
            <img src={Angular} alt="angular" className='max-w-sm h-20 mt-[-132px]  ml-[693px]'/>
            <p className='font-bold font-notoSans text-primary flex mt-7 ml-[699px]'>Angular</p>
        </div>
        <div className='hover:animate-pulse cursor-pointer'>
            <img src={SQL} alt="sql" className='max-w-sm h-20 mt-[-132px]  ml-[810px]'/>
            <p className='font-bold font-notoSans text-primary flex mt-7 ml-[820px]'>MySQL</p>
        </div>
        <div className='hover:animate-pulse cursor-pointer'>
            <img src={Figma} alt="figma" className='max-w-sm h-20 mt-[-132px]  ml-[930px]'/>
            <p className='font-bold font-notoSans text-primary flex mt-7 ml-[920px]'>UX Design</p>
        </div>
        <hr class="my-8 h-px bg-gray-300 border-0 dark:bg-gray-700 mt-40"></hr>
        



        </div>
        
    )
}

export default Skills;

